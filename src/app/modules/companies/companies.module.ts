import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompaniesRoutingModule } from './companies-routing.module';
import { CompaniesComponent } from './companies.component';
import { CompanyEditComponent } from './components/company-edit/company-edit.component';
import { StoreModule } from '@ngrx/store';
import * as fromCompanies from './store/companies.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CompaniesEffects } from './store/companies.effects';
import { DynamicFormsNGBootstrapUIModule } from '@ng-dynamic-forms/ui-ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CompaniesComponent,
    CompanyEditComponent,
  ],
  imports: [
    CommonModule,
    CompaniesRoutingModule,
    ReactiveFormsModule,
    DynamicFormsNGBootstrapUIModule,
    StoreModule.forFeature(fromCompanies.companiesFeatureKey, fromCompanies.reducer),
    EffectsModule.forFeature([
      CompaniesEffects,
    ]),
  ],
})
export class CompaniesModule { }