import { Injectable } from '@angular/core';
import {catchError, EMPTY, map, Observable} from "rxjs";
import {ProductModel} from "../../models/api/product.model";
import {Store} from "@ngrx/store";
import {ProductsActions} from "../../actions/products.actions";
import {ProductsSelectors} from "../../selectors/products.selectors";
import {ProductsState} from "../../models/states/products.state";
import {fromPromise} from "rxjs/internal/observable/innerFrom";
import {environment} from "../../../../environments/environment";
import axios, {AxiosError} from "axios";
import {ApiService} from "../api/api.service";
import {ProductsModule} from "../../../products/products.module";

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends ApiService<ProductModel> {

  private readonly products$: Observable<ProductModel[]>;

  constructor(private store: Store) {
    super();
    this.products$ = this.store.select(ProductsSelectors.selectProducts);
    this.getEntitiesFromJson('products', ProductModel).subscribe((products) => {
      this.pushEntity(products);
    });
  }

  override getEntities(): Observable<ProductModel[]> {
    return this.products$;
  }

  protected override pushEntity(products: ProductModel[]) {
    const productsState: ProductsState = {
      products: products
    };
    this.store.dispatch(ProductsActions.pushProducts(productsState));
  }
}
