import { DynamicNgxCodemirorModel } from './../../../dynamic-forms/components/dynamic-ngx-codemiror/dynamic-ngx-codemiror.model';
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
    id: 'shortTextUsual',
    label: 'Short text ● Usual',
    validators: {
      maxLength: 512,
    },
    errorMessages: {
      maxLength: validationMessages.maxLengthMessage,
    },
  }),
  longTextUsual: new DynamicTextAreaModel({
    id: 'longTextUsual',
    label: 'Long text ● Usual',
  }),
  integerUsual: new DynamicInputModel({
    id: 'integerUsual',
    label: 'Integer ● Usual',
    inputType: 'text',
    mask: 'separator.0',
    maskConfig: {
      allowNegativeNumbers: true,
    },
  }),
  decimalNumberUsual: new DynamicInputModel({
    id: 'decimalNumberUsual',
    label: 'Decimal number ● Usual',
    inputType: 'number',
  }),
  date: new DynamicDateTimePickerModel({
    id: 'date',
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
  // image: new DynamicInputModel({
  //   id: 'image',
  //   label: 'Image',
  //   inputType: 'file',
  // }),
  htmlUsual: new DynamicNgxCodemirorModel({
    id: 'htmlUsual',
    label: 'HTML ● Usual',
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
