import { Component } from '@angular/core';
import {ProductsService} from "../core/services/products/products.service";
import {map, Observable} from "rxjs";
import {ProductModel} from "../core/models/product.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'os-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  products$!: Observable<ProductModel[]>
  constructor(private productsService: ProductsService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe((data) => {
        if (data['category']) {
            this.products$ = this.productsService.getProducts().pipe(
                map((products) => {return products.filter(
                    (product) => {
                        return product.category == data['category'];
                    }
                )})
            );
        } else {
            this.products$ = this.productsService.getProducts();
        }
    })
  }
}
