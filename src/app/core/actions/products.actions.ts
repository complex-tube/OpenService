import {createAction, props} from "@ngrx/store";
import {ProductsState} from "../models/states/products.state";

export namespace ProductsActions {
    export const pushProducts = createAction(
        '[Products List] Push All Products',
        props<ProductsState>()
    )
}
