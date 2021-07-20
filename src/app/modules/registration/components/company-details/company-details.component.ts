import { Component } from '@angular/core';
import { DynamicFormModel, DynamicInputModel, DynamicFormService } from '@ng-dynamic-forms/core';

@Component({
  selector: 'vc-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: [
    './company-details.component.scss',
  ],
})
export class CompanyDetailsComponent {
  formModel: DynamicFormModel = [
    new DynamicInputModel({
      id: 'companyName',
      label: 'Company Name',
    }),
  ];

  formGroup = this.formService.createFormGroup(this.formModel, {  });

  constructor(private readonly formService: DynamicFormService) {}
}
