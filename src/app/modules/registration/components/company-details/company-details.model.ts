import { DynamicFormModel, DynamicInputModel } from '@ng-dynamic-forms/core';

export const COMPANY_DETAILS_MODEL: DynamicFormModel = [
  new DynamicInputModel({
    id: 'name',
    label: 'Company Name',
  }),
];
