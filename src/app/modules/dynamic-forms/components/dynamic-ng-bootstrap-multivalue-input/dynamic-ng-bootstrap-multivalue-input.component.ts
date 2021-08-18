/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @angular-eslint/no-output-native */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  DynamicFormControlComponent,
  DynamicFormControlLayout,
  DynamicFormLayout,
  DynamicFormLayoutService,
  DynamicFormValidationService,
  DynamicInputModel,
} from '@ng-dynamic-forms/core';

@Component({
  selector: 'vc-dynamic-ng-bootstrap-multivalue-input',
  templateUrl: './dynamic-ng-bootstrap-multivalue-input.component.html',
  styleUrls: [
    './dynamic-ng-bootstrap-multivalue-input.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class DynamicNgBootstrapMultivalueInputComponent extends DynamicFormControlComponent {
  @Input()
  formLayout?: DynamicFormLayout;

  @Input()
  group!: FormGroup;

  @Input()
  layout?: DynamicFormControlLayout;

  @Input()
  model!: DynamicInputModel;

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
