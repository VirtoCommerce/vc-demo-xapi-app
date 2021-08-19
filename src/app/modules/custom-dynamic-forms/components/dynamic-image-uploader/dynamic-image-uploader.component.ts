/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @angular-eslint/no-output-native */
import { DynamicImageUploaderModel } from './dynamic-image-uploader.model';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { DynamicFormControlComponent, DynamicFormLayout, DynamicFormLayoutService, DynamicFormValidationService }
  from '@ng-dynamic-forms/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'vc-dynamic-image-uploader',
  templateUrl: './dynamic-image-uploader.component.html',
  styleUrls: [
    './dynamic-image-uploader.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicImageUploaderComponent extends DynamicFormControlComponent {
  @Input()
  group!: FormGroup;

  @Input()
  formLayout?: DynamicFormLayout;

  @Input()
  model!: DynamicImageUploaderModel;

  @Output()
  blur: EventEmitter<any> = new EventEmitter();

  @Output()
  change: EventEmitter<any> = new EventEmitter();

  @Output()
  focus: EventEmitter<any> = new EventEmitter();

  constructor(
    protected layoutService: DynamicFormLayoutService,
    protected validationService: DynamicFormValidationService
  ) {
    super(layoutService, validationService);
  }
}
