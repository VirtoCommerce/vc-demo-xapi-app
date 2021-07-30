import { Store } from '@ngrx/store';
import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { DynamicFormService } from '@ng-dynamic-forms/core';
import { LOGIN_FORM_LAYOUT } from './login-form.layout';
import { LOGIN_FORM_MODEL } from './login-form.model';
import { login } from '../../store/login/login.actions';
import { selectLoginState } from '../../store/login/login.selectors';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'vc-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.scss',
  ],
})
export class LoginComponent implements AfterViewInit, OnDestroy {
  errorMessage = '';

  formModel = LOGIN_FORM_MODEL;

  formLayout = LOGIN_FORM_LAYOUT;

  formGroup = this.formService.createFormGroup(this.formModel, { updateOn: 'blur' });

  unsubscriber = new Subject();

  constructor(private readonly formService: DynamicFormService, private readonly store: Store) { }

  ngAfterViewInit(): void {
    this.store.select(selectLoginState)
      .pipe(takeUntil(this.unsubscriber))
      .subscribe(state => {
        this.errorMessage = state.error;
      });
  }

  login(): void {
    const userName = this.formInputs.userName.value as string;
    const password = this.formInputs.password.value as string;
    this.store.dispatch(login({
      userName,
      password,
    }));
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
}
