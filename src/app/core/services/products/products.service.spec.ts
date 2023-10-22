import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';
import {provideMockStore} from "@ngrx/store/testing";
import {ActivatedRoute} from "@angular/router";

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore({})],
    });
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
