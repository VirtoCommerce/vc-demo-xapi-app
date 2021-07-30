import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CurrentCustomerEffects } from './current-customer.effects';

describe('CurrentCustomerEffects', () => {
  let actions$: Observable<any>;
  let effects: CurrentCustomerEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CurrentCustomerEffects,
        provideMockActions(() => actions$),
      ],
    });

    effects = TestBed.inject(CurrentCustomerEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
