import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { CheckoutService } from './checkout.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import * as Cart from 'src/app/store/cart/cart.reducer';

describe('CheckoutService', () => {
  let service: CheckoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        provideMockStore({
          initialState: {
            cart: Cart.initialState,
          },
        }),
      ],
    });
    service = TestBed.inject(CheckoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
