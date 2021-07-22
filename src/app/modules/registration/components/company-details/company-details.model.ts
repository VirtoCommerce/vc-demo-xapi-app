import { DynamicFormModel, DynamicInputModel } from '@ng-dynamic-forms/core';

export const COMPANY_DETAILS_INPUTS = {
  name: new DynamicInputModel({
    id: 'name',
    label: 'Company Name',
  }),
};

export const COMPANY_DETAILS_MODEL: DynamicFormModel = [
  ...Object.values(COMPANY_DETAILS_INPUTS),
];
