import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';
import { PersonalInformationComponent } from './components/personal-information/personal-information.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RegistrationComponent,
    PersonalInformationComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbNavModule,
    RegistrationRoutingModule,
  ],
})
export class RegistrationModule { }
