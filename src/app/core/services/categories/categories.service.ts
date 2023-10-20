import { Injectable } from '@angular/core';
import {Store} from "@ngrx/store";
import {catchError, EMPTY, map, Observable} from "rxjs";
import {CategoryModel} from "../../models/category.model";
import {CategoriesSelectors} from "../../selectors/categories.selectors";
import {CategoriesActions} from "../../actions/categories.actions";
import {CategoriesState} from "../../models/states/categories.state";
import axios, {AxiosError} from 'axios';
import {environment} from "../../../../environments/environment";
import {fromPromise} from "rxjs/internal/observable/innerFrom";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private readonly categories$: Observable<CategoryModel[]>;

  constructor(private store: Store) {
    this.categories$ = this.store.select(CategoriesSelectors.selectCategories);
    this.getCategoriesFromJson().subscribe((categories) => {
      this.pushCategories(categories);
    });
  }

  getCategories(): Observable<CategoryModel[]> {
    return this.categories$;
  }

  private pushCategories(categories: CategoryModel[]) {
    const categoriesState: CategoriesState = {
      categories: categories
    };
    this.store.dispatch(CategoriesActions.pushCategories(categoriesState));
  }

  private getCategoriesFromJson(): Observable<CategoryModel[]> {
    return fromPromise(axios.get(environment.nomenclaturePath))
        .pipe(
            catchError((error: AxiosError) => {
              console.log(error.message);
              return EMPTY
            }),
            map((data): CategoryModel[] => {
              return data.data['categories'].map((category: any): CategoryModel => {
                return {
                  id: category['id'],
                  name: category['name']
                }
              });
            })
        );
  }
}
