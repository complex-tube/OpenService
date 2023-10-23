import { Component } from '@angular/core';
import {CartService} from "../../../core/services/cart/cart.service";

@Component({
  selector: 'os-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(protected cartService: CartService) {
  }
}
