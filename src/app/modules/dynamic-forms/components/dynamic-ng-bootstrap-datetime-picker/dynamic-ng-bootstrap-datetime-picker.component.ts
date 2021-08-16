/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @angular-eslint/no-output-native */
import { formatDate } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  NgbDateAdapter,
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
    return this.dynamicDateAdapter.fromModel(this.model.focusedDate) ?? this.datepickerConfig.startDate;
  }

  get minDate(): NgbDateStruct {
    return this.dynamicDateAdapter.fromModel(this.model.min) ?? this.datepickerConfig.minDate;
  }

  get maxDate(): NgbDateStruct {
    return this.dynamicDateAdapter.fromModel(this.model.max) ?? this.datepickerConfig.maxDate;
  }

  date: NgbDateStruct | null = null;

  time: NgbTimeStruct | null = null;

  constructor(
    protected layoutService: DynamicFormLayoutService,
    protected validationService: DynamicFormValidationService,
    protected dynamicDateAdapter: NgbDateAdapter<DynamicDateControlValue>,
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
}
