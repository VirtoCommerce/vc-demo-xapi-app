import { requiredMessage, emailIncorrectMessage } from '../../../validation/constants/validation-messages.constants';
import { DynamicFormGroupModel, DynamicFormModel, DynamicInputModel, DynamicSelectModel } from '@ng-dynamic-forms/core';

export const ADDRESS_EDIT_FORM_INPUTS = {
  firstName: new DynamicInputModel({
    id: 'firstName',
    label: 'Fisrt Name',
    validators: {
      required: null,
    },
    errorMessages: {
      required: requiredMessage,
    },
  }),
  countryCode: new DynamicSelectModel<string|undefined>({
    id: 'countryCode',
    label: 'Country',
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
  lastName: new DynamicInputModel({
    id: 'lastName',
    label: 'Last Name',
    validators: {
      required: null,
    },
    errorMessages: {
      required: requiredMessage,
    },
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
  email: new DynamicInputModel({
    id: 'email',
    label: 'Work email',
    validators: {
      email: null,
    },
    errorMessages: {
      email: emailIncorrectMessage,
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
  phone: new DynamicInputModel({
    id: 'phone',
    label: 'Phone',
  }),
  line2: new DynamicInputModel({
    id: 'line2',
    label: 'Apt, suite, etc.',
  }),
};

export const ADDRESS_EDIT_FORM_MODEL: DynamicFormModel = [
  new DynamicFormGroupModel({
    id: 'addressEditFormGroup',
    group: [
      ...Object.values(ADDRESS_EDIT_FORM_INPUTS),
    ],
  }),
];
