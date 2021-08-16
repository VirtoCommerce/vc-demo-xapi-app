import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AddressesEffects } from './addresses.effects';

describe('AddressesEffects', () => {
  let actions$: Observable<any>;
  let effects: AddressesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AddressesEffects,
        provideMockActions(() => actions$),
      ],
    });

    effects = TestBed.inject(AddressesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
