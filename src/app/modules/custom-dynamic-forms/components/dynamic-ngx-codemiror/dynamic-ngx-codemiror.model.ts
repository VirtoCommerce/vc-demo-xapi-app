import { DynamicFormControlLayout,
  DynamicFormValueControlModel, DynamicFormValueControlModelConfig, serializable } from '@ng-dynamic-forms/core';

export const DYNAMIC_FORM_CONTROL_TYPE_CODEMIROR = 'CODEMIROR';

export type DynamicNgxCodemirorModelConfig = DynamicFormValueControlModelConfig<string>

export class DynamicNgxCodemirorModel extends DynamicFormValueControlModel<string> {
  @serializable()
  readonly type: string = DYNAMIC_FORM_CONTROL_TYPE_CODEMIROR;

  constructor(config: DynamicNgxCodemirorModelConfig, layout?: DynamicFormControlLayout) {
    super(config, layout);
  }
}
