import {
  DynamicFormGroupModel,
  DynamicFormModel,
  DynamicInputModel,
  DynamicSelectModel,
} from '@ng-dynamic-forms/core';
import  * as validationMessages from 'src/app/shared/validation/constants/validation-messages.constants';

export const REGISTRATION_COMPANY_ADDRESS_INPUTS = {
  countryCode: new DynamicSelectModel<string|undefined>({
    id: 'countryCode',
    label: 'Country',
    validators: {
      required: null,
    },
    errorMessages: {
      required: validationMessages.requiredMessage,
    },
  }),
  city: new DynamicInputModel({
    id: 'city',
    label: 'City',
    validators: {
      required: null,
    },
    errorMessages: {
      required: validationMessages.requiredMessage,
    },
  }),
  postalCode: new DynamicInputModel({
    id: 'postalCode',
    label: 'Zip / Postal Code',
    validators: {
      required: null,
    },
    errorMessages: {
      required: validationMessages.requiredMessage,
    },
  }),
  line1: new DynamicInputModel({
    id: 'line1',
    label: 'Street Address',
    validators: {
      required: null,
    },
    errorMessages: {
      required: validationMessages.requiredMessage,
    },
  }),
  line2: new DynamicInputModel({
    id: 'line2',
    label: 'Floor / Unit / Suite #',
  }),
};

export const REGISTRATION_COMPANY_ADDRESS_FORM_MODEL: DynamicFormModel = [
  new DynamicFormGroupModel({
    id: 'registrationCompanyAddress',
    group: [
      ...Object.values(REGISTRATION_COMPANY_ADDRESS_INPUTS),
    ],
  }),
];
