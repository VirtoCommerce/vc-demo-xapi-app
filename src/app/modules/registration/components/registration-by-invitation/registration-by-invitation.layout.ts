import { DynamicFormLayout } from '@ng-dynamic-forms/core';
import { halfColumn, REGISTRATION_LAYOUT, requiredLargeInput } from '../../registration.layout';

export const PERSONAL_INFORMATION_LAYOUT: DynamicFormLayout = {
  personalInformation: {
    element: {
      control: 'row',
    },
  },
  firstName: REGISTRATION_LAYOUT.firstName,
  lastName: REGISTRATION_LAYOUT.lastName,
  email: {
    ...REGISTRATION_LAYOUT.email,
    ...halfColumn,
  },
  phone: {
    ...requiredLargeInput,
    ...halfColumn,
  },
};

export const ACCOUNT_INFORMATION_LAYOUT: DynamicFormLayout = {
  accountInformation: {
    element: {
      control: 'row',
    },
  },
  userName: REGISTRATION_LAYOUT.userName,
  password: REGISTRATION_LAYOUT.password,
  confirmPassword: REGISTRATION_LAYOUT.confirmPassword,
};
