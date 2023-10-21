import {createAction, props} from "@ngrx/store";
import {ProductsState} from "../models/states/products.state";

export namespace CartActions {
  export const pushProducts = createAction(
    '[Cart] Push All Products',
    props<ProductsState>()
  )
}
