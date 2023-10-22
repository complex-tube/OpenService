import { Injectable } from '@angular/core';
import {Store} from "@ngrx/store";
import {catchError, EMPTY, map, Observable} from "rxjs";
import {CategoryModel} from "../../models/api/category.model";
import {CategoriesSelectors} from "../../selectors/categories.selectors";
import {CategoriesActions} from "../../actions/categories.actions";
import {CategoriesState} from "../../models/states/categories.state";
import axios, {AxiosError} from 'axios';
import {environment} from "../../../../environments/environment";
import {fromPromise} from "rxjs/internal/observable/innerFrom";
import {ApiService} from "../api/api.service";
import {ProductModel} from "../../models/api/product.model";
import {ProductsState} from "../../models/states/products.state";
import {ProductsActions} from "../../actions/products.actions";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService extends ApiService<CategoryModel> {

  private readonly categories$: Observable<CategoryModel[]>;

  constructor(private store: Store) {
    super();
    this.categories$ = this.store.select(CategoriesSelectors.selectCategories);
    this.getEntitiesFromJson('categories', CategoryModel).subscribe((categories) => {
      this.pushEntity(categories);
    });
  }

  override getEntities(): Observable<CategoryModel[]> {
    return this.categories$;
  }

  protected override pushEntity(categories: CategoryModel[]) {
    const categoriesState: CategoriesState = {
      categories: categories
    }
    this.store.dispatch(CategoriesActions.pushCategories(categoriesState));
  }
}
