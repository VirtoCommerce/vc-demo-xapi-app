import { AfterViewInit, Component, OnDestroy, Output, EventEmitter, ViewChild } from '@angular/core';
import {
  DynamicFormControlEvent,
  DynamicFormOption,
  DynamicFormService,
} from '@ng-dynamic-forms/core';
import { Store } from '@ngrx/store';
import { concatMap, filter, takeUntil } from 'rxjs/operators';
import { nonNull } from 'src/app/helpers/nonNull';
import { getCountries } from 'src/app/store/countries/countries.actions';
import { setCompany } from '../../store/company.actions';
import { CompanyAddress } from 'src/app/models/company-registration.model';
import { selectCountryOptions } from './countries.selector';
import { REGISTRATION_COMPANY_ADDRESS_FORM_LAYOUT } from './registration-company-address.layout';
import {
  REGISTRATION_COMPANY_ADDRESS_FORM_MODEL,
  REGISTRATION_COMPANY_ADDRESS_INPUTS,
} from './registration-company-address.model';
import { Country } from 'src/app/models/country.model';
import { selectCountriesState } from 'src/app/store/countries/countries.selectors';
import { of, Subject } from 'rxjs';
import { selectCompanyRegistration } from '../../store/company.selectors';
import { DynamicNGBootstrapFormComponent } from '@ng-dynamic-forms/ui-ng-bootstrap';
import { fromFormModel, patchFormModel } from 'src/app/helpers/dynamic-forms';

@Component({
  selector: 'vc-registration-company-address',
  templateUrl: './registration-company-address.component.html',
  styleUrls: [
    './registration-company-address.component.scss',
  ],
})
export class RegistrationCompanyAddressComponent implements AfterViewInit, OnDestroy {
  @Output() formChange = new EventEmitter<boolean>()

  @ViewChild(DynamicNGBootstrapFormComponent, {
    static: true,
  })
  formComponent!: DynamicNGBootstrapFormComponent;

  formInputs = REGISTRATION_COMPANY_ADDRESS_INPUTS;

  formModel = REGISTRATION_COMPANY_ADDRESS_FORM_MODEL;

  formLayout = REGISTRATION_COMPANY_ADDRESS_FORM_LAYOUT;

  formGroup = this.formService.createFormGroup(this.formModel, { updateOn: 'blur' });

  countries?: Country[] | null;

  unsubscriber = new Subject();

  constructor(
    private readonly formService: DynamicFormService,
    private readonly store: Store
  ) {
  }

  ngAfterViewInit(): void {
    this.store.select(selectCountriesState)
      .pipe(takeUntil(this.unsubscriber))
      .subscribe(countries => {
        this.countries = countries;
      });
    this.formInputs.countryCode.options$ = this.store.select(selectCountryOptions)
      .pipe(filter(nonNull), concatMap(options => {
        return of([
          new DynamicFormOption({
            label: undefined,
            value: undefined,
            disabled: true,
          }),
          ...options,
        ]);
      }));
    this.formInputs.countryCode.options$.pipe(takeUntil(this.unsubscriber)).subscribe(() => {
      this.formInputs.countryCode.value = undefined;
    });
    this.store.dispatch(getCountries());

    this.store.select(selectCompanyRegistration)
      .pipe(takeUntil(this.unsubscriber))
      .subscribe(companyRegistration => {
        patchFormModel(this.formInputs, companyRegistration?.address);
        this.formService.detectChanges();
      });
  }

  onChange(event: DynamicFormControlEvent): void {
    const address = fromFormModel<CompanyAddress>(event.model);
    if (address != null) {
      this.store.dispatch(setCompany({
        data: {
          address,
        },
      }));
    }
    const formIsValid = event.group.valid;
    this.formChange.emit(formIsValid);
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
}
