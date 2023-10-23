import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductsService} from "../core/services/products/products.service";
import {map, Observable, Subscription} from "rxjs";
import {ProductModel} from "../core/models/api/product.model";
import {ActivatedRoute, Params} from "@angular/router";
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
    return this.activatedRoute.queryParams.subscribe((data: Params) => {
      this.products$ = this.productsService.getEntities();
      this.setProductsSorted();
      this.setProductsFiltered(data);
    });
  }

  private setProductsSorted(): void {
    this.products$ = this.products$.pipe(
      map( (products) => {
        const tempProducts = [...products];
        return tempProducts.sort((firstProduct: ProductModel, secondProduct: ProductModel) => {
          return firstProduct.name.toLowerCase().localeCompare(secondProduct.name.toLowerCase());
        });
      })
    );
  }

  private setProductsFiltered(data: Params): void {
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
                    String(tempProduct[productParam]).toLowerCase().startsWith(String(data[param]).toLowerCase())) {
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
