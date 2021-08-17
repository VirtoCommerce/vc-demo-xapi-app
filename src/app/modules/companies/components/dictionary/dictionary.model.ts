import { DynamicFormGroupModel, DynamicFormModel, DynamicSelectModel } from '@ng-dynamic-forms/core';

export const DICTIONARY_INPUTS = {
  sector: new DynamicSelectModel<string|undefined>({
    id: 'dictionary',
    label: 'Dictionary',
  }),
};

export const DICTIONARY_MODEL: DynamicFormModel = [
  new DynamicFormGroupModel({
    id: 'dictionaryProperty',
    group: [
      ...Object.values(DICTIONARY_INPUTS),
    ],
  }),
];
