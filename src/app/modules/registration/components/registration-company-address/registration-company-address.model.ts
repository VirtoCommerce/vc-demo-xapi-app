import {
  DynamicFormGroupModel,
  DynamicFormModel,
  DynamicInputModel,
  DynamicSelectModel,
} from '@ng-dynamic-forms/core';

export const REGISTRATION_COMPANY_ADDRESS_INPUTS = {
  countryCode: new DynamicSelectModel<string|undefined>({
    id: 'countryCode',
    label: 'Country',
    validators: {
      required: null,
    },
    errorMessages: {
      required: 'The {{ label }} is required',
    },
  }),
  city: new DynamicInputModel({
    id: 'city',
    label: 'City',
    validators: {
      required: null,
    },
    errorMessages: {
      required: 'The {{ label }} is required',
    },
  }),
  postalCode: new DynamicInputModel({
    id: 'postalCode',
    label: 'Zip / Postal Code',
    validators: {
      required: null,
    },
    errorMessages: {
      required: 'The {{ label }} is required',
    },
  }),
  line1: new DynamicInputModel({
    id: 'line1',
    label: 'Street Address',
    validators: {
      required: null,
    },
    errorMessages: {
      required: 'The {{ label }} is required',
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
