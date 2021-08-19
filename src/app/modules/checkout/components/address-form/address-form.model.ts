import { DynamicFormGroupModel, DynamicFormModel, DynamicInputModel, DynamicSelectModel } from '@ng-dynamic-forms/core';

const requiredMessage = '';

export const GENERAL_FORM_INPUTS = {
  firstName: new DynamicInputModel({
    id: 'firstName',
    label: 'First name',
    validators: {
      required: null,
    },
    errorMessages: {
      required: requiredMessage,
    },
  }),

  lastName: new DynamicInputModel({
    id: 'lastName',
    label: 'Last name',
    validators: {
      required: null,
    },
    errorMessages: {
      required: requiredMessage,
    },
  }),

  email: new DynamicInputModel({
    id: 'email',
    label: 'Work email',
    validators: {
      required: null,
    },
    errorMessages: {
      required: requiredMessage,
    },
  }),

  phone: new DynamicInputModel({
    id: 'phone',
    label: 'Phone',
    validators: {
      required: null,
    },
    errorMessages: {
      required: requiredMessage,
    },
  }),

};

export const ADDRESS_FORM_INPUTS = {
  countryCode: new DynamicSelectModel<string|undefined>({
    id: 'countryCode',
    label: 'Country',
    placeholder: 'Select...',
    validators: {
      required: null,
    },
    errorMessages: {
      required: requiredMessage,
    },
  }),

  postalCode: new DynamicInputModel({
    id: 'postalCode',
    label: 'Zip / Postal Code',
    validators: {
      required: null,
    },
    errorMessages: {
      required: requiredMessage,
    },
  }),

  regionId: new DynamicSelectModel<string|undefined>({
    id: 'regionId',
    label: 'Region',
    placeholder: 'Select...',
  }),

  city: new DynamicInputModel({
    id: 'city',
    label: 'City',
    validators: {
      required: null,
    },
    errorMessages: {
      required: requiredMessage,
    },
  }),

  line1: new DynamicInputModel({
    id: 'line1',
    label: 'Address',
    validators: {
      required: null,
    },
    errorMessages: {
      required: requiredMessage,
    },
  }),

  line2: new DynamicInputModel({
    id: 'line2',
    label: 'Apt, suite, etc. (optional)',
  }),

};

export const CART_ADDRESS_FORM_MODEL: DynamicFormModel = [
  new DynamicFormGroupModel({
    id: 'general',
    group: [
      new DynamicFormGroupModel({
        id: 'info',
        group: [
          ...Object.values(GENERAL_FORM_INPUTS),
        ],
      }),
      new DynamicFormGroupModel({
        id: 'address',
        group: [
          ...Object.values(ADDRESS_FORM_INPUTS),
        ],
      }),
    ],
  }),
];
