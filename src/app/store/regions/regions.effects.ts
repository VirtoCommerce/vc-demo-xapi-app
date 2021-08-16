import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { ApolloError } from '@apollo/client/core';
import * as RegionsActions from './regions.actions';
import getRegionsQuery from '../../graphql/queries/get-regions.graphql';
import { getRegions } from 'src/app/graphql/types/getRegions';

@Injectable()
export class RegionsEffects {
  getRegions$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(RegionsActions.getRegions),
      concatMap(action => this.apollo.query<getRegions>({
        query: getRegionsQuery,
        variables: {
          countryId: action.countryId,
        },
      })
        .pipe(
          map(result => RegionsActions.getRegionsSuccess({
            countryId: action.countryId,
            data: result.data,
          })),
          catchError((error: ApolloError) => of(RegionsActions.getRegionsFailure({ error })))
        ))
    );
  });

  constructor(
    private readonly actions$: Actions,
    private readonly apollo: Apollo
  ) {}
}
