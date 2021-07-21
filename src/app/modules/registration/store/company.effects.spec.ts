import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Observable } from 'rxjs';

import { CompanyEffects } from './company.effects';

describe('CompanyEffects', () => {
  let actions$: Observable<any>;
  let effects: CompanyEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      providers: [
        provideMockStore(),
        CompanyEffects,
        provideMockActions(() => actions$),
      ],
    });

    effects = TestBed.inject(CompanyEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
