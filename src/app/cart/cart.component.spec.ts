import {ComponentFixture, TestBed} from '@angular/core/testing';

import { CartComponent } from './cart.component';
import {MockStore, provideMockStore} from "@ngrx/store/testing";
import {MatCardModule} from "@angular/material/card";
import {CartService} from "../core/services/cart/cart.service";
import {ProductModel} from "../core/models/api/product.model";
import {Store} from "@ngrx/store";

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let store: MockStore<{products: ProductModel[]}>
  const initialState: {products: ProductModel[]} = {products: [
    {
      id: 0,
      name: 'asd',
      category: 0,
      price: 0
    }]
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartComponent],
      providers: [CartService, provideMockStore({ initialState })],
      imports: [MatCardModule]
    });

    store = TestBed.get<Store>(Store);
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
