import {createReducer, on} from "@ngrx/store";
import {ProductsState} from "../models/states/products.state";
import {ProductsAction} from "../actions/products.action";

const initialProductsState: ProductsState = {
    products: []
}

export const productsReducer = createReducer(
    initialProductsState,
    on(ProductsAction.pushProducts, (_productsState: ProductsState, productsState: ProductsState): ProductsState => ({
            ..._productsState,
            products: productsState.products
        })
    )
)
