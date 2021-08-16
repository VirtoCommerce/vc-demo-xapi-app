import { DynamicFormLayout } from '@ng-dynamic-forms/core';

export const CART_ADDRESS_FORM_LAYOUT: DynamicFormLayout = {
  general: {
    element: {
      control: 'row',
    },
  },
  info: {
    element: {
      control: 'row vertical-line-right table-pr',
      host: 'col-lg-10',
    },
  },
  address: {
    element: {
      control: 'row table-lr',
      host: 'col-lg-14',
    },
  },
  firstName: {
    element: {
      control: 'form-control-lg',
      label: 'required',
    },
  },
  lastName: {
    element: {
      control: 'form-control-lg',
      label: 'required',
    },
  },
  email: {
    element: {
      control: 'form-control-lg',
      label: 'required',
    },
  },
  phone: {
    element: {
      control: 'form-control-lg',
      label: 'required',
    },
  },
  countryCode: {
    element: {
      control: 'form-control-lg',
      label: 'required',
    },
    grid: {
      host: 'col-lg-18',
    },
  },
  postalCode: {
    element: {
      control: 'form-control-lg',
      label: 'required',
    },
    grid: {
      host: 'col-lg-6',
    },
  },
  regionId: {
    element: {
      control: 'form-control-lg',
      label: '',
    },
    grid: {
      host: 'col-lg-9',
    },
  },
  city: {
    element: {
      control: 'form-control-lg',
      label: 'required',
    },
    grid: {
      host: 'col-lg-15',
    },
  },
  line1: {
    element: {
      control: 'form-control-lg',
      label: 'required',
    },
  },
  line2: {
    element: {
      control: 'form-control-lg',
      label: '',
    },
  },
};
