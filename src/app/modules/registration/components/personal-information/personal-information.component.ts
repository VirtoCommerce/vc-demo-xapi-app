import { Component } from '@angular/core';
import {
  DynamicFormGroupModel,
  DynamicFormLayout,
  DynamicFormModel,
  DynamicFormService,
  DynamicInputModel,
} from '@ng-dynamic-forms/core';

@Component({
  selector: 'vc-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: [
    './personal-information.component.scss',
  ],
})
export class PersonalInformationComponent {
    formModel: DynamicFormModel = [
      new DynamicInputModel({
        id: 'firstName',
        label: 'First Name',
      }),
      new DynamicInputModel({
        id: 'lastName',
        label: 'Last Name',
      }),
      new DynamicInputModel({
        id: 'email',
        label: 'Email',
      }),
      new DynamicInputModel({
        id: 'userName',
        label: 'Username',
      }),
      new DynamicFormGroupModel({
        id: 'passwords',
        group: [
          new DynamicInputModel({
            id: 'password',
            label: 'Password',
            inputType: 'password',
          }),
          new DynamicInputModel({
            id: 'confirmPassword',
            label: 'Confirm password',
            inputType: 'password',
          }),
        ],
      }),
    ];

    formLayout: DynamicFormLayout = {
      passwords: {
        element: {
          control: 'row',
        },
      },
      password: {
        grid: {
          host: 'col',
        },
      },
      confirmPassword: {
        grid: {
          host: 'col',
        },
      },
    };

    formGroup = this.formService.createFormGroup(this.formModel, {  });

    constructor(private readonly formService: DynamicFormService) {}
}
