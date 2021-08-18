import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DynamicNGBootstrapDatetimePickerComponent,
} from './components/dynamic-ng-bootstrap-datetime-picker/dynamic-ng-bootstrap-datetime-picker.component';
import {
  DynamicFormControl, DynamicFormControlModel, DynamicFormsCoreModule, DYNAMIC_FORM_CONTROL_MAP_FN,
} from '@ng-dynamic-forms/core';
import {
  NgbDateNativeUTCAdapter,
  NgbDatepickerModule,
  NgbPopoverModule,
  NgbTimepickerModule,
} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  DYNAMIC_FORM_CONTROL_TYPE_DATETIME_PICKER,
} from './components/dynamic-ng-bootstrap-datetime-picker/dynamic-datetime-picker.model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbTimeNativeUTCAdapter } from './adapters/ngb-time-native-utc-adapter';

@NgModule({
  declarations: [
    DynamicNGBootstrapDatetimePickerComponent,
  ],
  imports: [
    CommonModule,
    NgbDatepickerModule,
    NgbTimepickerModule,
    NgbPopoverModule,
    FormsModule,
    ReactiveFormsModule,
    DynamicFormsCoreModule,
    FontAwesomeModule,
  ],
  providers: [
    NgbDateNativeUTCAdapter,
    NgbTimeNativeUTCAdapter,
    {
      provide: DYNAMIC_FORM_CONTROL_MAP_FN,
      useValue: (model: DynamicFormControlModel): Type<DynamicFormControl> | null => {
        if (model.type === DYNAMIC_FORM_CONTROL_TYPE_DATETIME_PICKER) {
          return DynamicNGBootstrapDatetimePickerComponent;
        }
        return null;
      },
    },
  ],
})
export class DynamicFormsModule { }
