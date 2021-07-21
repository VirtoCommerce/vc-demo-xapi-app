import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  DynamicFormControlEvent,
  DynamicFormService,
  DynamicFormValueControlModel,
  DynamicSelectModel,
} from '@ng-dynamic-forms/core';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { nonNull } from 'src/app/helpers/nonNull';
import { getCountries } from 'src/app/store/countries/countries.actions';
import { setCompany } from '../../store/company.actions';
import { Company } from '../../store/company.payload';
import { selectCountryOptions } from './countries.selector';
import { REGISTRATION_COMPANY_ADDRESS_FORM_LAYOUT } from './registration-company-address.layout';
import { REGISTRATION_COMPANY_ADDRESS_FORM_MODEL } from './registration-company-address.model';
import { PartialDeep } from 'type-fest';
import { Country } from 'src/app/models/country.model';
import { selectCountriesState } from 'src/app/store/countries/countries.selectors';
import { Subscription } from 'rxjs';

@Component({
  selector: 'vc-registration-company-address',
  templateUrl: './registration-company-address.component.html',
  styleUrls: [
    './registration-company-address.component.scss',
  ],
})
export class RegistrationCompanyAddressComponent implements OnInit, OnDestroy {
  formModel = REGISTRATION_COMPANY_ADDRESS_FORM_MODEL;

  formLayout = REGISTRATION_COMPANY_ADDRESS_FORM_LAYOUT;

  formGroup = this.formService.createFormGroup(this.formModel, { updateOn: 'blur' });

  countries?: Country[] | null;

  countriesSubscription?: Subscription;

  constructor(
    private readonly formService: DynamicFormService,
    private readonly store: Store
  ) {
  }

  ngOnInit(): void {
    const countriesModel = this.formService.findModelById<DynamicSelectModel<string>>('country', this.formModel);
    if (countriesModel != null) {
      countriesModel.options$ = this.store.select(selectCountryOptions).pipe(filter(nonNull));
    }
    this.countriesSubscription = this.store.select(selectCountriesState)
      .subscribe(countries => this.countries = countries);
    this.store.dispatch(getCountries());
  }

  onChange(event: DynamicFormControlEvent): void {
    let data: PartialDeep<Company> = {};
    switch (event.model.id) {
    case 'country': {
      const model = event.model as DynamicSelectModel<string>;
      const countryCode = model.value as string;
      const countryName = this.countries?.find(country => country.id == countryCode)?.name;
      data = {
        address: {
          countryCode,
          countryName,
        },
      };
      break;
    }
    default: {
      const model = event.model as DynamicFormValueControlModel<string>;
      data = {
        address: {
          [model.id]: model.value,
        },
      };
      break;
    }
    }
    this.store.dispatch(setCompany({ data }));
  }

  ngOnDestroy(): void {
    this.countriesSubscription?.unsubscribe();
  }
}
