import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { DynamicFormService, DynamicFormControlEvent } from '@ng-dynamic-forms/core';
import { DynamicNGBootstrapFormComponent } from '@ng-dynamic-forms/ui-ng-bootstrap';
import { patchFormModel, fromFormModel } from 'src/app/helpers/dynamic-forms';
import { Company } from 'src/app/models/company.model';
import { PartialDeep } from 'type-fest';
import { COMPANY_PROPERTIES_INPUTS, COMPANY_PROPERTIES_MODEL } from './company-properties.model';

@Component({
  selector: 'vc-company-properties',
  templateUrl: './company-properties.component.html',
  styleUrls: [
    './company-properties.component.scss',
  ],
})
export class CompanyPropertiesComponent implements AfterViewInit {
  @Input()
  company!: PartialDeep<Company>

  @Output()
  propertyChange = new EventEmitter<PartialDeep<Company>>();

  @Output()
  validChange = new EventEmitter<boolean>();

  @ViewChild(DynamicNGBootstrapFormComponent, {
    static: true,
  })
  formComponent!: DynamicNGBootstrapFormComponent;

  formInputs = COMPANY_PROPERTIES_INPUTS;

  formModel = COMPANY_PROPERTIES_MODEL;

  formGroup = this.formService.createFormGroup(this.formModel, { updateOn: 'blur' });

  constructor(
    private readonly formService: DynamicFormService
  ) {
  }

  ngAfterViewInit(): void {
    patchFormModel(this.formInputs, this.company);
    this.formService.detectChanges(this.formComponent);
    this.validChange.emit(this.formGroup.valid);
  }

  onChange(event: DynamicFormControlEvent): void {
    const company = fromFormModel<Company>(event.model);
    if (company != null) {
      this.propertyChange.emit(company);
    }
    this.validChange.emit(this.formGroup.valid);
  }
}
