import { DynamicInputModelConfig } from '@ng-dynamic-forms/core';
import  * as validationMessages from 'src/app/modules/validation/constants/validation-messages.constants';
import {
  EmailUniquenessAsyncValidatorService,
} from 'src/app/modules/validation/validators/email-uniqueness-async-validator.service';
import {
  UsernameUniquenessAsyncValidatorService,
} from 'src/app/modules/validation/validators/username-uniqueness-async-validator.service';
import {
  PasswordPolicyValidatorService,
} from 'src/app/modules/validation/validators/password-policy-validator.service';

export const REGISTRATION_INPUT_CONFIGS: Record<string, DynamicInputModelConfig> = {
  firstName: {
    id: 'firstName',
    label: 'First Name',
    validators: {
      required: null,
    },
    errorMessages: {
      required: validationMessages.requiredMessage,
    },
  },
  lastName: {
    id: 'lastName',
    label: 'Last Name',
    validators: {
      required: null,
    },
    errorMessages: {
      required: validationMessages.requiredMessage,
    },
  },
  email: {
    id: 'email',
    label: 'Email',
    validators: {
      required: null,
      email: null,
    },
    asyncValidators: {
      [EmailUniquenessAsyncValidatorService.validatorName]: null,
    },
    errorMessages: {
      required: validationMessages.requiredMessage,
      email: validationMessages.emailIncorrectMessage,
      [EmailUniquenessAsyncValidatorService.validatorName]: validationMessages.uniqueMessage,
    },
  },
  phone: {
    id: 'phone',
    label: 'Phone',
    inputType: 'tel',
  },
  userName: {
    id: 'userName',
    label: 'Username',
    validators: {
      required: null,
    },
    asyncValidators: {
      [UsernameUniquenessAsyncValidatorService.validatorName]: null,
    },
    errorMessages: {
      required: validationMessages.requiredMessage,
      [UsernameUniquenessAsyncValidatorService.validatorName]: validationMessages.uniqueMessage,
    },
  },
  password: {
    id: 'password',
    label: 'Password',
    inputType: 'password',
    validators: {
      required: null,
    },
    asyncValidators: {
      [PasswordPolicyValidatorService.validatorName]: null,
    },
    errorMessages: {
      required: validationMessages.requiredMessage,
      ...validationMessages.passwordPolicyMessages,
    },
  },
  confirmPassword: {
    id: 'confirmPassword',
    label: 'Confirm password',
    inputType: 'password',
    validators: {
      required: null,
    },
    errorMessages: {
      required: validationMessages.requiredMessage,
    },
  },
};
