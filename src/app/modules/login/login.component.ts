import { Component } from '@angular/core';
import { DynamicFormService } from '@ng-dynamic-forms/core';
import { LOGIN_FORM_LAYOUT } from './login-form.layout';
import { LOGIN_FORM_INPUTS, LOGIN_FORM_MODEL } from './login-form.model';

@Component({
  selector: 'vc-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.scss',
  ],
})
export class LoginComponent {
  errorMessage = '';

  formInputs = LOGIN_FORM_INPUTS;

  formModel = LOGIN_FORM_MODEL;

  formLayout = LOGIN_FORM_LAYOUT;

  formGroup = this.formService.createFormGroup(this.formModel, { updateOn: 'blur' });

  constructor(
    private readonly formService: DynamicFormService

  ) { }
}
