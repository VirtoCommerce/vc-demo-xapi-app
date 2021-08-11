import { DynamicFormLayout } from '@ng-dynamic-forms/core';

export const COMPANY_EDIT_FORM_LAYOUT: DynamicFormLayout = {
  companyEditFormGroup: {
    element: {
      control: 'row',
    },
  },
  name: {
    element: {
      label: 'required',
    },
  },
};
