import { DynamicFormGroupModel, DynamicFormModel, DynamicInputModel } from '@ng-dynamic-forms/core';
import  * as validationMessages from 'src/app/modules/validation/constants/validation-messages.constants';

export const PERSONAL_INFORMATION_INPUTS = {
  firstName: new DynamicInputModel({
    id: 'firstName',
    label: 'First Name',
    validators: {
      required: null,
    },
    errorMessages: {
      required: validationMessages.requiredMessage,
    },
  }),
  lastName: new DynamicInputModel({
    id: 'lastName',
    label: 'Last Name',
    validators: {
      required: null,
    },
    errorMessages: {
      required: validationMessages.requiredMessage,
    },
  }),
  email: new DynamicInputModel({
    id: 'email',
    label: 'Email',
    validators: {
      required: null,
      email: null,
    },
    errorMessages: {
      required: validationMessages.requiredMessage,
      email: 'Enter correct email please (ex. john@gmail.com)',
    },
  }),
  userName: new DynamicInputModel({
    id: 'userName',
    label: 'Username',
    validators: {
      required: null,
    },
    errorMessages: {
      required: validationMessages.requiredMessage,
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
      required: validationMessages.requiredMessage,
    },
  }),
  confirmPassword: new DynamicInputModel({
    id: 'confirmPassword',
    label: 'Confirm password',
    inputType: 'password',
    validators: {
      required: null,
      passwordMatchValidator: 'personalInformation.password',
    },
    errorMessages: {
      required: validationMessages.requiredMessage,
      passwordMatchValidator: validationMessages.passwordMismatchMessage,
    },
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
