import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, AsyncValidator } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  validatePassword,
  validatePasswordVariables,
} from 'src/app/graphql/types/validatePassword';
import validatePasswordQuery from '../../../graphql/queries/validate-password.graphql';
import { passwordPolicyMessages } from 'src/app/modules/validation/constants/validation-messages.constants';

@Injectable({ providedIn: 'root' })
export class PasswordPolicyValidatorService implements AsyncValidator {
  static validatorName = 'passwordPolicyValidatorService';

  constructor(private readonly apollo: Apollo) {}

  validate(ctrl: AbstractControl): Observable<ValidationErrors | null> {
    const password = ctrl?.value as string;

    return this.apollo.query<validatePassword, validatePasswordVariables>({
      query: validatePasswordQuery,
      variables: {
        password: password,
      },
    }).pipe(
      map(result => {
        const errorsData = result.data.validatePassword?.errors;
        const errorMessages = errorsData?.map(element => {
          const code = element?.code as string;
          let message = '';
          if (code in passwordPolicyMessages) {
            if (code === 'PasswordTooShort') {
              message = passwordPolicyMessages[code] +
              `${element?.errorParameter ?? '' }` +
              passwordPolicyMessages.Characters;
              return message;
            }
            else {
              message = passwordPolicyMessages[code];
            }
          }
          else {
            message = passwordPolicyMessages.PasswordRequiresDefaultMessage;
          }
          return message;
        });
        return result.data.validatePassword?.succeeded
          ? null
          : { [PasswordPolicyValidatorService.validatorName]: { messages: errorMessages } };
      })
    );
  }
}
