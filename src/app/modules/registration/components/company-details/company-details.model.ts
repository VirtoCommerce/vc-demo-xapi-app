import { DynamicFormModel, DynamicInputModel } from '@ng-dynamic-forms/core';
import  * as validationMessages from 'src/app/shared/validation/constants/validation-messages.constants';

export const COMPANY_DETAILS_INPUTS = {
  name: new DynamicInputModel({
    id: 'name',
    label: 'Company Name',
    validators: {
      required: null,
    },
    errorMessages: {
      required: validationMessages.requiredMessage,
    },
  }),
};

export const COMPANY_DETAILS_MODEL: DynamicFormModel = [
  ...Object.values(COMPANY_DETAILS_INPUTS),
];
