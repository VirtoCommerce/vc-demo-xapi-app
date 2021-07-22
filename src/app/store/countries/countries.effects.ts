import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as CountriesActions from './countries.actions';

import getCountriesQuery from '../../graphql/queries/get-countries.graphql';
import { Apollo } from 'apollo-angular';
import { getCountries } from 'src/app/graphql/types/getCountries';
import { ApolloError } from '@apollo/client/core';

@Injectable()
export class CountriesEffects {
  getCountries$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(CountriesActions.getCountries),
      concatMap(() => this.apollo.watchQuery<getCountries>({ query: getCountriesQuery })
        .valueChanges
        .pipe(
          map(result => CountriesActions.getCountriesSuccess({ data: result.data })),
          catchError((error: ApolloError) => of(CountriesActions.getCountriesFailure({ error })))
        ))
    );
  });

  constructor(
    private readonly actions$: Actions,
    private readonly apollo: Apollo
  ) {}
}
