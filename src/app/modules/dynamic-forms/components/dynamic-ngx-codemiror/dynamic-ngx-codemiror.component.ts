import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, Renderer2, ViewChild, AfterViewInit } from '@angular/core';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicNgxCodemirorComponent extends DynamicFormControlComponent {
    @Input() group!: FormGroup;

    @Input() formLayout?: DynamicFormLayout;

    @Input() model!: DynamicNgxCodemirorModel;

    @Output() blur: EventEmitter<any> = new EventEmitter();

    @Output() change: EventEmitter<any> = new EventEmitter();

    @Output() focus: EventEmitter<any> = new EventEmitter();

    @ViewChild(CodemirrorComponent, {static: false}) codemiroroComponent!: CodemirrorComponent;

    constructor(
protected layoutService: DynamicFormLayoutService,
          protected validationService: DynamicFormValidationService
    ) {
      super(layoutService, validationService);
    }
}
