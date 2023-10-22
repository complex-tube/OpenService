import {createReducer, on} from "@ngrx/store";
import {ProductsState} from "../models/states/products.state";
import {CartActions} from "../actions/cart.actions";
import {ProductModel} from "../models/api/product.model";

const initialCartState: ProductsState = {
  products: []
}

export const cartReducer = createReducer(
  initialCartState,
  on(CartActions.pushProducts, (_cartState: ProductsState, cartState: ProductsState): ProductsState => ({
      ..._cartState,
      products: cartState.products
    })
  ),
  on(CartActions.pushProduct, (_cartState: ProductsState, product: ProductModel): ProductsState => ({
      ..._cartState,
      products: [..._cartState.products, product]
    })
  ),
  on(CartActions.deleteProduct, (_cartState: ProductsState, product: ProductModel): ProductsState => ({
    ..._cartState,
    products: _cartState.products.filter((currentProduct) => {
        return currentProduct.id != product.id
      })
    })
  )
)
