import { Component } from '@angular/core';
import {CartService} from "../core/services/cart/cart.service";
import {filter, map, Observable, of, switchMap} from "rxjs";

@Component({
  selector: 'os-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  constructor(protected cartService: CartService) {
  }

  getTotalCost(): Observable<number> {
    return this.cartService.getProducts().pipe(
      filter(products => products.length > 0),
      map(products => products.map(product => product.price)),
      switchMap(prices => {
        return of(prices.reduce((accum: number, price) => accum + price, 0))
      })
    )
  }
}
