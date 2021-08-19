import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  NgbDatepickerModule,
  NgbTimepickerModule,
  NgbPopoverModule,
  NgbDateNativeUTCAdapter,
} from '@ng-bootstrap/ng-bootstrap';
import { DynamicFormsCoreModule, DynamicFormService } from '@ng-dynamic-forms/core';
import { NgbTimeNativeUTCAdapter } from '../../adapters/ngb-time-native-utc-adapter';
import { DynamicDateTimePickerModel } from './dynamic-datetime-picker.model';

import { DynamicNGBootstrapDatetimePickerComponent } from './dynamic-ng-bootstrap-datetime-picker.component';

describe('DynamicNgBootstrapDatetimePickerComponent', () => {
  const testModel = new DynamicDateTimePickerModel({ id: 'datetime' });
  const formModel = [
    testModel,
  ];
  let formGroup: FormGroup;
  let component: DynamicNGBootstrapDatetimePickerComponent;
  let fixture: ComponentFixture<DynamicNGBootstrapDatetimePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NgbDatepickerModule,
        NgbTimepickerModule,
        NgbPopoverModule,
        FormsModule,
        ReactiveFormsModule,
        DynamicFormsCoreModule,
        FontAwesomeModule,
        NoopAnimationsModule,
      ],
      declarations: [
        DynamicNGBootstrapDatetimePickerComponent,
      ],
      providers: [
        NgbDateNativeUTCAdapter,
        NgbTimeNativeUTCAdapter,
      ],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(DynamicNGBootstrapDatetimePickerComponent);

        component = fixture.componentInstance;
      });
  });

  beforeEach(inject([
    DynamicFormService,
  ], (service: DynamicFormService) => {
    formGroup = service.createFormGroup(formModel);

    component.group = formGroup;
    component.model = testModel;

    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
