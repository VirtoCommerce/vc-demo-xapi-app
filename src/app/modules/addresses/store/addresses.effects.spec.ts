import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Observable } from 'rxjs';

import { AddressesEffects } from './addresses.effects';
import { addressesFeatureKey, initialState } from './addresses.reducer';

describe('AddressesEffects', () => {
  let actions$: Observable<any>;
  let effects: AddressesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AddressesEffects,
        provideMockActions(() => actions$),
        provideMockStore({
          initialState: {
            [addressesFeatureKey]: initialState,
          },
        }),
      ],
    });

    effects = TestBed.inject(AddressesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
