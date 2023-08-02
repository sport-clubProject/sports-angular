import { TestBed } from '@angular/core/testing';

import { TokenInterceptorInterceptor } from './token-interceptor.service';

describe('TokenInterceptorService', () => {
  let service: TokenInterceptorInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenInterceptorInterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
