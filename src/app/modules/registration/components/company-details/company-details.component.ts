import { Component } from '@angular/core';
import { DynamicFormControlEvent, DynamicFormService, DynamicFormValueControlModel } from '@ng-dynamic-forms/core';
import { COMPANY_DETAILS_MODEL } from './company-details.model';
import { PartialDeep } from 'type-fest';
import { Company } from '../../store/company.payload';
import { setCompany } from '../../store/company.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'vc-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: [
    './company-details.component.scss',
  ],
})
export class CompanyDetailsComponent {
  formModel = COMPANY_DETAILS_MODEL;

  formGroup = this.formService.createFormGroup(this.formModel, { updateOn: 'blur' });

  constructor(
    private readonly formService: DynamicFormService,
    private readonly store: Store
  ) {}

  onChange(event: DynamicFormControlEvent): void {
    const model = event.model as DynamicFormValueControlModel<string>;
    const data: PartialDeep<Company> = {
      [model.id]: model.value,
    };
    this.store.dispatch(setCompany({ data }));
  }
}
