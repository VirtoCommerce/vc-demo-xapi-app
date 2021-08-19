import { DynamicFormLayout } from '@ng-dynamic-forms/core';
import { MULTIVALUE_PROPERTIES_INPUTS } from './multivalue-properties.model';

export const MULTIVALUE_PROPERTIES_LAYOUT: DynamicFormLayout = {};
Object.keys(MULTIVALUE_PROPERTIES_INPUTS).forEach(key => {
  MULTIVALUE_PROPERTIES_LAYOUT[key] = {
    element: {
      control: 'form-control-lg',
    },
  };
});
