import { DynamicFormLayout } from '@ng-dynamic-forms/core';

export const REGISTRATION_COMPANY_ADDRESS_FORM_LAYOUT: DynamicFormLayout = {
  cityAndPostalCode: {
    element: {
      control: 'row',
    },
  },
  city: {
    grid: {
      host: 'col',
    },
  },
  postalCode: {
    grid: {
      host: 'col-8',
    },
  },
  lines: {
    element: {
      control: 'row',
    },
  },
  line1: {
    grid: {
      host: 'col',
    },
  },
  line2: {
    grid: {
      host: 'col-8',
    },
  },
};
