import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditCompanyRoutingModule } from './edit-company-routing.module';
import { EditCompanyComponent } from './edit-company.component';
import { UsualPropertiesComponent } from './components/usual-properties/usual-properties.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormsNGBootstrapUIModule } from '@ng-dynamic-forms/ui-ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    EditCompanyComponent,
    UsualPropertiesComponent,
  ],
  imports: [
    CommonModule,
    EditCompanyRoutingModule,
    ReactiveFormsModule,
    DynamicFormsNGBootstrapUIModule,
    NgbModule,
  ],
})
export class EditCompanyModule { }
