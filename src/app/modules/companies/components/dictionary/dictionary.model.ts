import { DynamicFormGroupModel, DynamicFormModel, DynamicSelectModel } from '@ng-dynamic-forms/core';

export const DICTIONARY_INPUTS = {
  sector: new DynamicSelectModel<string|undefined>({
    id: 'sector',
    label: 'Sector Short text ● Dictionary',
  }),
};

export const DICTIONARY_MODEL: DynamicFormModel = [
  new DynamicFormGroupModel({
    id: 'combinedProperties',
    group: [
      ...Object.values(DICTIONARY_INPUTS),
    ],
  }),
];
