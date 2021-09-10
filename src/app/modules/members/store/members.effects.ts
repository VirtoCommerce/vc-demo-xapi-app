import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, filter } from 'rxjs/operators';
import { forkJoin, from, Observable, of } from 'rxjs';

import * as MemberActions from './members.actions';
import { createContact, createContactVariables } from 'src/app/graphql/types/createContact';
import { ApolloError } from '@apollo/client/errors';
import { createUser, createUserVariables } from 'src/app/graphql/types/createUser';
import {
  updateMemberDynamicProperties,
  updateMemberDynamicPropertiesVariables,
} from 'src/app/graphql/types/updateMemberDynamicProperties';
import { Member } from 'src/app/models/member.model';
import getDictionaryDynamicProperty from 'src/app/graphql/queries/get-dictionaryDynamicProperty.graphql';
import createContactMutation from 'src/app/graphql/mutations/create-contact.graphql';
import createUserMutation from 'src/app/graphql/mutations/create-user.graphql';
import updateMemberDynamicPropertiesMutation
  from 'src/app/graphql/mutations/update-memberDynamicProperties.graphql';
import { Apollo } from 'apollo-angular';
import { Store } from '@ngrx/store';
import { FetchResult } from '@apollo/client/core';
import { Router } from '@angular/router';
import { selectCurrentCustomerOrganization } from 'src/app/store/current-customer/current-customer.selectors';
import { nonNull } from 'src/app/helpers/nonNull';
import { getDictionaryDynamicPropery } from 'src/app/graphql/types/getDictionaryDynamicPropery';

@Injectable()
export class MembersEffects {
  getGender$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MemberActions.getGender),
      concatMap(() => this.apollo.watchQuery<getDictionaryDynamicPropery>({
        query: getDictionaryDynamicProperty,
        variables: {
          idOrName: 'Gender',
        },
      })
        .valueChanges
        .pipe(
          map(result => MemberActions.getGenderSuccess({ data: result.data })),
          catchError((error: ApolloError) => of(MemberActions.getGenderFailure({ error })))
        ))
    );
  });

  addMember$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MemberActions.addMember),
      concatLatestFrom(() => [
        this.store.select(selectCurrentCustomerOrganization).pipe(filter(nonNull)),
      ]),
      concatMap(([
        action,
        organization,
      ]) => this.createContact(action.member, organization.id).pipe(
        concatMap(contactResult => forkJoin([
          this.updateMemberDynamicProperties(action.member, contactResult),
          this.createUser(action.member, contactResult),
        ]).pipe(
          map(() => MemberActions.addMemberSuccess()),
          catchError((error: ApolloError) => of(MemberActions.addMemberFailure({ error })))
        ))
      ))
    );
  });

  clearMember$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(MemberActions.addMemberSuccess),
      concatMap(() => of(MemberActions.clearNewMember()))
    );
  });

  redirectToMainPage$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(MemberActions.addMemberSuccess),
      concatMap(() => from(this.router.navigate([
        '/',
      ])))
    );
  }, { dispatch: false });

  constructor(
    private readonly router: Router,
    private readonly store: Store,
    private readonly actions$: Actions,
    private readonly apollo: Apollo
  ) {}

  createContact(
    member: Member,
    organizationId: string
  ): Observable<FetchResult<createContact>> {
    return this.apollo.mutate<createContact, createContactVariables>({
      mutation: createContactMutation,
      variables: {
        command: {
          name: `${member.firstName} ${member.lastName}`,
          firstName: member.firstName,
          lastName: member.lastName,
          organizations: [
            organizationId,
          ],
        },
      },
    });
  }

  createUser(
    member: Member,
    contactResult: FetchResult<createContact>
  ): Observable<FetchResult<createUser>> {
    return this.apollo.mutate<createUser, createUserVariables>({
      mutation: createUserMutation,
      variables: {
        command: {
          userName: member.userName,
          email: member.email,
          password: member.password,
          userType: 'Customer',
          memberId: contactResult.data?.createContact?.id ?? null,
        },
      },
    });
  }

  updateMemberDynamicProperties(
    member: Member,
    contactResult: FetchResult<createContact>
  ): Observable<FetchResult<updateMemberDynamicProperties>> {
    return this.apollo.mutate<updateMemberDynamicProperties, updateMemberDynamicPropertiesVariables>({
      mutation: updateMemberDynamicPropertiesMutation,
      variables: {
        command: {
          memberId: contactResult?.data?.createContact?.id as string,
          dynamicProperties: [
            {
              name: 'Gender',
              value: member.gender,
            },
          ],
        },
      },
    });
  }
}
