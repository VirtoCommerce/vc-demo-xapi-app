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

  setPersonalInfoValidity(status: string): void {
    status === 'VALID' ? this.personalInfoIsValid = true : this.personalInfoIsValid = false;
  }

  setCompanyDetailsValidity(status: string): void {
    status === 'VALID' ? this.companyDetailsIsValid = true : this.companyDetailsIsValid = false;
  }

  submit(): void {
    this.store.dispatch(registerCompany());
  }
}
