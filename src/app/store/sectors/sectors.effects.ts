import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as SectorActions from './sectors.actions';

import getDictionaryDynamicPropertyQuery from '../../graphql/queries/get-dictionaryDynamicProperty.graphql';
import { Apollo } from 'apollo-angular';
import { getDictionaryDynamicProperty } from 'src/app/graphql/types/getDictionaryDynamicProperty';
import { ApolloError } from '@apollo/client/core';

@Injectable()
export class SectorsEffects {
  getSectors$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SectorActions.getSectors),
      concatMap(() => this.apollo.watchQuery<getDictionaryDynamicProperty>({
        query: getDictionaryDynamicPropertyQuery,
        variables: {
          idOrName: 'Sector',
        },
      })
        .valueChanges
        .pipe(
          map(result => SectorActions.getSectorsSuccess({ data: result.data })),
          catchError((error: ApolloError) => of(SectorActions.getSectorsFailure({ error })))
        ))
    );
  });

  constructor(private readonly actions$: Actions, private readonly apollo: Apollo) {}
}
