import { DynamicFormLayout } from '@ng-dynamic-forms/core';

export const LOGIN_FORM_LAYOUT: DynamicFormLayout = {
  password: {
    element: {
      label: 'required',
    },
  },
  userName: {
    element: {
      label: 'required',
    },
  },
};
