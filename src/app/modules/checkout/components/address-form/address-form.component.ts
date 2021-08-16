/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DynamicFormOption, DynamicFormService } from '@ng-dynamic-forms/core';
import { Store } from '@ngrx/store';
import { of, Subject } from 'rxjs';
import { concatMap, filter, takeUntil } from 'rxjs/operators';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { nonNull } from 'src/app/helpers/nonNull';
import { getCountries } from 'src/app/store/countries/countries.actions';
import { selectCountriesState } from 'src/app/store/countries/countries.selectors';
import { getRegions } from 'src/app/store/regions/regions.actions';
import { selectRegionsState } from 'src/app/store/regions/regions.selectors';
import { CART_ADDRESS_FORM_LAYOUT } from './address-form.layout';
import { ADDRESS_FORM_INPUTS, CART_ADDRESS_FORM_MODEL, GENERAL_FORM_INPUTS } from './address-form.model';
import { CartAddress } from 'src/app/models/cart.model';

@Component({
  selector: 'vc-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: [
    './address-form.component.scss',
  ],
  encapsulation: ViewEncapsulation.None,
})
export class AddressFormComponent implements OnInit, OnDestroy {
  faTimes = faTimes;

  @Input() isShippingMode = true;

  @Input() cartAddress: CartAddress | null = null;

  @Output() addressUpdated = new EventEmitter<CartAddress | null>()

  userFormInputs = GENERAL_FORM_INPUTS;

  addressFormInputs = ADDRESS_FORM_INPUTS;

  formModel = CART_ADDRESS_FORM_MODEL;

  formLayout = CART_ADDRESS_FORM_LAYOUT;

  formGroup!: FormGroup;

  unsubscriber = new Subject();

  constructor(
    public readonly activeModal: NgbActiveModal,
    private readonly formService: DynamicFormService,
    private readonly store: Store
  ) {}

  fromFormModel(): CartAddress {
    return {
      ...this.formGroup.value.general.info,
      ...this.formGroup.value.general.address,
    } as CartAddress;
  }

  updateFormModel(): void {
    this.userFormInputs.firstName.value = this.cartAddress?.firstName ?? null;
    this.userFormInputs.lastName.value = this.cartAddress?.lastName ?? null;
    this.userFormInputs.email.value = this.cartAddress?.email ?? null;
    this.userFormInputs.phone.value = this.cartAddress?.phone ?? null;
    this.addressFormInputs.countryCode.value = this.cartAddress?.countryCode;
    this.addressFormInputs.regionId.value = this.cartAddress?.regionId;
    this.addressFormInputs.city.value = this.cartAddress?.city ?? null;
    this.addressFormInputs.postalCode.value = this.cartAddress?.postalCode ?? null;
    this.addressFormInputs.line1.value = this.cartAddress?.line1 ?? null;
    this.addressFormInputs.line2.value = this.cartAddress?.line2 ?? null;
  }

  submit(): void {
    const shippingAddress = this.fromFormModel();
    this.addressUpdated.emit(shippingAddress);

    this.activeModal.close();
  }

  ngOnInit(): void {
    this.updateFormModel();
    this.formGroup = this.formService.createFormGroup(this.formModel, { updateOn: 'blur' });

    this.store.dispatch(getCountries());

    this.addressFormInputs.countryCode.options$ = this.store.select(selectCountriesState)
      .pipe(
        filter(nonNull),
        concatMap(countries => {
          const options = countries.map(country => new DynamicFormOption({
            label: country.name,
            value: country.id,
          }));

          return of([
            new DynamicFormOption({
              label: undefined,
              value: undefined,
              disabled: true,
            }),
            ...options,
          ]);
        })
      );

    this.addressFormInputs.regionId.options$ = this.store.select(selectRegionsState)
      .pipe(
        concatMap(regionsMap => {
          if (!this.addressFormInputs.countryCode.value) {
            return [];
          }

          const regions = regionsMap.regions.get(this.addressFormInputs.countryCode.value as string);
          const options = regions?.map(region => new DynamicFormOption({
            label: region.name,
            value: region.id,
          })) ?? [];

          return of([
            new DynamicFormOption({
              label: undefined,
              value: undefined,
              disabled: true,
            }),
            ...options,
          ]);
        })
      );

    this.addressFormInputs.countryCode.valueChanges
      .pipe(
        takeUntil(this.unsubscriber)
      )
      .subscribe(countryCode => {
        if (countryCode) {
          this.store.dispatch(getRegions({ countryId: countryCode as string }));
        }
      });
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
}
