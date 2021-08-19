import { Component, forwardRef, HostBinding, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { IConfig } from 'ngx-mask';

export type MultivalueInputNewValue = string | number | null;
export type MultivalueInputValue = string[] | number[] | null;

@Component({
  selector: 'vc-multivalue-input',
  templateUrl: './multivalue-input.component.html',
  styleUrls: [
    './multivalue-input.component.scss',
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MultivalueInputComponent),
      multi: true,
    },
  ],
})
export class MultivalueInputComponent implements ControlValueAccessor {
  @HostBinding('class')
  class = 'form-control';

  @Input()
  max!: number | string | null;

  @Input()
  min!: number | string | null;

  @Input()
  step!: number | null;

  @Input()
  autocomplete!: string;

  @Input()
  @HostBinding('autofocus')
  autofocus!: boolean;

  @Input()
  maxlength!: number | null;

  @Input()
  minlength!: number | null;

  @Input()
  name!: string;

  @Input()
  placeholder!: string;

  @Input()
  readonly!: boolean;

  @Input()
  required!: boolean;

  @Input()
  spellcheck!: boolean;

  @Input()
  tabindex!: number | null;

  @Input()
  mask!: string;

  @Input()
  maskConfig!: IConfig;

  @Input()
  type!: 'text' | 'number';

  disabled = false;

  adding = false;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange = (_: MultivalueInputValue): void => {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouched = (_: MultivalueInputValue): void => {}

  private _value: MultivalueInputValue = null;

  get value(): MultivalueInputValue {
    return this._value;
  }

  set value(value: MultivalueInputValue) {
    if (value !== undefined && this._value !== value) {
      this._value = value;
      this.onChange(value);
      this.onTouched(value);
    }
  }

  get values(): string[] | undefined {
    return this.value?.map(value => value.toString());
  }

  newValue: MultivalueInputNewValue = null;

  faPlus = faPlus;

  onAdd(): void {
    if (this.newValue) {
      this.adding = false;
    }
  }

  writeValue(value: MultivalueInputValue): void {
    this.value = value;
  }

  registerOnChange(fn: (_: MultivalueInputValue) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: (_: MultivalueInputValue) => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
