import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import { resetPasswordByToken, resetPasswordByTokenVariables } from 'src/app/graphql/types/resetPasswordByToken';
import resetPasswordByTokenMutation from 'src/app/graphql/mutations/reset-password-by-token.graphql';
import {
  PasswordPolicyValidatorService,
} from 'src/app/modules/validation/validators/password-policy-validator.service';
import { passwordMatchValidator } from 'src/app/modules/validation/validators/password-match-validator';
import * as ValidationMessages from 'src/app/modules/validation/constants/validation-messages.constants';

@Component({
  selector: 'vc-reset-password',
  templateUrl: './reset-password-form.component.html',
  styleUrls: [
    './reset-password-form.component.scss',
  ],
})

export class ResetPasswordFormComponent implements OnDestroy {
  userId = '';

  token = '';

  validationMessages = ValidationMessages;

  mutationErrors: string[] = [];

  unsubscriber = new Subject()

  resetPasswordForm = new FormGroup({
    password: new FormControl(
      '',
      Validators.required,
      this.passwordPolicyValidator.validate.bind(this.passwordPolicyValidator)
    ),
    confirmPassword: new FormControl(
      '',
      Validators.required
    ),
  }, passwordMatchValidator())

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly apollo: Apollo,
    private readonly passwordPolicyValidator: PasswordPolicyValidatorService,
    private readonly router: Router
  ) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.userId = params['userId'] as string;
      this.token = params['token'] as string;
    });
  }

  onSubmit(): void {
    const password = this.resetPasswordForm.controls.password.value as string;
    this.apollo.mutate<resetPasswordByToken, resetPasswordByTokenVariables>({
      mutation: resetPasswordByTokenMutation,
      variables: {
        command: {
          token: this.token,
          userId: this.userId,
          newPassword: password,
        },
      },
    })
      .pipe(takeUntil(this.unsubscriber))
      .subscribe(response => {
        if (response.data?.resetPasswordByToken?.errors?.length as number > 0) {
          this.mutationErrors = response.data?.resetPasswordByToken?.errors?.map(error => {
            return this.validationMessages.resetPasswordErrors[error?.code as string];
          }) as string[];
        }
        else {
          void this.router.navigate([
            'login',
          ]);
        }
      });
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.unsubscribe();
  }
}
