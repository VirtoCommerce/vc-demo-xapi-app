import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { registerCompany } from './store/company.actions';

@Component({
  selector: 'vc-registration',
  templateUrl: './registration.component.html',
  styleUrls: [
    './registration.component.scss',
  ],
})
export class RegistrationComponent {
  activeId!: string;

  personalInfoIsValid = false;

  companyDetailsIsValid = false;

  constructor(private readonly store: Store) {}

  setPersonalInfoValidity(status: boolean): void {
    this.personalInfoIsValid = status;
  }

  setCompanyDetailsValidity(status: boolean): void {
    this.companyDetailsIsValid = status;
  }

  submit(): void {
    this.store.dispatch(registerCompany());
  }
}
