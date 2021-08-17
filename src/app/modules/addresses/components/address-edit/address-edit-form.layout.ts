import { DynamicFormLayout } from '@ng-dynamic-forms/core';

export const ADDRESS_EDIT_FORM_LAYOUT: DynamicFormLayout = {
  addressEditFormGroup: {
    element: {
      control: 'row gx-5',
    },
  },
  firstName: {
    element: {
      label: 'required',
    },
    grid: {
      host: 'col-xs-24 col-md-12 grid-divider',
    },
  },
  lastName: {
    element: {
      label: 'required',
    },
    grid: {
      host: 'col-xs-24 col-md-12 grid-divider',
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
      host: 'col-xs-24 col-md-12 grid-divider',
    },
  },
  phone: {
    grid: {
      host: 'col-xs-24 col-md-12 grid-divider',
    },
  },
  line2: {
    grid: {
      host: 'col-xs-24 col-md-12',
    },
  },
};
