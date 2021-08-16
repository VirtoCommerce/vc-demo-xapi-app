import { DynamicFormGroupModel, DynamicFormModel, DynamicSelectModel } from '@ng-dynamic-forms/core';

export const COMBINED_PROPERTIES_INPUTS = {
  sector: new DynamicSelectModel<string|undefined>({
    id: 'sector',
    label: 'Sector',
  }),
};

export const COMBINED_PROPERTIES_MODEL: DynamicFormModel = [
  new DynamicFormGroupModel({
    id: 'combinedProperties',
    group: [
      ...Object.values(COMBINED_PROPERTIES_INPUTS),
    ],
  }),
];
