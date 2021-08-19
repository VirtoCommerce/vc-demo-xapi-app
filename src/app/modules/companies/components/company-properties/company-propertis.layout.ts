import { DynamicFormLayout } from '@ng-dynamic-forms/core';
import { COMPANY_PROPERTIES_INPUTS } from './company-properties.model';

export const COMPANY_PROPERTIES_LAYOUT: DynamicFormLayout = {};
Object.keys(COMPANY_PROPERTIES_INPUTS).forEach(key => {
  COMPANY_PROPERTIES_LAYOUT[key] = {
    element: {
      control: 'form-control-lg',
    },
  };
});
