/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { DynamicFormControlModel, DynamicFormValueControlModel } from '@ng-dynamic-forms/core';

export function fromFormModel<T>(model: DynamicFormControlModel): Partial<T> | null {
  if (Object.prototype.hasOwnProperty.call(model, 'value$')) {
    const valueModel = model as DynamicFormValueControlModel<any>;
    return {
      [valueModel.id]: valueModel.value,
    } as unknown as Partial<T>;
  }
  return null;
}

export function patchFormModel<
  T extends Record<string, any>,
  M extends Record<string, DynamicFormValueControlModel<any>>,
  >(formInputs: M, data?: T | null): void {
  const modelIds = Object.keys(formInputs);
  for (const modelId of modelIds) {
    const formInput = formInputs[modelId];
    if (formInput != null) {
      formInput.value = data !== null && data !== undefined ? data[modelId] : null;
    }
  }
}
