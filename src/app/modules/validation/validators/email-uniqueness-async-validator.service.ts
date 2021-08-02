import { Injectable } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { checkEmailUniqueness, checkEmailUniquenessVariables } from 'src/app/graphql/types/checkEmailUniqueness';
import checkEmailUniquenessQuery from 'src/app/graphql/queries/check-email-uniqueness.graphql';

@Injectable({
  providedIn: 'root',
})
export class EmailUniquenessAsyncValidatorService implements AsyncValidator {
  constructor(private readonly apollo: Apollo) { }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.apollo.query<checkEmailUniqueness, checkEmailUniquenessVariables>({
      query: checkEmailUniquenessQuery,
      variables: { email: control.value as string },
    }).pipe(map(result => !result.data.checkEmailUniqueness
      ? {
        [EmailUniquenessAsyncValidatorService.name]: true,
      }
      : null));
  }
}
