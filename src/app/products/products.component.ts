import { Component } from '@angular/core';
import {ProductsService} from "../core/services/products/products.service";
import {Observable} from "rxjs";
import {ProductModel} from "../core/models/product.model";

@Component({
  selector: 'os-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  products$: Observable<ProductModel[]>
  constructor(private productsService: ProductsService) {
    this.products$ = productsService.getProducts();
  }
}
