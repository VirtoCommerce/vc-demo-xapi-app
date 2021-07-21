import { DynamicFormLayout } from '@ng-dynamic-forms/core';

export const PERSONAL_INFORMATION_LAYOUT: DynamicFormLayout = {
  passwords: {
    element: {
      control: 'row',
    },
  },
  password: {
    grid: {
      host: 'col-xs-24 col-md',
    },
  },
  confirmPassword: {
    grid: {
      host: 'col-xs-24 col-md',
    },
  },
};
