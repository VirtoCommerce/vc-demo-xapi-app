import { ImageUploaderComponent } from './components/image-uploader/image-uploader.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';

import { CompaniesRoutingModule } from './companies-routing.module';
import { CompaniesComponent } from './companies.component';
import { CompanyEditComponent } from './components/company-edit/company-edit.component';
import { StoreModule } from '@ngrx/store';
import * as fromCompanies from './store/companies.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CompaniesEffects } from './store/companies.effects';
import { DynamicFormsNGBootstrapUIModule } from '@ng-dynamic-forms/ui-ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { UsualPropertiesComponent } from './components/usual-properties/usual-properties.component';
import { CompanyPropertiesComponent } from './components/company-properties/company-properties.component';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  declarations: [
    CompaniesComponent,
    CompanyEditComponent,
    UsualPropertiesComponent,
    CompanyPropertiesComponent,
    ImageUploaderComponent,
  ],
  imports: [
    CommonModule,
    CompaniesRoutingModule,
    FileUploadModule,
    FormsModule,
    CodemirrorModule,
    ReactiveFormsModule,
    DynamicFormsNGBootstrapUIModule,
    StoreModule.forFeature(fromCompanies.companiesFeatureKey, fromCompanies.reducer),
    EffectsModule.forFeature([
      CompaniesEffects,
    ]),
  ],
})
export class CompaniesModule { }
