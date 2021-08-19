import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicFormService, DynamicFormControlEvent } from '@ng-dynamic-forms/core';
import { DynamicNGBootstrapFormComponent } from '@ng-dynamic-forms/ui-ng-bootstrap';
import { patchFormModel, fromFormModel } from 'src/app/helpers/dynamic-forms';
import { Company } from 'src/app/models/company.model';
import { PartialDeep } from 'type-fest';
import { COMPANY_PROPERTIES_INPUTS, COMPANY_PROPERTIES_MODEL } from './company-properties.model';
import { COMPANY_PROPERTIES_LAYOUT } from './company-propertis.layout';

@Component({
  selector: 'vc-company-properties',
  templateUrl: './company-properties.component.html',
  styleUrls: [
    './company-properties.component.scss',
  ],
})
export class CompanyPropertiesComponent implements OnInit, OnChanges {
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

  formLayout = COMPANY_PROPERTIES_LAYOUT;

  formGroup!: FormGroup;

  constructor(
    private readonly formService: DynamicFormService
  ) {
  }

  ngOnInit(): void {
    this.formGroup = this.formService.createFormGroup(this.formModel, { updateOn: 'blur' });
    this.validChange.emit(this.formGroup.valid);
  }

  ngOnChanges(): void {
    patchFormModel(this.formInputs, this.company);
    this.validChange.emit(this.formGroup?.valid);
  }

  onChange(event: DynamicFormControlEvent): void {
    const company = fromFormModel<Company>(event.model);
    if (company != null) {
      this.propertyChange.emit(company);
    }
    this.validChange.emit(this.formGroup.valid);
  }
}
