import {createReducer, on} from "@ngrx/store";
import {ProductsState} from "../models/states/products.state";
import {ProductsActions} from "../actions/products.actions";

const initialProductsState: ProductsState = {
    products: []
}

export const productsReducer = createReducer(
    initialProductsState,
    on(ProductsActions.pushProducts, (_productsState: ProductsState, productsState: ProductsState): ProductsState => ({
            ..._productsState,
            products: productsState.products
        })
    )
)
