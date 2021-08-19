import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  DynamicDateControlModel,
  DynamicDateControlModelConfig,
  DynamicDateControlValue,
  DynamicFormControlLayout,
  isBoolean,
  isObject,
  serializable,
} from '@ng-dynamic-forms/core';
import { RequireExactlyOne } from 'type-fest';

export const DYNAMIC_FORM_CONTROL_TYPE_DATETIME_PICKER = 'DATETIMEPICKER';

export type Toggle = RequireExactlyOne<{
  image: string,
  icon: IconProp,
  class: string,
  label: string
}, 'image' | 'icon' | 'class' | 'label'>;

export interface DynamicDateTimePickerModelConfig extends DynamicDateControlModelConfig {
  autoFocus?: boolean;
  focusedDate?: DynamicDateControlValue;
  inline?: boolean;
  prefix?: string;
  readOnly?: boolean;
  suffix?: string;
  toggle?: Toggle;

  meridian?: boolean;
  showSeconds?: boolean;
}

export class DynamicDateTimePickerModel extends DynamicDateControlModel {
  @serializable()
  autoFocus: boolean;

  @serializable()
  focusedDate: DynamicDateControlValue | null;

  @serializable()
  prefix: string | null;

  @serializable()
  readOnly: boolean;

  @serializable()
  suffix: string | null;

  @serializable()
  toggle?: Toggle | null;

  @serializable()
  meridian: boolean;

  @serializable()
  showSeconds: boolean;

  @serializable()
  readonly type: string = DYNAMIC_FORM_CONTROL_TYPE_DATETIME_PICKER;

  constructor(config: DynamicDateTimePickerModelConfig, layout?: DynamicFormControlLayout) {
    super(config, layout);

    this.autoFocus = isBoolean(config.autoFocus) ? config.autoFocus : false;
    this.focusedDate = config.focusedDate ?? null;
    this.prefix = config.prefix ?? null;
    this.readOnly = isBoolean(config.readOnly) ? config.readOnly : false;
    this.toggle = isObject(config.toggle) ? config.toggle : null;
    this.suffix = config.suffix ?? null;

    this.meridian = isBoolean(config.meridian) ? config.meridian : false;
    this.showSeconds = isBoolean(config.showSeconds) ? config.showSeconds : false;

    this.placeholder = config.placeholder ?? '';
  }
}
