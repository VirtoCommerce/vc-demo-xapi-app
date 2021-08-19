import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultivalueInputComponent } from './components/multivalue-input/multivalue-input.component';
import { NgxMaskModule } from 'ngx-mask';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    MultivalueInputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxMaskModule,
    FontAwesomeModule,
  ],
  exports: [
    MultivalueInputComponent,
  ],
})
export class CustomFormsModule { }
