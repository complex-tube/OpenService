import { TestBed } from '@angular/core/testing';

import { CategoriesService } from './categories.service';
import {provideMockStore} from "@ngrx/store/testing";

describe('CategoriesService', () => {
  let service: CategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore({})]
    });
    service = TestBed.inject(CategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
