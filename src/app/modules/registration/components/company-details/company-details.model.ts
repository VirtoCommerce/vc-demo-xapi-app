import { DynamicFormGroupModel, DynamicFormModel, DynamicInputModel, DynamicSelectModel } from '@ng-dynamic-forms/core';
import  * as validationMessages from 'src/app/modules/validation/constants/validation-messages.constants';

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
  taxNumber: new DynamicInputModel({
    id: 'taxNumber',
    label: 'Tax Number',
  }),
  sector: new DynamicSelectModel<string|undefined>({
    id: 'sector',
    label: 'Sector',
  }),
};

export const COMPANY_DETAILS_MODEL: DynamicFormModel = [
  new DynamicFormGroupModel({
    id: 'registrationCompanyDetails',
    group: [
      ...Object.values(COMPANY_DETAILS_INPUTS),
    ],
  }),
];
