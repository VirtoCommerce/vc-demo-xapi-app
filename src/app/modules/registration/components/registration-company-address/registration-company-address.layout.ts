import { DynamicFormLayout } from '@ng-dynamic-forms/core';

export const REGISTRATION_COMPANY_ADDRESS_FORM_LAYOUT: DynamicFormLayout = {
  registrationCompanyAddress: {
    element: {
      control: 'row',
    },
  },
  countryCode: {
    element: {
      label: 'required',
    },
  },
  city: {
    element: {
      label: 'required',
    },
    grid: {
      host: 'col-xs-24 col-md-16',
    },
  },
  postalCode: {
    element: {
      label: 'required',
    },
    grid: {
      host: 'col-xs-24 col-md-8',
    },
  },
  line1: {
    element: {
      label: 'required',
    },
    grid: {
      host: 'col-xs-24 col-md-16',
    },
  },
  line2: {
    grid: {
      host: 'col-xs-24 col-md-8',
    },
  },
};
