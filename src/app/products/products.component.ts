import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductsService} from "../core/services/products/products.service";
import {map, Observable, Subscription, tap} from "rxjs";
import {ProductModel} from "../core/models/product.model";
import {ActivatedRoute, Params} from "@angular/router";
import {CartService} from "../core/services/cart/cart.service";
import {CategoriesService} from "../core/services/categories/categories.service";
import {ProductsModule} from "./products.module";

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
    return this.activatedRoute.queryParams.subscribe((data: Params) => {
      this.products$ = this.productsService.getProducts();
      this.getFilteredProducts(data);
    });
  }

  private getFilteredProducts(data: Params): void {
    for (const param in data) {
      if (data[param] != '') {
        this.products$ = this.products$.pipe(
          map((products) => {
            return products.filter((product) => {
              let filterResult = false;
              const tempProduct: {[char: string]: number | string} = {
                name: product.name,
                category: product.category
              }
              for (const productParam in tempProduct) {
                if (productParam == param) {
                  if (typeof tempProduct[productParam] == "number" && tempProduct[productParam] == data[param]) {
                    filterResult = true;
                  }
                  if (typeof tempProduct[productParam] == "string" &&
                    String(tempProduct[productParam]).toLowerCase().includes(String(data[param]).toLowerCase())) {
                    filterResult = true;
                  }
                }
              }
              return filterResult;
            })
          })
        )
      }
    }
  }
}
