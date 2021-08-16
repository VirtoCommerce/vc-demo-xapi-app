import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { DynamicFormControlEvent, DynamicFormService } from '@ng-dynamic-forms/core';
import { DynamicNGBootstrapFormComponent } from '@ng-dynamic-forms/ui-ng-bootstrap';
import { patchFormModel } from 'src/app/helpers/dynamic-forms';
import { EditCompany } from 'src/app/models/edit-company.model';
import { USUAL_PROPERTIES_INPUTS, USUAL_PROPERTIES_MODEL } from './usual-properties.model';

@Component({
  selector: 'vc-usual-properties',
  templateUrl: './usual-properties.component.html',
  styleUrls: [
    './usual-properties.component.scss',
  ],
})
export class UsualPropertiesComponent implements AfterViewInit {
  @Input()
  member!: EditCompany

  @ViewChild(DynamicNGBootstrapFormComponent, {
    static: true,
  })
  formComponent!: DynamicNGBootstrapFormComponent;

  formInputs = USUAL_PROPERTIES_INPUTS;

  formModel = USUAL_PROPERTIES_MODEL;

  formGroup = this.formService.createFormGroup(this.formModel, { updateOn: 'blur' });

  constructor(
    private readonly formService: DynamicFormService
  ) {
  }

  ngAfterViewInit(): void {
    patchFormModel(this.formInputs, this.member);
    this.formService.detectChanges(this.formComponent);
  }

  onChange(event: DynamicFormControlEvent): void {
    console.log('Change', event);
  }
}
