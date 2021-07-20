import { Component } from '@angular/core';
import { DynamicFormService } from '@ng-dynamic-forms/core';
import { COMPANY_DETAILS_MODEL } from './company-details.model';

@Component({
  selector: 'vc-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: [
    './company-details.component.scss',
  ],
})
export class CompanyDetailsComponent {
  formModel = COMPANY_DETAILS_MODEL;

  formGroup = this.formService.createFormGroup(this.formModel, {  });

  constructor(private readonly formService: DynamicFormService) {}
}
