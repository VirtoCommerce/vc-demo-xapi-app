import { DynamicFormModel, DynamicFormGroupModel, DynamicInputModel } from '@ng-dynamic-forms/core';
import { REGISTRATION_INPUT_CONFIGS } from '../../registration.model';
import  * as validationMessages from 'src/app/modules/validation/constants/validation-messages.constants';

export const PERSONAL_INFORMATION_INPUTS: Record<string, DynamicInputModel> = {
  firstName: new DynamicInputModel(REGISTRATION_INPUT_CONFIGS.firstName),
  lastName: new DynamicInputModel(REGISTRATION_INPUT_CONFIGS.lastName),
  email: new DynamicInputModel({
    ...REGISTRATION_INPUT_CONFIGS.email,
    disabled: true,
  }),
  phone: new DynamicInputModel(REGISTRATION_INPUT_CONFIGS.phone),
};

export const PERSONAL_INFORMATION_MODEL: DynamicFormModel = [
  new DynamicFormGroupModel({
    id: 'personalInformation',
    group: [
      PERSONAL_INFORMATION_INPUTS.firstName,
      PERSONAL_INFORMATION_INPUTS.lastName,
      PERSONAL_INFORMATION_INPUTS.email,
      PERSONAL_INFORMATION_INPUTS.phone,
    ],
  }),
];

export const ACCOUNT_INFORMATION_INPUTS: Record<string, DynamicInputModel> = {
  userName: new DynamicInputModel(REGISTRATION_INPUT_CONFIGS.userName),
  password: new DynamicInputModel(REGISTRATION_INPUT_CONFIGS.password),
  confirmPassword: new DynamicInputModel(REGISTRATION_INPUT_CONFIGS.confirmPassword),
};

export const ACCOUNT_INFORMATION_MODEL: DynamicFormModel = [
  new DynamicFormGroupModel({
    id: 'accountInformation',
    group: [
      ACCOUNT_INFORMATION_INPUTS.userName,
      ACCOUNT_INFORMATION_INPUTS.password,
      ACCOUNT_INFORMATION_INPUTS.confirmPassword,
    ],
    validators: {
      passwordMatchValidator: 'accountInformation.password',
    },
    errorMessages: {
      passwordMatchValidator: validationMessages.passwordMismatchMessage,
    },
  }),
];
