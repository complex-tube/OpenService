import {createReducer, on} from "@ngrx/store";
import {ProductsState} from "../models/states/products.state";
import {CartActions} from "../actions/cart.actions";

const initialCartState: ProductsState = {
  products: []
}

export const cartReducer = createReducer(
  initialCartState,
  on(CartActions.pushProducts, (_cartState: ProductsState, cartState: ProductsState): ProductsState => ({
      ..._cartState,
      products: cartState.products
    })
  )
)
