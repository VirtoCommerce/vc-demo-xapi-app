import { DynamicFormControlLayout, DynamicFormLayout } from '@ng-dynamic-forms/core';

const requiredLargeInput: DynamicFormControlLayout = {
  element: {
    label: 'required',
    control: 'form-control-lg',
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
    grid: {
      host: 'col-xs-24 col-md',
    },
  },
  confirmPassword: {
    ...requiredLargeInput,
    grid: {
      host: 'col-xs-24 col-md',
    },
  },
};
