import {
  DynamicFormControlLayout,
  DynamicInputControlModel,
  DynamicInputControlModelConfig,
  DYNAMIC_FORM_CONTROL_INPUT_TYPE_TEXT,
  DYNAMIC_FORM_CONTROL_INPUT_TYPE_NUMBER,
  serializable,
  isNumber,
} from '@ng-dynamic-forms/core';
import { IConfig, initialConfig } from 'ngx-mask';

export const DYNAMIC_FORM_CONTROL_TYPE_MULTIVALUE_INPUT = 'MULTIVALUE_INPUT';

export interface DynamicMultivalueInputModelConfig extends DynamicInputControlModelConfig<string[] | number[]> {
  inputType?: typeof DYNAMIC_FORM_CONTROL_INPUT_TYPE_TEXT | typeof DYNAMIC_FORM_CONTROL_INPUT_TYPE_NUMBER;
  mask?: string;
  maskConfig?: Partial<IConfig>;
  max?: number | string;
  min?: number | string;
  pattern?: string;
  step?: number;
}

export class DynamicMultivalueInputModel extends DynamicInputControlModel<string[] | number[]> {
    @serializable()
    inputType: typeof DYNAMIC_FORM_CONTROL_INPUT_TYPE_TEXT | typeof DYNAMIC_FORM_CONTROL_INPUT_TYPE_NUMBER;

    @serializable()
    mask: string;

    @serializable()
    maskConfig: IConfig;

    @serializable()
    max: number | string | null;

    @serializable()
    min: number | string | null;

    @serializable()
    pattern: string | null;

    @serializable()
    step: number | null;

    @serializable()
    readonly type: string = DYNAMIC_FORM_CONTROL_TYPE_MULTIVALUE_INPUT;

    constructor(config: DynamicMultivalueInputModelConfig, layout?: DynamicFormControlLayout) {
      super(config, layout);

      this.inputType = config.inputType ?? DYNAMIC_FORM_CONTROL_INPUT_TYPE_TEXT;
      this.mask = config.mask ?? '';
      this.maskConfig = config.maskConfig
        ? {
          ...initialConfig,
          ...config.maskConfig,
        }
        : initialConfig;
      this.max = config.max !== undefined ? config.max : null;
      this.min = config.min !== undefined ? config.min : null;
      this.pattern = config.pattern ?? null;
      this.step = isNumber(config.step) ? config.step : null;
    }
}
