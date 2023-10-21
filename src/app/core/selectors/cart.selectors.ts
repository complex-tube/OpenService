import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ProductsState} from "../models/states/products.state";

export namespace CartSelectors {
  export const selectCartState =
    createFeatureSelector<ProductsState>('cartState');
  export const selectCartProducts =
    createSelector(selectCartState, (state) => state.products);
}
