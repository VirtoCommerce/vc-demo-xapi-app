import { DynamicFormGroupModel, DynamicFormModel, DynamicInputModel } from '@ng-dynamic-forms/core';

export const PERSONAL_INFORMATION_MODEL: DynamicFormModel = [
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
