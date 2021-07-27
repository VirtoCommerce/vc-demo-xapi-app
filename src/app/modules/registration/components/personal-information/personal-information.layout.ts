import { DynamicFormLayout } from '@ng-dynamic-forms/core';

export const PERSONAL_INFORMATION_LAYOUT: DynamicFormLayout = {
  personalInformation: {
    element: {
      control: 'row',
    },
  },
  firstName: {
    element: {
      label: 'required',
    },
  },
  lastName: {
    element: {
      label: 'required',
    },
  },
  email: {
    element: {
      label: 'required',
    },
  },
  userName: {
    element: {
      label: 'required',
    },
  },
  password: {
    element: {
      label: 'required',
    },
    grid: {
      host: 'col-xs-24 col-md',
    },
  },
  confirmPassword: {
    element: {
      label: 'required',
    },
    grid: {
      host: 'col-xs-24 col-md',
    },
  },
};
