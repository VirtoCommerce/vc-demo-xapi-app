import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Observable } from 'rxjs';

import { CompaniesEffects } from './companies.effects';
import { companiesFeatureKey, initialState } from './companies.reducer';

describe('CompaniesEffects', () => {
  let actions$: Observable<any>;
  let effects: CompaniesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CompaniesEffects,
        provideMockActions(() => actions$),
        provideMockStore({
          initialState: {
            [companiesFeatureKey]: initialState,
          },
        }),
      ],
    });

    effects = TestBed.inject(CompaniesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
