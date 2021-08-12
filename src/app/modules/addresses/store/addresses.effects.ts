import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as AddressesActions from './addresses.actions';
import { getOrganizationAddresses } from 'src/app/graphql/types/getOrganizationAddresses';
import getOrganizationAddressesQuery from '../../../graphql/queries/get-organization-addresses.graphql';
import { ApolloError } from '@apollo/client/core';
import { Apollo } from 'apollo-angular';

@Injectable()
export class AddressesEffects {
  getOrganizationAddressess$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(AddressesActions.getAddressess),
      switchMap(action => this.apollo.watchQuery<getOrganizationAddresses>({
        query: getOrganizationAddressesQuery,
        variables: {
          id: action.id,
          count: action.count,
          cursor: action.cursor,
          sort: action.sort,
        },
      })
        .valueChanges
        .pipe(
          map(result => AddressesActions.getAddressessSuccess({ data: result.data })),
          catchError((error: ApolloError) => of(AddressesActions.getAddressessFailure({ error })))
        ))
    );
  });

  constructor(private readonly actions$: Actions, private readonly apollo: Apollo) {}
}
