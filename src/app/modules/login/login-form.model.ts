import { DynamicFormGroupModel, DynamicFormModel, DynamicInputModel } from '@ng-dynamic-forms/core';

export const LOGIN_FORM_INPUTS = {
  userName: new DynamicInputModel({
    id: 'userName',
    label: 'Username',
    validators: {
      required: null,
    },
    errorMessages: {
      required: 'The {{ label }} is required',
    },
  }),
  password: new DynamicInputModel({
    id: 'password',
    label: 'Password',
    inputType: 'password',
    validators: {
      required: null,
    },
    errorMessages: {
      required: 'The {{ label }} is required',
    },
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
