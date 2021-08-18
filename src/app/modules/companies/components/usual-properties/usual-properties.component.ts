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
import { FormGroup, FormControl } from '@angular/forms';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsualPropertiesComponent implements OnInit, OnChanges {
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

  formInputs = USUAL_PROPERTIES_INPUTS;

  formModel = USUAL_PROPERTIES_MODEL;

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
