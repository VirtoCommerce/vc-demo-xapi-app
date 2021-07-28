import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { PersonalInformationComponent } from './personal-information.component';
import * as CompanyRegistration from 'src/app/modules/registration/store/company.reducer';
import * as Countries from 'src/app/store/countries/countries.reducer';
import { NG_VALIDATORS } from '@angular/forms';
import { DYNAMIC_VALIDATORS, Validator, ValidatorFactory } from '@ng-dynamic-forms/core';
import { passwordMatchValidator } from 'src/app/shared/password-match-validator';

describe('PersonalInformationComponent', () => {
  let component: PersonalInformationComponent;
  let fixture: ComponentFixture<PersonalInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideMockStore({
          initialState: {
            countries: Countries.initialState,
            companyRegistration: CompanyRegistration.initialState,
          },
        }),
        {
          provide: NG_VALIDATORS,
          useValue: passwordMatchValidator,
          multi: true,
        },
        {
          provide: DYNAMIC_VALIDATORS,
          useValue: new Map<string, Validator | ValidatorFactory>([
            [
              'passwordMatchValidator',
              passwordMatchValidator,
            ],
          ]),
        },
      ],
      declarations: [
        PersonalInformationComponent,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
