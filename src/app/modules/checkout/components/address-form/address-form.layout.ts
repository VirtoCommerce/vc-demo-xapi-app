import { DynamicFormLayout } from '@ng-dynamic-forms/core';

const formControl = 'form-control-lg';

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
      control: formControl,
      label: 'required',
    },
  },
  lastName: {
    element: {
      control: formControl,
      label: 'required',
    },
  },
  email: {
    element: {
      control: formControl,
      label: 'required',
    },
  },
  phone: {
    element: {
      control: formControl,
      label: 'required',
    },
  },
  countryCode: {
    element: {
      control: formControl,
      label: 'required',
    },
    grid: {
      host: 'col-lg-18',
    },
  },
  postalCode: {
    element: {
      control: formControl,
      label: 'required',
    },
    grid: {
      host: 'col-lg-6',
    },
  },
  regionId: {
    element: {
      control: formControl,
      label: '',
    },
    grid: {
      host: 'col-lg-9',
    },
  },
  city: {
    element: {
      control: formControl,
      label: 'required',
    },
    grid: {
      host: 'col-lg-15',
    },
  },
  line1: {
    element: {
      control: formControl,
      label: 'required',
    },
  },
  line2: {
    element: {
      control: formControl,
      label: '',
    },
  },
};
