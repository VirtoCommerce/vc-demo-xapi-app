import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DynamicFormControlEvent, DynamicFormService } from '@ng-dynamic-forms/core';
import { DynamicNGBootstrapFormComponent } from '@ng-dynamic-forms/ui-ng-bootstrap';
import { Store } from '@ngrx/store';
import { of, Subject } from 'rxjs';
import { concatMap, filter, takeUntil } from 'rxjs/operators';
import { fromFormModel, patchFormModel } from 'src/app/helpers/dynamic-forms';
import { nonNull } from 'src/app/helpers/nonNull';
import { Address } from 'src/app/models/address.model';
import { Country } from 'src/app/models/country.model';
import { selectSelectedCompany } from 'src/app/modules/companies/store/companies.selectors';
import { selectCountryOptions }
  from 'src/app/modules/registration/components/registration-company-address/countries.selector';
import { getCountries } from 'src/app/store/countries/countries.actions';
import { selectCountriesState } from 'src/app/store/countries/countries.selectors';
import { setAddress } from '../../store/addresses.actions';
import { selectSelectedAddress } from '../../store/addresses.selectors';
import { ADDRESS_EDIT_FORM_LAYOUT } from './address-edit-form.layout';
import { ADDRESS_EDIT_FORM_INPUTS, ADDRESS_EDIT_FORM_MODEL } from './address-edit-form.model';

@Component({
  selector: 'vc-address-edit',
  templateUrl: './address-edit.component.html',
  styleUrls: [
    './address-edit.component.scss',
  ],
})
export class AddressEditComponent implements AfterViewInit, OnDestroy {
  @ViewChild(DynamicNGBootstrapFormComponent, {
    static: true,
  })
  formComponent!: DynamicNGBootstrapFormComponent;

  formInputs = ADDRESS_EDIT_FORM_INPUTS;

  formModel = ADDRESS_EDIT_FORM_MODEL;

  formLayout = ADDRESS_EDIT_FORM_LAYOUT;

  formGroup = this.formService.createFormGroup(this.formModel, { updateOn: 'blur' });

  countries?: Country[] | null;

  unsubscriber = new Subject();

  selectedCompany$ = this.store.select(selectSelectedCompany);

  constructor(
    private readonly formService: DynamicFormService,
    private readonly store: Store,
    private readonly router: Router
  ) {}

  ngAfterViewInit(): void {
    this.store
      .select(selectCountriesState)
      .pipe(takeUntil(this.unsubscriber))
      .subscribe(countries => {
        this.countries = countries;
      });

    this.formInputs.countryCode.options$ = this.store.select(selectCountryOptions).pipe(
      filter(nonNull),
      concatMap(options => {
        return of([
          ...options,
        ]);
      })
    );
    this.store.dispatch(getCountries());

    this.store
      .select(selectSelectedAddress)
      .pipe(filter(nonNull), takeUntil(this.unsubscriber))
      .subscribe(state => {
        console.log(state);
        patchFormModel(this.formInputs, state);
        this.formService.detectChanges(this.formComponent);
      });
  }

  resetForm(): void {
    this.router.navigate([
      '/addresses',
    ]).catch(error => console.log(error));
  }

  onChange(event: DynamicFormControlEvent): void {
    const address = fromFormModel<Address>(event.model);
    if (address != null) {
      this.store.dispatch(setAddress({
        data: address,
      }));
    }
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
}
