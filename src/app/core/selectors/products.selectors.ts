import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ProductsState} from "../models/states/products.state";

export namespace ProductsSelectors {
    export const selectProductsState =
        createFeatureSelector<ProductsState>('productsState');
    export const selectProducts =
        createSelector(selectProductsState, (state) => state.products);
}
