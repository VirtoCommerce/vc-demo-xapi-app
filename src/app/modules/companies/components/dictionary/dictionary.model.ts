import { DynamicFormGroupModel, DynamicFormModel, DynamicSelectModel } from '@ng-dynamic-forms/core';

export const DICTIONARY_INPUTS = {
  shortTextDictionary: new DynamicSelectModel<string|undefined>({
    id: 'shortTextDictionary',
    label: 'Short text ● Dictionary',
  }),
};

export const DICTIONARY_MODEL: DynamicFormModel = [
  new DynamicFormGroupModel({
    id: 'shortTextDictionary',
    group: [
      ...Object.values(DICTIONARY_INPUTS),
    ],
  }),
];
