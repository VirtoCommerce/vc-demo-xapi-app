import { Component, ViewChild } from '@angular/core';
import { DynamicFormService } from '@ng-dynamic-forms/core';
import { DynamicNGBootstrapFormComponent } from '@ng-dynamic-forms/ui-ng-bootstrap';
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
  @ViewChild(DynamicNGBootstrapFormComponent, {
    static: true,
  })
  formComponent!: DynamicNGBootstrapFormComponent;

  formInputs = LOGIN_FORM_INPUTS;

  formModel = LOGIN_FORM_MODEL;

  formLayout = LOGIN_FORM_LAYOUT;

  formGroup = this.formService.createFormGroup(this.formModel, { updateOn: 'blur' });

  constructor(
    private readonly formService: DynamicFormService

  ) { }
}
