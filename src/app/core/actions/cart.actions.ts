import {createAction, props} from "@ngrx/store";
import {ProductsState} from "../models/states/products.state";
import {ProductModel} from "../models/api/product.model";

export namespace CartActions {
  export const pushProducts = createAction(
    '[Cart] Push All Products',
    props<ProductsState>()
  );

  export const pushProduct = createAction(
    '[Cart] Push Product',
    props<ProductModel>()
  );

  export const deleteProduct = createAction(
    '[Cart] Delete Product',
    props<ProductModel>()
  );
}
