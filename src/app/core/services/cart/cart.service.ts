import { Injectable } from '@angular/core';
import {Store} from "@ngrx/store";
import {filter, map, Observable, of, switchMap} from "rxjs";
import {ProductModel} from "../../models/api/product.model";
import {CartSelectors} from "../../selectors/cart.selectors";
import {CartActions} from "../../actions/cart.actions";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private readonly products$: Observable<ProductModel[]>;
  constructor(private store: Store) {
    this.products$ = this.store.select(CartSelectors.selectCartProducts);
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

  getTotalCost(): Observable<number> {
    return this.getProducts().pipe(
      filter(products => products.length > 0),
      map(products => products.map(product => product.price)),
      switchMap(prices => {
        return of(prices.reduce((accum: number, price) => accum + price, 0))
      })
    )
  }

  getTotalProducts(): Observable<number> {
    return this.getProducts().pipe(
      filter(products => products.length > 0),
      switchMap(prices => {
        return of(prices.reduce((accum: number) => accum + 1, 0))
      })
    )
  }
}
