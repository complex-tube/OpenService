import {createFeatureSelector, createSelector} from "@ngrx/store";
import {CategoriesState} from "../models/states/categories.state";

export namespace CategoriesSelectors {
  export const selectCategoriesState =
    createFeatureSelector<CategoriesState>('categoriesState');
  export const selectCategories =
    createSelector(selectCategoriesState, (state) => state.categories);
}
