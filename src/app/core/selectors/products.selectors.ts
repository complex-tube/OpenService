import {createFeatureSelector, createSelector} from "@ngrx/store";
import {CategoriesState} from "../models/states/categories.state";
import {ProductsState} from "../models/states/products.state";

export namespace ProductsSelectors {
    export const selectProductsState =
        createFeatureSelector<ProductsState>('productsState');
    export const selectProducts =
        createSelector(selectProductsState, (state) => state.products);
}
