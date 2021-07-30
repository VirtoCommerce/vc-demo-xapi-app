import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorsComponent } from './errors.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    ErrorsComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [
    ErrorsComponent,
  ],
})
export class ErrorsModule { }
