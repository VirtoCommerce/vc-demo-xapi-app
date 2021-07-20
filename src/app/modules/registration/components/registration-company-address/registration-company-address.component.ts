import { Component, OnInit } from '@angular/core';
import { DynamicFormService, DynamicSelectModel } from '@ng-dynamic-forms/core';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { nonNull } from 'src/app/helpers/nonNull';
import { getCountries } from 'src/app/store/countries/countries.actions';
import { selectCountryOptions } from './countries.selector';
import { REGISTRATION_COMPANY_ADDRESS_FORM_LAYOUT } from './registration-company-address.layout';
import { REGISTRATION_COMPANY_ADDRESS_FORM_MODEL } from './registration-company-address.model';

@Component({
  selector: 'vc-registration-company-address',
  templateUrl: './registration-company-address.component.html',
  styleUrls: [
    './registration-company-address.component.scss',
  ],
})
export class RegistrationCompanyAddressComponent implements OnInit {
  formModel = REGISTRATION_COMPANY_ADDRESS_FORM_MODEL;

  formLayout = REGISTRATION_COMPANY_ADDRESS_FORM_LAYOUT;

  formGroup = this.formService.createFormGroup(this.formModel, {  });

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
    this.store.dispatch(getCountries());
  }
}
