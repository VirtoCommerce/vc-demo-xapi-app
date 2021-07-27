import { DynamicFormLayout } from '@ng-dynamic-forms/core';

export const LOGIN_FORM_LAYOUT: DynamicFormLayout = {
  personalInformation: {
    element: {
      control: 'row',
    },
  },
  password: {
    grid: {
      host: 'col-24',
    },
  },
  userName: {
    grid: {
      host: 'col-24',
    },
  },
};
