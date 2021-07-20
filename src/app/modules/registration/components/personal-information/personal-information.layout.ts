import { DynamicFormLayout } from '@ng-dynamic-forms/core';

export const PERSONAL_INFORMATION_LAYOUT: DynamicFormLayout = {
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
