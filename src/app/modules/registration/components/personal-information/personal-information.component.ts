import { Component } from '@angular/core';
import {
  DynamicFormService,
} from '@ng-dynamic-forms/core';
import { PERSONAL_INFORMATION_LAYOUT } from './personal-information.layout';
import { PERSONAL_INFORMATION_MODEL } from './personal-information.model';

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

    formGroup = this.formService.createFormGroup(this.formModel, {  });

    constructor(private readonly formService: DynamicFormService) {}
}
