import { DynamicFormLayout } from '@ng-dynamic-forms/core';
import { REGISTRATION_LAYOUT } from '../../registration.layout';

export const PERSONAL_INFORMATION_LAYOUT: DynamicFormLayout = {
  personalInformation: {
    element: {
      control: 'row',
    },
  },
  ...REGISTRATION_LAYOUT,
};
