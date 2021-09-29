import { DynamicFormLayout } from '@ng-dynamic-forms/core';

export const REGISTRATION_LAYOUT: DynamicFormLayout = {
  firstName: {
    element: {
      label: 'required',
      control: 'form-control-lg',
    },
  },
  lastName: {
    element: {
      label: 'required',
      control: 'form-control-lg',
    },
  },
  email: {
    element: {
      label: 'required',
      control: 'form-control-lg',
    },
  },
  userName: {
    element: {
      label: 'required',
      control: 'form-control-lg',
    },
  },
  password: {
    element: {
      label: 'required',
      control: 'form-control-lg',
    },
    grid: {
      host: 'col-xs-24 col-md',
    },
  },
  confirmPassword: {
    element: {
      label: 'required',
      control: 'form-control-lg',
    },
    grid: {
      host: 'col-xs-24 col-md',
    },
  },
};
