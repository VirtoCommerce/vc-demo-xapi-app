import { requiredMessage } from './../../../validation/constants/validation-messages.constants';
import { DynamicFormGroupModel, DynamicFormModel, DynamicInputModel } from '@ng-dynamic-forms/core';

export const COMPANY_PROPERTIES_INPUTS = {
  name: new DynamicInputModel({
    id: 'name',
    label: 'Company Name',
    validators: {
      required: null,
    },
    errorMessages: {
      required: requiredMessage,
    },
  }),
};

export const COMPANY_PROPERTIES_MODEL: DynamicFormModel = [
  new DynamicFormGroupModel({
    id: 'companyEditFormGroup',
    group: [
      ...Object.values(COMPANY_PROPERTIES_INPUTS),
    ],
  }),
];
