import {CategoriesState} from "../models/states/categories.state";
import {createReducer, on} from "@ngrx/store";
import {CategoriesActions} from "../actions/categories.actions";

const initialCategoriesState: CategoriesState = {
  categories: []
}

export const categoriesReducer = createReducer(
  initialCategoriesState,
  on(CategoriesActions.pushCategories, (_categoriesState: CategoriesState, categoriesState: CategoriesState): CategoriesState => ({
    ..._categoriesState,
    categories: categoriesState.categories
    })
  )
)
