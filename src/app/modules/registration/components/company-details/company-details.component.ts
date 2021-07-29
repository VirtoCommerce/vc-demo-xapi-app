import { AfterViewInit, Component, OnDestroy, Output, EventEmitter, ViewChild } from '@angular/core';
import { DynamicFormControlEvent, DynamicFormOption, DynamicFormService } from '@ng-dynamic-forms/core';
import { COMPANY_DETAILS_INPUTS, COMPANY_DETAILS_MODEL } from './company-details.model';
import { CompanyRegistration } from 'src/app/models/company-registration.model';
import { setCompany } from '../../store/company.actions';
import { Store } from '@ngrx/store';
import { fromFormModel, patchFormModel } from 'src/app/helpers/dynamic-forms';
import { of, Subject } from 'rxjs';
import { concatMap, filter, takeUntil } from 'rxjs/operators';
import { selectCompanyRegistration } from '../../store/company.selectors';
import { DynamicNGBootstrapFormComponent } from '@ng-dynamic-forms/ui-ng-bootstrap';
import { COMPANY_DETAILS_LAYOUT } from './company-details.layout';
import { Sector } from 'src/app/models/sector.model';
import { selectSectorsState } from 'src/app/store/sectors/sectors.selectors';
import { nonNull } from 'src/app/helpers/nonNull';
import { getSectors } from 'src/app/store/sectors/sectors.actions';
import { selectSectorOptions } from './countries.selector';

@Component({
  selector: 'vc-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: [
    './company-details.component.scss',
  ],
})
export class CompanyDetailsComponent implements AfterViewInit, OnDestroy {
  @Output() formChange = new EventEmitter<boolean>();

  @ViewChild(DynamicNGBootstrapFormComponent, {
    static: true,
  })
  formComponent!: DynamicNGBootstrapFormComponent;

  formInputs = COMPANY_DETAILS_INPUTS;

  formModel = COMPANY_DETAILS_MODEL;

  formLayout = COMPANY_DETAILS_LAYOUT;

  formGroup = this.formService.createFormGroup(this.formModel, { updateOn: 'blur' });

  companyDetailsFormIsValid = false;

  addressFormIsValid = false;

  unsubscriber = new Subject();

  constructor(
    private readonly formService: DynamicFormService,
    private readonly store: Store
  ) {
  }

  ngAfterViewInit(): void {
    this.store.select(selectCompanyRegistration)
      .pipe(takeUntil(this.unsubscriber))
      .subscribe(companyRegistration => {
        patchFormModel(this.formInputs, companyRegistration);
        this.formService.detectChanges(this.formComponent);
      });
    this.store.select(selectSectorsState)
      .pipe(takeUntil(this.unsubscriber))
      .subscribe(sectors => {
        this.sectors = sectors;
      });
    this.formInputs.sector.options$ = this.store.select(selectSectorOptions)
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
    this.formInputs.sector.options$.pipe(takeUntil(this.unsubscriber)).subscribe(() => {
      this.formInputs.sector.value = undefined;
    });
    this.store.dispatch(getSectors());
  }

  onAddressFormChange(addressFormIsValid: boolean): void {
    this.addressFormIsValid = addressFormIsValid;
    this.formChange.emit(this.companyDetailsFormIsValid && this.addressFormIsValid);
  }

  onChange(event: DynamicFormControlEvent): void {
    const data = fromFormModel<CompanyRegistration>(event.model);
    if (data != null) {
      this.store.dispatch(setCompany({
        data,
      }));
    }
    this.companyDetailsFormIsValid = event.group.valid;
    this.formChange.emit(this.companyDetailsFormIsValid && this.addressFormIsValid);
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
}
