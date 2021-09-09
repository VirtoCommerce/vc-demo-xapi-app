import { DynamicFormControlLayout,
  DynamicFormValueControlModel, DynamicFormValueControlModelConfig, serializable } from '@ng-dynamic-forms/core';

export const DYNAMIC_FORM_CONTROL_TYPE_IMAGE_UPLOADER = 'IMAGE_UPLOADER';

export type DynamicImageUploaderModelConfig = DynamicFormValueControlModelConfig<string>

export class DynamicImageUploaderModel extends DynamicFormValueControlModel<string> {
  @serializable()
  readonly type: string = DYNAMIC_FORM_CONTROL_TYPE_IMAGE_UPLOADER;

  constructor(config: DynamicImageUploaderModelConfig, layout?: DynamicFormControlLayout) {
    super(config, layout);
  }
}
