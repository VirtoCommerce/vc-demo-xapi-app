import {
  ChangeDetectionStrategy,
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
import { fromFormModel } from 'src/app/helpers/dynamic-forms';
import { Company } from 'src/app/models/company.model';
import { PartialDeep } from 'type-fest';
import { MULTIVALUE_PROPERTIES_LAYOUT } from './multivalue-properties.layout';
import { MULTIVALUE_PROPERTIES_INPUTS, MULTIVALUE_PROPERTIES_MODEL } from './multivalue-properties.model';

@Component({
  selector: 'vc-multivalue-properties',
  templateUrl: './multivalue-properties.component.html',
  styleUrls: [
    './multivalue-properties.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultivaluePropertiesComponent implements OnInit, OnChanges {
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

  formInputs = MULTIVALUE_PROPERTIES_INPUTS;

  formModel = MULTIVALUE_PROPERTIES_MODEL;

  formLayout = MULTIVALUE_PROPERTIES_LAYOUT;

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
    // PatchFormModel(this.formInputs, this.company);
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
