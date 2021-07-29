import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALIDATORS, Validator } from '@angular/forms';
import { DYNAMIC_VALIDATORS, ValidatorFactory } from '@ng-dynamic-forms/core';
import { passwordMatchValidator } from './validators/password-match-validator';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    {
      provide: NG_VALIDATORS,
      useValue: passwordMatchValidator,
      multi: true,
    },
    {
      provide: DYNAMIC_VALIDATORS,
      useValue: new Map<string, Validator | ValidatorFactory>([
        [
          'passwordMatchValidator',
          passwordMatchValidator,
        ],
      ]),
    },
  ],
})
export class ValidationModule { }
