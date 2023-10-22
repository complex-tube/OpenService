import { Injectable } from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {CategoryModel} from "../../models/api/category.model";
import {CategoriesSelectors} from "../../selectors/categories.selectors";
import {CategoriesActions} from "../../actions/categories.actions";
import {CategoriesState} from "../../models/states/categories.state";
import {ApiService} from "../api/api.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService extends ApiService<CategoryModel> {

  private readonly categories$: Observable<CategoryModel[]>;

  constructor(private store: Store, protected override router: Router) {
    super(router);
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
