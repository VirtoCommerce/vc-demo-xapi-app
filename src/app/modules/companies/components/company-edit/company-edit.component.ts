import { selectCurrentCustomerOrganization } from './../../../../store/current-customer/current-customer.selectors';
import { Company } from '../../../../models/company.model';
import { selectSelectedCompany } from './../../store/companies.selectors';
import { getCompany, setCompany, updateCompany } from './../../store/companies.actions';
import { Component, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { DynamicFormControlEvent, DynamicFormService } from '@ng-dynamic-forms/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { COMPANY_EDIT_FORM_LAYOUT } from './company-edit-form.layout';
import { COMPANY_EDIT_FORM_INPUTS, COMPANY_EDIT_FORM_MODEL } from './company-edit-form.model';
import { fromFormModel, patchFormModel } from 'src/app/helpers/dynamic-forms';
import { DynamicNGBootstrapFormComponent } from '@ng-dynamic-forms/ui-ng-bootstrap';

@Component({
  selector: 'vc-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: [
    './company-edit.component.scss',
  ],
})

export class CompanyEditComponent implements AfterViewInit, OnDestroy {
  @ViewChild(DynamicNGBootstrapFormComponent, {
    static: true,
  })
  formComponent!: DynamicNGBootstrapFormComponent;

  formInputs = COMPANY_EDIT_FORM_INPUTS;

  formModel = COMPANY_EDIT_FORM_MODEL;

  formLayout = COMPANY_EDIT_FORM_LAYOUT;

  formGroup = this.formService.createFormGroup(this.formModel, { updateOn: 'blur' });

  selectedCompany$ = this.store.select(selectSelectedCompany);

  unsubscriber = new Subject();

  constructor(
    private readonly formService: DynamicFormService,
    private readonly store: Store,
    private readonly route: ActivatedRoute
  ) {  }

  ngAfterViewInit(): void {
    this.route.paramMap.pipe(takeUntil(this.unsubscriber)).subscribe(params => {
      const id = params.get('id');
      if (id == 'current') {
        this.store.select(selectCurrentCustomerOrganization)
          .subscribe(organization => this.store.dispatch(getCompany({ id: organization?.id as string })));
      }
      else {
        this.store.dispatch(getCompany({ id: id as string }));
      }
    });

    this.store.select(selectSelectedCompany).pipe(takeUntil(this.unsubscriber))
      .subscribe(state => {
        patchFormModel(this.formInputs, state);
        this.formService.detectChanges(this.formComponent);
      });
  }

  onChange(event: DynamicFormControlEvent): void {
    const company = fromFormModel<Company>(event.model);
    if (company != null) {
      this.store.dispatch(setCompany({
        data: company,
      }));
    }
  }

  submit(): void {
    this.store.dispatch(updateCompany());
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
}

