/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @angular-eslint/no-output-native */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CodemirrorComponent } from '@ctrl/ngx-codemirror';
import {
  DynamicFormControlComponent,
  DynamicFormLayout,
  DynamicFormLayoutService,
  DynamicFormValidationService,
} from '@ng-dynamic-forms/core';
import { DynamicNgxCodemirorModel } from './dynamic-ngx-codemiror.model';

@Component({
  selector: 'vc-dynamic-ngx-codemiror',
  templateUrl: './dynamic-ngx-codemiror.component.html',
  styleUrls: [
    './dynamic-ngx-codemiror.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicNgxCodemirorComponent extends DynamicFormControlComponent {
    @Input() group!: FormGroup;

    @Input() formLayout?: DynamicFormLayout;

    @Input() model!: DynamicNgxCodemirorModel;

    @Output() blur: EventEmitter<any> = new EventEmitter();

    @Output() change: EventEmitter<any> = new EventEmitter();

    @Output() focus: EventEmitter<any> = new EventEmitter();

    @ViewChild(CodemirrorComponent, { static: false }) codemiroroComponent!: CodemirrorComponent;

    constructor(
        protected layoutService: DynamicFormLayoutService,
        protected validationService: DynamicFormValidationService
    ) {
      super(layoutService, validationService);
    }

    focusChanged(focused: boolean): void {
      if (focused) {
        this.onFocus(focused);
      }
      else {
        this.onBlur(focused);
      }
    }
}
