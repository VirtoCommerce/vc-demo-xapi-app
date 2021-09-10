import {
  DynamicInputModel,
  DynamicFormModel,
  DynamicFormGroupModel,
  DynamicTextAreaModel,
} from '@ng-dynamic-forms/core';
import { DynamicNgxCodemirorModel } from
  'src/app/modules/custom-dynamic-forms/components/dynamic-ngx-codemiror/dynamic-ngx-codemiror.model';
import  * as validationMessages from 'src/app/modules/validation/constants/validation-messages.constants';

export const MULTILINGUAL_PROPERTIES_INPUTS = {
  shortTextMultilingual: new DynamicInputModel({
    id: 'shortTextMultilingual',
    label: 'Short text ● Multilingual',
    validators: {
      maxLength: 512,
    },
    errorMessages: {
      maxLength: validationMessages.maxLengthMessage,
    },
  }),
  longTextMultilingual: new DynamicTextAreaModel({
    id: 'longTextMultilingual',
    label: 'Long text ● Multilingual',
  }),
  htmlMultilingual: new DynamicNgxCodemirorModel({
    id: 'htmlMultilingual',
    label: 'HTML ● Multilingual',
  }),
};

export const MULTILINGUAL_PROPERTIES_MODEL: DynamicFormModel = [
  new DynamicFormGroupModel({
    id: 'multilingualProperties',
    group: [
      ...Object.values(MULTILINGUAL_PROPERTIES_INPUTS),
    ],
  }),
];
