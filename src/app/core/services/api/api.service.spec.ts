import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import {provideMockStore} from "@ngrx/store/testing";

describe('ApiService', () => {
  let service: ApiService<null>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore({})],
    });
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
