import { DynamicFormControlLayout, DynamicFormLayout } from '@ng-dynamic-forms/core';

export const requiredLargeInput: DynamicFormControlLayout = {
  element: {
    label: 'required',
    control: 'form-control-lg',
  },
};

export const halfColumn: DynamicFormControlLayout = {
  grid: {
    host: 'col-xs-24 col-md',
  },
};

export const REGISTRATION_LAYOUT: DynamicFormLayout = {
  firstName: {
    ...requiredLargeInput,
  },
  lastName: {
    ...requiredLargeInput,
  },
  email: {
    ...requiredLargeInput,
  },
  userName: {
    ...requiredLargeInput,
  },
  password: {
    ...requiredLargeInput,
    ...halfColumn,
  },
  confirmPassword: {
    ...requiredLargeInput,
    ...halfColumn,
  },
};
