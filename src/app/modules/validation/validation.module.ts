import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_ASYNC_VALIDATORS, NG_VALIDATORS, Validator } from '@angular/forms';
import { DYNAMIC_VALIDATORS, ValidatorFactory } from '@ng-dynamic-forms/core';
import { passwordMatchValidator } from './validators/password-match-validator';
import { EmailUniquenessAsyncValidatorService } from './validators/email-uniqueness-async-validator.service';
import { UsernameUniquenessAsyncValidatorService } from './validators/username-uniqueness-async-validator.service';
import { PasswordPolicyValidatorService } from './validators/password-policy-validator.service';

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
      provide: NG_ASYNC_VALIDATORS,
      useExisting: EmailUniquenessAsyncValidatorService,
      multi: true,
    },
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: UsernameUniquenessAsyncValidatorService,
      multi: true,
    },
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: PasswordPolicyValidatorService,
      multi: true,
    },
    {
      provide: DYNAMIC_VALIDATORS,
      useFactory: (
        emailUniquenessAsyncValidator: EmailUniquenessAsyncValidatorService,
        usernameUniquenessAsyncValidator: UsernameUniquenessAsyncValidatorService,
        passwordPolicyValidatorService: PasswordPolicyValidatorService
      ) => {
        return new Map<string, Validator | ValidatorFactory>([
          [
            'passwordMatchValidator',
            passwordMatchValidator,
          ],
          [
            EmailUniquenessAsyncValidatorService.validatorName,
            emailUniquenessAsyncValidator,
          ],
          [
            UsernameUniquenessAsyncValidatorService.validatorName,
            usernameUniquenessAsyncValidator,
          ],
          [
            PasswordPolicyValidatorService.validatorName,
            passwordPolicyValidatorService,
          ],
        ]);
      },
      deps: [
        EmailUniquenessAsyncValidatorService,
        UsernameUniquenessAsyncValidatorService,
        PasswordPolicyValidatorService,
      ],
    },
  ],
})
export class ValidationModule { }
