import { DynamicFormGroupModel, DynamicFormModel, DynamicInputModel } from '@ng-dynamic-forms/core';

export const LOGIN_FORM_INPUTS = {
  userName: new DynamicInputModel({
    id: 'userName',
    label: 'Username',
  }),
  password: new DynamicInputModel({
    id: 'password',
    label: 'Password',
    inputType: 'password',
  }),
};

export const LOGIN_FORM_MODEL: DynamicFormModel = [
  new DynamicFormGroupModel({
    id: 'loginFormGroup',
    group: [
      ...Object.values(LOGIN_FORM_INPUTS),
    ],
  }),
];
