import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Observable } from 'rxjs';
import { CompanyEffects } from './registration.effects';
import * as CompanyRegistration from 'src/app/modules/registration/store/registration.reducer';
import * as Countries from 'src/app/store/countries/countries.reducer';

describe('CompanyEffects', () => {
  let actions$: Observable<any>;
  let effects: CompanyEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      providers: [
        provideMockStore({
          initialState: {
            countries: Countries.initialState,
            companyRegistration: CompanyRegistration.initialState,
          },
        }),
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
