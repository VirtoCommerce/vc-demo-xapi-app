import { Component } from '@angular/core';
import {
  DynamicFormGroupModel,
  DynamicFormLayout,
  DynamicFormModel,
  DynamicFormService,
  DynamicInputModel,
} from '@ng-dynamic-forms/core';

@Component({
  selector: 'vc-registration-company-address',
  templateUrl: './registration-company-address.component.html',
  styleUrls: [
    './registration-company-address.component.scss',
  ],
})
export class RegistrationCompanyAddressComponent {
  formModel: DynamicFormModel = [
    new DynamicInputModel({
      id: 'country',
      label: 'Country',
    }),

    new DynamicFormGroupModel({
      id: 'cityAndPostalCode',
      group: [
        new DynamicInputModel({
          id: 'city',
          label: 'City',
        }),
        new DynamicInputModel({
          id: 'postalCode',
          label: 'Zip / Postal Code',
        }),
      ],
    }),
    new DynamicFormGroupModel({
      id: 'lines',
      group: [
        new DynamicInputModel({
          id: 'line1',
          label: 'Street Address',
        }),
        new DynamicInputModel({
          id: 'line2',
          label: 'Floor / Unit / Suite #',
        }),
      ],
    }),
  ];

  formLayout: DynamicFormLayout = {
    cityAndPostalCode: {
      element: {
        control: 'row',
      },
    },
    city: {
      grid: {
        host: 'col',
      },
    },
    postalCode: {
      grid: {
        host: 'col-8',
      },
    },
    lines: {
      element: {
        control: 'row',
      },
    },
    line1: {
      grid: {
        host: 'col',
      },
    },
    line2: {
      grid: {
        host: 'col-8',
      },
    },
  };

  formGroup = this.formService.createFormGroup(this.formModel, {  });

  constructor(private readonly formService: DynamicFormService) {}
}
