import { Injectable } from '@angular/core';
import {catchError, EMPTY, map, Observable} from "rxjs";
import {ProductModel} from "../../models/product.model";
import {Store} from "@ngrx/store";
import {ProductsActions} from "../../actions/products.actions";
import {ProductsSelectors} from "../../selectors/products.selectors";
import {ProductsState} from "../../models/states/products.state";
import {fromPromise} from "rxjs/internal/observable/innerFrom";
import {environment} from "../../../../environments/environment";
import axios, {AxiosError} from "axios";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly products$: Observable<ProductModel[]>;

  constructor(private store: Store) {
    this.products$ = this.store.select(ProductsSelectors.selectProducts);
    this.getProductsFromJson().subscribe((products) => {
      this.pushProducts(products);
    });
  }

  getProducts(): Observable<ProductModel[]> {
    return this.products$;
  }

  private pushProducts(products: ProductModel[]): void {
    const productsState: ProductsState = {
      products: products
    };
    this.store.dispatch(ProductsActions.pushProducts(productsState));
  }

  private getProductsFromJson(): Observable<ProductModel[]> {
    return fromPromise(axios.get(environment.nomenclaturePath))
        .pipe(
            catchError((error: AxiosError) => {
              console.log(error.message);
              return EMPTY
            }),
            map((data): ProductModel[] => {
              return data.data['products'].map((product: any): ProductModel => {
                return {
                  id: product['id'],
                  name: product['name'],
                  category: product['category'],
                  price: product['price']
                }
              });
            })
        );
  }
}
