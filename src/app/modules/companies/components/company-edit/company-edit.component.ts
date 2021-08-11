import { EditCompany } from './../../../../models/edit-company.model';
import { selectCompaniesState } from './../../store/companies.selectors';
import { getCompany, setCompany, updateCompany } from './../../store/companies.actions';
import { Component, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { DynamicFormControlEvent, DynamicFormService } from '@ng-dynamic-forms/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
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
  companyName: string | null = null;

  formComponent!: DynamicNGBootstrapFormComponent;

  formInputs = COMPANY_EDIT_FORM_INPUTS;

  formModel = COMPANY_EDIT_FORM_MODEL;

  formLayout = COMPANY_EDIT_FORM_LAYOUT;

  formGroup = this.formService.createFormGroup(this.formModel, { updateOn: 'blur' });

  unsubscriber = new Subject();

  constructor(
    private readonly formService: DynamicFormService,
    private readonly store: Store,
    private readonly route: ActivatedRoute
  ) {  }

  ngAfterViewInit(): void {
    this.route.paramMap.pipe(takeUntil(this.unsubscriber)).subscribe(params => {
      const id = params.get('id');
      this.store.dispatch(getCompany({ id: id as string }));
    });

    this.store.select(selectCompaniesState).pipe(takeUntil(this.unsubscriber))
      .subscribe(state => {
        this.companyName = state.company?.name ?? '';
        patchFormModel(this.formInputs, state.company);
        this.formService.detectChanges(this.formComponent);
      });
  }

  onChange(event: DynamicFormControlEvent): void {
    const company = fromFormModel<EditCompany>(event.model);
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

