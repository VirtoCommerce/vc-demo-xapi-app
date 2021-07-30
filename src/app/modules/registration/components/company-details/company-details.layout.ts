import { DynamicFormLayout } from '@ng-dynamic-forms/core';

export const COMPANY_DETAILS_LAYOUT: DynamicFormLayout = {
  registrationCompanyDetails: {
    element: {
      control: 'row',
    },
  },
  name: {
    element: {
      label: 'required',
    },
  },
  taxNumber: {
    grid: {
      host: 'col-xs-24 col-md-12',
    },
  },
  sector: {
    grid: {
      host: 'col-xs-24 col-md-12',
    },
  },
};
