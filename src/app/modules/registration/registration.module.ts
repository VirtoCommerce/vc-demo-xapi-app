import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';
import { PersonalInformationComponent } from './components/personal-information/personal-information.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormsNGBootstrapUIModule } from '@ng-dynamic-forms/ui-ng-bootstrap';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';
import {
  RegistrationCompanyAddressComponent,
} from './components/registration-company-address/registration-company-address.component';
import { StoreModule } from '@ngrx/store';
import * as fromCompany from './store/company.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CompanyEffects } from './store/company.effects';

@NgModule({
  declarations: [
    RegistrationComponent,
    PersonalInformationComponent,
    CompanyDetailsComponent,
    RegistrationCompanyAddressComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbNavModule,
    DynamicFormsNGBootstrapUIModule,
    RegistrationRoutingModule,
    StoreModule.forFeature(fromCompany.companyRegistrationFeatureKey, fromCompany.reducer),
    EffectsModule.forFeature([
      CompanyEffects,
    ]),
  ],
})
export class RegistrationModule { }
