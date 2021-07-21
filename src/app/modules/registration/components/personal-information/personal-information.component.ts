import { Component } from '@angular/core';
import {
  DynamicFormControlEvent,
  DynamicFormService, DynamicFormValueControlModel,
} from '@ng-dynamic-forms/core';
import { PERSONAL_INFORMATION_LAYOUT } from './personal-information.layout';
import { PERSONAL_INFORMATION_MODEL } from './personal-information.model';
import { PartialDeep } from 'type-fest';
import { Company } from '../../store/company.payload';
import { setCompany } from '../../store/company.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'vc-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: [
    './personal-information.component.scss',
  ],
})
export class PersonalInformationComponent {
  formModel = PERSONAL_INFORMATION_MODEL;

  formLayout = PERSONAL_INFORMATION_LAYOUT;

  formGroup = this.formService.createFormGroup(this.formModel, { updateOn: 'blur' });

  constructor(
    private readonly formService: DynamicFormService,
    private readonly store: Store
  ) {}

  onChange(event: DynamicFormControlEvent): void {
    const model = event.model as DynamicFormValueControlModel<string>;
    const data: PartialDeep<Company> = {
      owner: {
        [model.id]: model.value,
      },
    };
    this.store.dispatch(setCompany({ data }));
  }
}
