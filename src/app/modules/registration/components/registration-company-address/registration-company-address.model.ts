import {
  DynamicFormGroupModel,
  DynamicFormModel,
  DynamicInputModel,
  DynamicSelectModel,
} from '@ng-dynamic-forms/core';

export const REGISTRATION_COMPANY_ADDRESS_FORM_MODEL: DynamicFormModel = [
  new DynamicSelectModel<string>({
    id: 'country',
    label: 'Country',
  }),

  new DynamicFormGroupModel({
    id: 'cityAndPostalCode',
    group: [
      new DynamicInputModel({
        id: 'city',
        label: 'City',
      }),
      new DynamicInputModel({
        id: 'postalCode',
        label: 'Zip / Postal Code',
      }),
    ],
  }),
  new DynamicFormGroupModel({
    id: 'lines',
    group: [
      new DynamicInputModel({
        id: 'line1',
        label: 'Street Address',
      }),
      new DynamicInputModel({
        id: 'line2',
        label: 'Floor / Unit / Suite #',
      }),
    ],
  }),
];
