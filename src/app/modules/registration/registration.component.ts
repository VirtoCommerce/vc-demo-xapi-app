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

  constructor(private readonly store: Store) {}

  submit(): void {
    this.store.dispatch(registerCompany());
  }
}
