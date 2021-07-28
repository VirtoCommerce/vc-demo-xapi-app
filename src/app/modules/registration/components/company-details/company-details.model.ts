import { DynamicFormModel, DynamicInputModel } from '@ng-dynamic-forms/core';
import { showRequiredMessage } from 'src/app/shared/show-required-message';

export const COMPANY_DETAILS_INPUTS = {
  name: new DynamicInputModel({
    id: 'name',
    label: 'Company Name',
    validators: {
      required: null,
    },
    errorMessages: {
      required: showRequiredMessage('Company Name'),
    },
  }),
};

export const COMPANY_DETAILS_MODEL: DynamicFormModel = [
  ...Object.values(COMPANY_DETAILS_INPUTS),
];
