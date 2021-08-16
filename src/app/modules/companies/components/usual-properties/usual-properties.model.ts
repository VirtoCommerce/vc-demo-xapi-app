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
  shortText: new DynamicInputModel({
    id: 'shortText',
    label: 'Short text ● Usual',
    validators: {
      maxLength: 512,
    },
    errorMessages: {
      maxLength: validationMessages.maxLengthMessage,
    },
  }),
  longText: new DynamicTextAreaModel({
    id: 'longText',
    label: 'Long text ● Usual',
  }),
  integer: new DynamicInputModel({
    id: 'integer',
    label: 'Integer ● Usual',
    inputType: 'number',
    step: 1,
    min: 0,
  }),
  decimalNumber: new DynamicInputModel({
    id: 'decimalNumber',
    label: 'Decimal number ● Usual',
    inputType: 'number',
  }),
  dateTime: new DynamicDateTimePickerModel({
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
