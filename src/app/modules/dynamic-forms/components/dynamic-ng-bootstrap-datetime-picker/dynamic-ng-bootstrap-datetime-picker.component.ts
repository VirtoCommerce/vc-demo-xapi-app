/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @angular-eslint/no-output-native */
import { formatDate } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  NgbDateNativeUTCAdapter,
  NgbDatepicker,
  NgbDatepickerConfig,
  NgbDateStruct,
  NgbTimepicker,
  NgbTimepickerConfig,
  NgbTimeStruct,
} from '@ng-bootstrap/ng-bootstrap';
import {
  DynamicDateControlValue,
  DynamicFormControlComponent,
  DynamicFormControlCustomEvent,
  DynamicFormControlLayout,
  DynamicFormLayout,
  DynamicFormLayoutService,
  DynamicFormValidationService,
} from '@ng-dynamic-forms/core';
import { NgbTimeNativeUTCAdapter } from '../../adapters/ngb-time-native-utc-adapter';
import { DynamicDateTimePickerModel } from './dynamic-datetime-picker.model';

@Component({
  selector: 'vc-dynamic-ng-bootstrap-datetime-picker',
  templateUrl: './dynamic-ng-bootstrap-datetime-picker.component.html',
  styleUrls: [
    './dynamic-ng-bootstrap-datetime-picker.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class DynamicNGBootstrapDatetimePickerComponent extends DynamicFormControlComponent {
  // Children

  @ViewChild(NgbDatepicker)
  ngbDatepicker!: NgbDatepicker;

  @ViewChild(NgbTimepicker)
  ngbTimepicker!: NgbTimepicker;

  // Dynamic forms properties

  @Input()
  formLayout?: DynamicFormLayout;

  @Input()
  group!: FormGroup;

  @Input()
  layout?: DynamicFormControlLayout;

  @Input()
  model!: DynamicDateTimePickerModel;

  // Dynamic forms events

  @Output()
  blur: EventEmitter<any> = new EventEmitter();

  @Output()
  change: EventEmitter<any> = new EventEmitter();

  @Output()
  customEvent: EventEmitter<DynamicFormControlCustomEvent> = new EventEmitter();

  @Output()
  focus: EventEmitter<any> = new EventEmitter();

  // NG-Bootstrap

  get startDate(): {
  year: number;
  month: number;
  day?: number;
  } {
    return this.convertToNgbDateStruct(this.model.focusedDate) ?? this.datepickerConfig.startDate;
  }

  get minDate(): NgbDateStruct {
    return this.convertToNgbDateStruct(this.model.min) ?? this.datepickerConfig.minDate;
  }

  get maxDate(): NgbDateStruct {
    return this.convertToNgbDateStruct(this.model.max) ?? this.datepickerConfig.maxDate;
  }

  private _date: NgbDateStruct | null = null;

  get date(): NgbDateStruct {
    console.log('date');
    if (this._date === null) {
      this._date = this.convertToNgbDateStruct(this.model.value);
    }
    return this._date as NgbDateStruct;
  }

  set date(value: NgbDateStruct) {
    this._date = value;
  }

  private _time: NgbTimeStruct | null = null;

  get time(): NgbTimeStruct {
    console.log('time');
    if (this._time === null) {
      this._time = this.convertToNgbTimeStruct(this.model.value);
    }
    return this._time as NgbTimeStruct;
  }

  set time(value: NgbTimeStruct) {
    this._time = value;
  }

  constructor(
    protected layoutService: DynamicFormLayoutService,
    protected validationService: DynamicFormValidationService,
    protected dynamicDateAdapter: NgbDateNativeUTCAdapter,
    protected dynamicTimeAdapter: NgbTimeNativeUTCAdapter,
    public datepickerConfig: NgbDatepickerConfig,
    public timepickerConfig: NgbTimepickerConfig
  ) {
    super(layoutService, validationService);
  }

  onDateTimeChange(): void {
    if (this.date !== null && this.time !== null) {
      this.model.value = formatDate(new Date(
        this.date.year,
        this.date.month - 1,
        this.date.day,
        this.time.hour,
        this.time.minute,
        this.time.second
      ), 'medium', 'en-US');
      this.change.emit();
    }
  }

  convertToNgbDateStruct(value: DynamicDateControlValue | null): NgbDateStruct | null {
    const date = this.convertToDate<NgbDateStruct>(value);
    return date instanceof Date ? this.dynamicDateAdapter.fromModel(date) : date;
  }

  convertToNgbTimeStruct(value: DynamicDateControlValue | null): NgbTimeStruct | null {
    const date = this.convertToDate<NgbTimeStruct>(value);
    return date instanceof Date ? this.dynamicTimeAdapter.fromModel(date) : date;
  }

  convertToDate<Fallback>(value: DynamicDateControlValue | null): Date | Fallback | null {
    let date: Date;
    if (typeof value === 'string') {
      date = new Date(value);
    }
    else if (value instanceof Date) {
      date = value;
    }
    else {
      return value as unknown as Fallback;
    }
    return date;
  }
}
