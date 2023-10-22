import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';
import {provideMockStore} from "@ngrx/store/testing";

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore({})],
    });
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
