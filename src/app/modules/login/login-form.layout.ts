import { DynamicFormLayout } from '@ng-dynamic-forms/core';

export const LOGIN_FORM_LAYOUT: DynamicFormLayout = {
  personalInformation: {
    element: {
      control: 'row',
    },
  },
  password: {
    element: {
      label: 'required',
    },
    grid: {
      host: 'col-24',
    },
  },
  userName: {
    element: {
      label: 'required',
    },
    grid: {
      host: 'col-24',
    },
  },
};
