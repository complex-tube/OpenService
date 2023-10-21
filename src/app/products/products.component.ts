import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductsService} from "../core/services/products/products.service";
import {map, Observable, Subscription} from "rxjs";
import {ProductModel} from "../core/models/product.model";
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../core/services/cart/cart.service";

@Component({
  selector: 'os-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  products$!: Observable<ProductModel[]>

  queryParamsSub!: Subscription;
  constructor(private productsService: ProductsService,
              private activatedRoute: ActivatedRoute,
              protected cartService: CartService) {
  }

  ngOnInit() {
    this.queryParamsSub = this.getProducts();
  }

  ngOnDestroy() {
    this.queryParamsSub.unsubscribe();
  }

  private getProducts(): Subscription {
    return this.activatedRoute.queryParams.subscribe((data) => {
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
    });
  }
}
