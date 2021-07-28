import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorsRoutingModule } from './errors-routing.module';
import { ErrorsComponent } from './errors.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    ErrorsComponent,
  ],
  imports: [
    CommonModule,
    ErrorsRoutingModule,
    FontAwesomeModule,
  ],
  exports: [
    ErrorsComponent,
  ],
})
export class ErrorsModule { }
