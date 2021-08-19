import { DynamicFormLayout } from '@ng-dynamic-forms/core';
import { USUAL_PROPERTIES_INPUTS } from './usual-properties.model';

export const USUAL_PROPERTIES_LAYOUT: DynamicFormLayout = {};
Object.keys(USUAL_PROPERTIES_INPUTS).forEach(key => {
  USUAL_PROPERTIES_LAYOUT[key] = {
    element: {
      control: 'form-control-lg',
    },
  };
});
