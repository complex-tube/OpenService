import { Injectable } from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable, of, switchMap} from "rxjs";
import {ProductModel} from "../../models/product.model";
import {CartSelectors} from "../../selectors/cart.selectors";
import {CartActions} from "../../actions/cart.actions";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private readonly products$: Observable<ProductModel[]>;
  constructor(private store: Store) {
    this.products$ = this.store.select(CartSelectors.selectCartProducts);
    this.products$.subscribe((products) => {
      console.log(products);
    });
  }

  isProductInTheCart(product: ProductModel): Observable<boolean> {
    return this.products$.pipe(
      switchMap(products => {
        return of(!!products.find((currentProduct) => currentProduct.id == product.id))
      })
    );
  }

  getProducts(): Observable<ProductModel[]> {
    return this.products$;
  }

  deleteFromCart(product: ProductModel): void {
    this.store.dispatch(CartActions.deleteProduct(product));
  }

  addToCart(product: ProductModel): void {
    this.store.dispatch(CartActions.pushProduct(product));
  }
}
