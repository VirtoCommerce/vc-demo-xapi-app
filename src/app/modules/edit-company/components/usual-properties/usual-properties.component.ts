import { Component } from '@angular/core';
import { DynamicFormControlEvent, DynamicFormService } from '@ng-dynamic-forms/core';
import { Store } from '@ngrx/store';
import { USUAL_PROPERTIES_MODEL } from './usual-properties.model';

@Component({
  selector: 'vc-usual-properties',
  templateUrl: './usual-properties.component.html',
  styleUrls: [
    './usual-properties.component.scss',
  ],
})
export class UsualPropertiesComponent {
  formModel = USUAL_PROPERTIES_MODEL;

  formGroup = this.formService.createFormGroup(this.formModel, { updateOn: 'blur' });

  constructor(
    private readonly formService: DynamicFormService,
    private readonly store: Store
  ) {
  }

  onChange(event: DynamicFormControlEvent): void {
    console.log('Change', event);
  }

  onNgbEvent(event: DynamicFormControlEvent): void {
    console.log('Ngb', event);
  }
}
