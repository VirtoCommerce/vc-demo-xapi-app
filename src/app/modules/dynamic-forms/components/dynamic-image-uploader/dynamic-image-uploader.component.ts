import { DynamicImageUploaderModel } from './dynamic-image-uploader.model';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { DynamicFormControlComponent, DynamicFormLayout, DynamicFormLayoutService, DynamicFormValidationService }
  from '@ng-dynamic-forms/core';
import { FormGroup } from '@angular/forms';
import { ImageUploaderComponent } from 'src/app/modules/core/components/image-uploader/image-uploader.component';

@Component({
  selector: 'vc-dynamic-image-uploader',
  templateUrl: './dynamic-image-uploader.component.html',
  styleUrls: [
    './dynamic-image-uploader.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicImageUploaderComponent extends DynamicFormControlComponent {
  @Input() group!: FormGroup;

  @Input() formLayout?: DynamicFormLayout;

  @Input() model!: DynamicImageUploaderModel;

  @Output() blur: EventEmitter<any> = new EventEmitter();

  @Output() change: EventEmitter<any> = new EventEmitter();

  @Output() focus: EventEmitter<any> = new EventEmitter();

  @ViewChild(ImageUploaderComponent) impageUploaderComponent!: ImageUploaderComponent;

  constructor(
protected layoutService: DynamicFormLayoutService,
    protected validationService: DynamicFormValidationService
  ) {
    super(layoutService, validationService);
  }
}
