import { DynamicFormGroupModel, DynamicFormModel, DynamicInputModel } from '@ng-dynamic-forms/core';

export const PERSONAL_INFORMATION_INPUTS = {
  firstName: new DynamicInputModel({
    id: 'firstName',
    label: 'First Name',
  }),
  lastName: new DynamicInputModel({
    id: 'lastName',
    label: 'Last Name',
  }),
  email: new DynamicInputModel({
    id: 'email',
    label: 'Email',
  }),
  userName: new DynamicInputModel({
    id: 'userName',
    label: 'Username',
  }),
  password: new DynamicInputModel({
    id: 'password',
    label: 'Password',
    inputType: 'password',
  }),
  confirmPassword: new DynamicInputModel({
    id: 'confirmPassword',
    label: 'Confirm password',
    inputType: 'password',
  }),
};

export const PERSONAL_INFORMATION_MODEL: DynamicFormModel = [
  new DynamicFormGroupModel({
    id: 'personalInformation',
    group: [
      ...Object.values(PERSONAL_INFORMATION_INPUTS),
    ],
  }),
];
