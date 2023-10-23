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
}
