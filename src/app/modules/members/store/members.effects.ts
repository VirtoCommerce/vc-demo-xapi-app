import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { FetchResult } from '@apollo/client/core';
import { ApolloError } from '@apollo/client/errors';
import { Store } from '@ngrx/store';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { forkJoin, from, Observable, of } from 'rxjs';
import { catchError, map, concatMap, filter, switchMap } from 'rxjs/operators';

import { createContact, createContactVariables } from 'src/app/graphql/types/createContact';
import { createUser, createUserVariables } from 'src/app/graphql/types/createUser';
import {
  updateMemberDynamicProperties,
  updateMemberDynamicPropertiesVariables,
} from 'src/app/graphql/types/updateMemberDynamicProperties';
import { getDictionaryDynamicProperty } from 'src/app/graphql/types/getDictionaryDynamicProperty';
import { getOrganizationMembers } from 'src/app/graphql/types/getOrganizationMembers';

import getDictionaryDynamicPropertyQuery from 'src/app/graphql/queries/get-dictionaryDynamicProperty.graphql';
import getOrganizationMembersQuery from 'src/app/graphql/queries/get-organization-members.graphql';
import createContactMutation from 'src/app/graphql/mutations/create-contact.graphql';
import createUserMutation from 'src/app/graphql/mutations/create-user.graphql';
import updateMemberDynamicPropertiesMutation
  from 'src/app/graphql/mutations/update-memberDynamicProperties.graphql';

import { Member } from 'src/app/models/member.model';
import { selectCurrentCustomerOrganization } from 'src/app/store/current-customer/current-customer.selectors';
import * as MemberActions from './members.actions';
import { nonNull } from 'src/app/helpers/nonNull';

@Injectable()
export class MembersEffects {
  getGender$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MemberActions.getGenderDictionaryItems),
      concatMap(() => this.apollo
        .watchQuery<getDictionaryDynamicProperty>({
          query: getDictionaryDynamicPropertyQuery,
          variables: {
            idOrName: 'Gender',
          },
        })
        .valueChanges.pipe(
          map(result => MemberActions.getGenderDictionaryItemsSuccess({ data: result.data })),
          catchError((error: ApolloError) => of(MemberActions.getGenderDictionaryItemsFailure({ error })))
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

  redirectToMainPage$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(MemberActions.addMemberSuccess),
        concatMap(() => from(this.router.navigate([
          '/',
        ])))
      );
    },
    { dispatch: false }
  );

  getOrganizationMembers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MemberActions.getOrganizationMembers),
      switchMap(action => this.apollo
        .watchQuery<getOrganizationMembers>({
          query: getOrganizationMembersQuery,
          variables: {
            id: action.data.id,
            after: action.data.after,
            first: action.data.first,
            searchPhrase: action.data.searchPhrase,
            sort: action.data.sort,
          },
        })
        .valueChanges.pipe(
          map(result => {
            const data = {
              members: this.mapResultToMembers(result.data),
              membersCount: result.data.organization!.contacts!.totalCount ?? 0,
            };
            return MemberActions.getOrganizationMembersSuccess({ data });
          }),
          catchError((error: ApolloError) => of(MemberActions.getOrganizationMembersFailure({ error })))
        ))
    );
  });

  constructor(
    private readonly router: Router,
    private readonly store: Store,
    private readonly actions$: Actions,
    private readonly apollo: Apollo
  ) {}

  createContact(member: Member, organizationId: string): Observable<FetchResult<createContact>> {
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

  createUser(member: Member, contactResult: FetchResult<createContact>): Observable<FetchResult<createUser>> {
    return this.apollo.mutate<createUser, createUserVariables>({
      mutation: createUserMutation,
      variables: {
        command: {
          userName: member.userName,
          email: member.email,
          password: member.password,
          storeId: 'xapi',
          userType: 'Customer',
          passwordExpired: true,
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

  mapResultToMembers(data: getOrganizationMembers): Member[] {
    const members = data.organization?.contacts?.items?.map(item => {
      if (item?.securityAccounts != null) {
        return {
          fullName: item?.fullName,
          email: item?.securityAccounts[0]?.email,
          lockedState: item?.securityAccounts[0]?.lockedState,
        };
      }
      else {
        return {
          fullName: item?.fullName,
        };
      }
    });
    return members as Member[];
  }
}
