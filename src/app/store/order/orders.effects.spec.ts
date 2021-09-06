import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { OrdersEffects } from './orders.effects';

describe('OrdersEffects', () => {
  let actions$: Observable<any>;
  let effects: OrdersEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        OrdersEffects,
        provideMockActions(() => actions$),
      ],
    });

    effects = TestBed.inject(OrdersEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
