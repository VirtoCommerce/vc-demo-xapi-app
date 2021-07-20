import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CountriesEffects } from './countries.effects';

describe('CountriesEffects', () => {
  let actions$: Observable<any>;
  let effects: CountriesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CountriesEffects,
        provideMockActions(() => actions$),
      ],
    });

    effects = TestBed.inject(CountriesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
