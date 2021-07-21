import { DynamicFormLayout } from '@ng-dynamic-forms/core';

export const REGISTRATION_COMPANY_ADDRESS_FORM_LAYOUT: DynamicFormLayout = {
  cityAndPostalCode: {
    element: {
      control: 'row',
    },
  },
  city: {
    grid: {
      host: 'col-xs-24 col-md-16',
    },
  },
  postalCode: {
    grid: {
      host: 'col-xs-24 col-md-8',
    },
  },
  lines: {
    element: {
      control: 'row',
    },
  },
  line1: {
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
