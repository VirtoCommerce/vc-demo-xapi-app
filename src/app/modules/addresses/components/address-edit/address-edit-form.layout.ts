import { DynamicFormLayout } from '@ng-dynamic-forms/core';

export const ADDRESS_EDIT_FORM_LAYOUT: DynamicFormLayout = {
  addressEditFormGroup: {
    element: {
      control: 'row',
    },
  },
  firstName: {
    element: {
      label: 'required',
    },
    grid: {
      host: 'col-xs-24 col-md-12',
    },
  },
  lastName: {
    element: {
      label: 'required',
    },
    grid: {
      host: 'col-xs-24 col-md-12',
    },
  },
  countryCode: {
    element: {
      label: 'required',
    },
    grid: {
      host: 'col-xs-24 col-md-8',
    },
  },
  city: {
    element: {
      label: 'required',
    },
    grid: {
      host: 'col-xs-24 col-md-12',
    },
  },
  postalCode: {
    element: {
      label: 'required',
    },
    grid: {
      host: 'col-xs-24 col-md-4',
    },
  },
  line1: {
    element: {
      label: 'required',
    },
    grid: {
      host: 'col-xs-24 col-md-12',
    },
  },
  email: {
    grid: {
      host: 'col-xs-24 col-md-12',
    },
  },
  phone: {
    grid: {
      host: 'col-xs-24 col-md-12',
    },
  },
  line2: {
    grid: {
      host: 'col-xs-24 col-md-12',
    },
  },
};
