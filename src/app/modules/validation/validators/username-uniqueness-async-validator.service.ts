import { Injectable } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { checkUsernameUniqueness,
  checkUsernameUniquenessVariables } from 'src/app/graphql/types/checkUsernameUniqueness';
import checkUsernameUniquenessQuery from 'src/app/graphql/queries/check-username-uniqueness.graphql';

@Injectable({
  providedIn: 'root',
})
export class UsernameUniquenessAsyncValidatorService implements AsyncValidator {
  static validatorName = 'usernameUniqueness';

  constructor(private readonly apollo: Apollo) { }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.apollo.query<checkUsernameUniqueness, checkUsernameUniquenessVariables>({
      query: checkUsernameUniquenessQuery,
      variables: { username: control.value as string },
    }).pipe(map(result => !result.data.checkUsernameUniqueness
      ? {
        [UsernameUniquenessAsyncValidatorService.validatorName]: !result.data.checkUsernameUniqueness,
      }
      : null));
  }
}
