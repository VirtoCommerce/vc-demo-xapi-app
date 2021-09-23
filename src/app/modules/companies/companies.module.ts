import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';

import { CompaniesRoutingModule } from './companies-routing.module';
import { CompaniesComponent } from './companies.component';
import { CompanyEditComponent } from './components/company-edit/company-edit.component';
import { StoreModule } from '@ngrx/store';
import * as fromCompanies from './store/companies.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CompaniesEffects } from './store/companies.effects';
import { DynamicFormsNGBootstrapUIModule } from '@ng-dynamic-forms/ui-ng-bootstrap';
import { UsualPropertiesComponent } from './components/usual-properties/usual-properties.component';
import { CompanyPropertiesComponent } from './components/company-properties/company-properties.component';
import { DictionaryComponent } from './components/dictionary/dictionary.component';
import { MultilingualPropertiesComponent } from
  './components/multilanguage-properties/multilingual-properties.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    CompaniesComponent,
    CompanyEditComponent,
    UsualPropertiesComponent,
    CompanyPropertiesComponent,
    DictionaryComponent,
    MultilingualPropertiesComponent,
  ],
  imports: [
    CommonModule,
    CompaniesRoutingModule,
    NgbPaginationModule,
    FormsModule,
    CodemirrorModule,
    ReactiveFormsModule,
    DynamicFormsNGBootstrapUIModule,
    StoreModule.forFeature(fromCompanies.companiesFeatureKey, fromCompanies.reducer),
    EffectsModule.forFeature([
      CompaniesEffects,
    ]),
    FontAwesomeModule,
  ],
})
export class CompaniesModule { }
