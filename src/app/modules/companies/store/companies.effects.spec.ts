import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CompaniesEffects } from './companies.effects';

describe('CompaniesEffects', () => {
  let actions$: Observable<any>;
  let effects: CompaniesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CompaniesEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(CompaniesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
