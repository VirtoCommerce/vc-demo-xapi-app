import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { DynamicFormControlEvent, DynamicFormService } from '@ng-dynamic-forms/core';
import { COMPANY_DETAILS_INPUTS, COMPANY_DETAILS_MODEL } from './company-details.model';
import { CompanyRegistration } from 'src/app/models/company-registration.model';
import { setCompany } from '../../store/company.actions';
import { Store } from '@ngrx/store';
import { fromFormModel, patchFormModel } from 'src/app/helpers/dynamic-forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { selectCompanyRegistration } from '../../store/company.selectors';
import { DynamicNGBootstrapFormComponent } from '@ng-dynamic-forms/ui-ng-bootstrap';

@Component({
  selector: 'vc-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: [
    './company-details.component.scss',
  ],
})
export class CompanyDetailsComponent implements AfterViewInit, OnDestroy {
  @ViewChild(DynamicNGBootstrapFormComponent, {
    static: true,
  })
  formComponent!: DynamicNGBootstrapFormComponent;

  formInputs = COMPANY_DETAILS_INPUTS;

  formModel = COMPANY_DETAILS_MODEL;

  formGroup = this.formService.createFormGroup(this.formModel, { updateOn: 'blur' });

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
  }

  onChange(event: DynamicFormControlEvent): void {
    const data = fromFormModel<CompanyRegistration>(event.model);
    if (data != null) {
      this.store.dispatch(setCompany({
        data,
      }));
    }
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
}
