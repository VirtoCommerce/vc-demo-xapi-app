import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, AsyncValidator } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  validatePassword,
  validatePasswordVariables,
} from 'src/app/graphql/types/validatePassword';
import { nonNull } from 'src/app/helpers/nonNull';
import validatePasswordQuery from '../../../graphql/queries/validate-password.graphql';

@Injectable({
  providedIn: 'root',
})
export class PasswordPolicyValidatorService implements AsyncValidator {
  static validatorName = 'passwordPolicyValidatorService';

  constructor(private readonly apollo: Apollo) {}

  validate(ctrl: AbstractControl): Observable<ValidationErrors | null> {
    const password = ctrl?.value as string;
    if (password) {
      return this.apollo.query<validatePassword, validatePasswordVariables>({
        query: validatePasswordQuery,
        variables: {
          password,
        },
      }).pipe(
        map(response => {
          const errors = response.data.validatePassword?.errors?.filter(nonNull);
          const result: ValidationErrors = {};
          errors?.forEach(error => {
            result[error?.code] = {
              errorParameter: error.errorParameter,
            };
          });
          return result;
        })
      );
    }
    else {
      return of(null);
    }
  }
}
