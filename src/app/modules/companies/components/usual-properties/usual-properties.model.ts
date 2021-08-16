import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import {
  DynamicInputModel,
  DynamicFormModel,
  DynamicFormGroupModel,
  DynamicTextAreaModel,
  DynamicSwitchModel,
} from '@ng-dynamic-forms/core';
import {
  DynamicDateTimePickerModel,
} from 'src/app/modules/dynamic-forms/components/dynamic-ng-bootstrap-datetime-picker/dynamic-datetime-picker.model';
import  * as validationMessages from 'src/app/modules/validation/constants/validation-messages.constants';

export const USUAL_PROPERTIES_INPUTS = {
  shortTextUsual: new DynamicInputModel({
    id: 'shortText',
    label: 'Short text ● Usual',
    validators: {
      maxLength: 512,
    },
    errorMessages: {
      maxLength: validationMessages.maxLengthMessage,
    },
  }),
  longTextUsual: new DynamicTextAreaModel({
    id: 'longText',
    label: 'Long text ● Usual',
  }),
  integerUsual: new DynamicInputModel({
    id: 'integer',
    label: 'Integer ● Usual',
    inputType: 'number',
    step: 1,
    min: 0,
  }),
  decimalNumberUsual: new DynamicInputModel({
    id: 'decimalNumber',
    label: 'Decimal number ● Usual',
    inputType: 'number',
  }),
  date: new DynamicDateTimePickerModel({
    id: 'dateTime',
    label: 'Date',
    toggle: { icon: faCalendarAlt },
    additional: {
      placement: 'auto',
    },
  }),
  boolean: new DynamicSwitchModel({
    id: 'boolean',
    label: 'Boolean',
  }),
};

export const USUAL_PROPERTIES_MODEL: DynamicFormModel = [
  new DynamicFormGroupModel({
    id: 'usualProperties',
    group: [
      ...Object.values(USUAL_PROPERTIES_INPUTS),
    ],
  }),
];
