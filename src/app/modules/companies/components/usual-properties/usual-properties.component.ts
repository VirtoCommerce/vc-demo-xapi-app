import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { DynamicFormControlEvent, DynamicFormService } from '@ng-dynamic-forms/core';
import { DynamicNGBootstrapFormComponent } from '@ng-dynamic-forms/ui-ng-bootstrap';
import { fromFormModel, patchFormModel } from 'src/app/helpers/dynamic-forms';
import { Company } from 'src/app/models/company.model';
import { PartialDeep } from 'type-fest';
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
  company!: PartialDeep<Company>

  @Output()
  changeProperty = new EventEmitter<PartialDeep<Company>>();

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
    patchFormModel(this.formInputs, this.company);
    this.formService.detectChanges(this.formComponent);
  }

  onChange(event: DynamicFormControlEvent): void {
    const company = fromFormModel<Company>(event.model);
    if (company != null) {
      this.changeProperty.emit(company);
    }
  }
}
