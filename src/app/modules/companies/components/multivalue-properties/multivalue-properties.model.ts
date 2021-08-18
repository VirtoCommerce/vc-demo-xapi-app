import {
  DynamicFormModel,
  DynamicFormGroupModel,
} from '@ng-dynamic-forms/core';
import {
  DynamicMultivalueInputModel,
} from 'src/app/modules/dynamic-forms/components/dynamic-ng-bootstrap-multivalue-input/dynamic-multivalue-input.model';
import  * as validationMessages from 'src/app/modules/validation/constants/validation-messages.constants';

export const MULTIVALUE_PROPERTIES_INPUTS = {
  shortTextMultivalue: new DynamicMultivalueInputModel({
    id: 'shortTextMultivalue',
    label: 'Short text ● Multivalue',
    validators: {
      maxLength: 512,
    },
    errorMessages: {
      maxLength: validationMessages.maxLengthMessage,
    },
  }),
  integerMultivalue: new DynamicMultivalueInputModel({
    id: 'integerMultivalue',
    label: 'Integer ● Multivalue',
    inputType: 'text',
    mask: 'separator.0',
    maskConfig: {
      allowNegativeNumbers: true,
    },
  }),
  decimalNumberMultivalue: new DynamicMultivalueInputModel({
    id: 'decimalNumberMultivalue',
    label: 'Decimal number ● Multivalue',
    inputType: 'number',
  }),
};

export const MULTIVALUE_PROPERTIES_MODEL: DynamicFormModel = [
  new DynamicFormGroupModel({
    id: 'multivalueProperties',
    group: [
      ...Object.values(MULTIVALUE_PROPERTIES_INPUTS),
    ],
  }),
];
