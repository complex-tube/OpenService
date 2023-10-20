import {createAction, props} from "@ngrx/store";
import {CategoriesState} from "../models/states/categories.state";

export namespace CategoriesActions {
  export const pushCategories = createAction(
    '[Categories List] Push All Categories',
    props<CategoriesState>()
  )
}
