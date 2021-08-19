import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, filter, map, switchMap } from 'rxjs/operators';
import { from, of } from 'rxjs';

import * as AddressesActions from './addresses.actions';
import { getOrganizationAddresses } from 'src/app/graphql/types/getOrganizationAddresses';
import getOrganizationAddressesQuery from '../../../graphql/queries/get-organization-addresses.graphql';
import { ApolloError } from '@apollo/client/core';
import { Apollo } from 'apollo-angular';
import { Store } from '@ngrx/store';
import { selectAddressesState } from './addresses.selectors';
import { updateMemberAddresses, updateMemberAddressesVariables } from 'src/app/graphql/types/updateMemberAddresses';
import updateAddressMutation from '../../../graphql/mutations/update-organization-address.graphql';
import { Router } from '@angular/router';
import { selectCountriesState } from 'src/app/store/countries/countries.selectors';
import { nonNull } from 'src/app/helpers/nonNull';

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

  updateAddress$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AddressesActions.updateAddress),
      concatLatestFrom(() => [
        this.store.select(selectAddressesState),
        this.store.select(selectCountriesState).pipe(filter(nonNull)),
      ]),
      concatMap(([
        action,
        state,
        countries,
      ]) => this.apollo.mutate<updateMemberAddresses, updateMemberAddressesVariables>({
        mutation: updateAddressMutation,
        variables: {
          command: {
            memberId: action.memberId,
            addresses: [
              {
                ...state.editAddress,
                city: state.editAddress?.city as string,
                countryCode: state.editAddress?.countryCode as string,
                countryName: countries.find(country => {
                  return country.id === state.editAddress?.countryCode;
                })?.name as string,
                line1: state.editAddress?.line1 as string,
                postalCode: state.editAddress?.postalCode as string,
              },
            ],
          },
        },
      }).pipe(
        map(result => AddressesActions.updateAddressSuccess({
          data: result.data,
        })),
        catchError((error: ApolloError) => of(AddressesActions.updateAddressFailure({ error })))
      ))
    );
  });

  redirectToAddressesPage$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AddressesActions.updateAddressSuccess),
      concatMap(() => from(this.router.navigate([
        'addresses',
      ])))
    );
  }, { dispatch: false });

  resetAddressForm$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AddressesActions.updateAddressSuccess),
      concatMap(() => of(AddressesActions.resetAddressForm()))
    );
  });

  constructor(
    private readonly actions$: Actions,
    private readonly apollo: Apollo,
    private readonly store: Store,
    private readonly router: Router
  ) {}
}
