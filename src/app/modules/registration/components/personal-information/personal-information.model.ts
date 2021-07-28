import { DynamicFormGroupModel, DynamicFormModel, DynamicInputModel } from '@ng-dynamic-forms/core';
import { showRequiredMessage } from 'src/app/shared/show-required-message';

export const PERSONAL_INFORMATION_INPUTS = {
  firstName: new DynamicInputModel({
    id: 'firstName',
    label: 'First Name',
    validators: {
      required: null,
    },
    errorMessages: {
      required: showRequiredMessage('First Name'),
    },
  }),
  lastName: new DynamicInputModel({
    id: 'lastName',
    label: 'Last Name',
    validators: {
      required: null,
    },
    errorMessages: {
      required: showRequiredMessage('Last Name'),
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
      required: showRequiredMessage('Email'),
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
      required: showRequiredMessage('Username'),
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
      required: showRequiredMessage('Password'),
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
      required: showRequiredMessage('Confirm password'),
      passwordMatchValidator: 'Passwords are different',
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
