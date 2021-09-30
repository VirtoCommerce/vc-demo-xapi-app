import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FetchResult } from '@apollo/client/core';
import { ApolloError } from '@apollo/client/errors';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Apollo } from 'apollo-angular';
import { forkJoin, from, Observable, of, throwError } from 'rxjs';
import { catchError, concatMap, filter, map, switchMap } from 'rxjs/operators';
import createContactMutation from 'src/app/graphql/mutations/create-contact.graphql';
import createUserMutation from 'src/app/graphql/mutations/create-user.graphql';
import deleteContactMutation from 'src/app/graphql/mutations/delete-contact.graphql';
import deleteUsersMutation from 'src/app/graphql/mutations/delete-users.graphql';
import inviteMembersMutation from 'src/app/graphql/mutations/invite-members.graphql';
import updateMemberDynamicPropertiesMutation from 'src/app/graphql/mutations/update-memberDynamicProperties.graphql';
import getDictionaryDynamicPropertyQuery from 'src/app/graphql/queries/get-dictionaryDynamicProperty.graphql';
import getOrganizationMembersQuery from 'src/app/graphql/queries/get-organization-members.graphql';
import { createContact, createContactVariables } from 'src/app/graphql/types/createContact';
import { createUser, createUserVariables } from 'src/app/graphql/types/createUser';
import { deleteContact, deleteContactVariables } from 'src/app/graphql/types/deleteContact';
import { deleteUsers, deleteUsersVariables } from 'src/app/graphql/types/deleteUsers';
import { getDictionaryDynamicProperty } from 'src/app/graphql/types/getDictionaryDynamicProperty';
import { getOrganizationMembers } from 'src/app/graphql/types/getOrganizationMembers';
import { inviteMembers, inviteMembersVariables } from 'src/app/graphql/types/inviteMembers';
import {
  updateMemberDynamicProperties,
  updateMemberDynamicPropertiesVariables,
} from 'src/app/graphql/types/updateMemberDynamicProperties';
import { nonNull } from 'src/app/helpers/nonNull';
import { Invitation } from 'src/app/models/invitation.model';
import { Member } from 'src/app/models/member.model';
import { selectCurrentCustomerOrganization } from 'src/app/store/current-customer/current-customer.selectors';
import { pageInfo } from './../components/members-list/members-list.constants';
import * as MemberActions from './members.actions';
import { selectInvitation } from './members.selectors';

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

  refresh$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MemberActions.deleteMemberSuccess),
      concatLatestFrom(() => [
        this.store.select(selectCurrentCustomerOrganization).pipe(filter(nonNull)),
      ]),
      concatMap(([
        _,
        organization,
      ]) => {
        const requestData = {
          data: {
            id: organization.id,
            first: pageInfo.pageSize,
            after: pageInfo.cursor,
            searchPhrase: '',
            sort: `name:${pageInfo.sortAscending}`,
          },
        };

        return of(MemberActions.getOrganizationMembers(requestData));
      })
    );
  });

  deleteMember$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MemberActions.deleteMember),
      concatLatestFrom(() => [
        this.store.select(selectCurrentCustomerOrganization).pipe(filter(nonNull)),
      ]),
      concatMap(([
        action,
        organization,
      ]) => forkJoin([
        of(action),
        of(organization),
        this.deleteUser(action.userName),
      ])),
      concatMap(([
        action,
        organization,
        result,
      ]) => {
        if (result.data?.deleteUsers?.succeeded) {
          return this.deleteContact(action.memberId, organization.id);
        }
        else {
          return throwError('User was not deleted');
        }
      }),
      concatMap(() => of(MemberActions.deleteMemberSuccess())),
      catchError((error: ApolloError | string) => of(MemberActions.deleteMemberFailure({ error })))
    );
  });

  clearMember$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MemberActions.addMemberSuccess),
      concatMap(() => of(MemberActions.clearNewMember()))
    );
  });

  inviteMembers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MemberActions.inviteMembers),
      concatLatestFrom(() => [
        this.store.select(selectInvitation).pipe(filter(nonNull)),
        this.store.select(selectCurrentCustomerOrganization).pipe(filter(nonNull)),
      ]),
      concatMap(([
        _,
        invitation,
        organization,
      ]) => this.inviteMembers(invitation, organization.id).pipe(
        map(result => result?.data?.inviteUser?.succeeded
          ? MemberActions.inviteMembersSuccess()
          : MemberActions.inviteMembersFailure({
            error: result?.data?.inviteUser?.errors,
          })),
        catchError((error: ApolloError) => of(MemberActions.inviteMembersFailure({ error })))
      ))
    );
  })

  redirectToMainPage$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(MemberActions.addMemberSuccess, MemberActions.inviteMembersSuccess),
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
          map(result => MemberActions.getOrganizationMembersSuccess({ data: result.data })),
          catchError((error: ApolloError) => of(MemberActions.getOrganizationMembersFailure({ error })))
        ))
    );
  });

  constructor(
    private readonly router: Router,
    private readonly store: Store,
    private readonly actions$: Actions,
    private readonly apollo: Apollo
  ) { }

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
      refetchQueries: [
        {
          query: getOrganizationMembersQuery,
          variables: {
            id: organizationId,
            first: pageInfo.pageSize,
            after: pageInfo.cursor,
            searchPhrase: '',
            sort: `name:${pageInfo.sortAscending}`,
          },
        },
      ],
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

  deleteUser(userName: string): Observable<FetchResult<deleteUsers>>  {
    return this.apollo.mutate<deleteUsers, deleteUsersVariables>({
      mutation: deleteUsersMutation,
      variables: {
        command: {
          userNames: [
            userName,
          ],
        },
      },
    });
  }

  deleteContact(memberId: string, organizationId: string): Observable<FetchResult<deleteContact>> {
    return this.apollo.mutate<deleteContact, deleteContactVariables>({
      mutation: deleteContactMutation,
      variables: {
        command: {
          contactId: memberId,
        },
      },
      refetchQueries: [
        {
          query: getOrganizationMembersQuery,
          variables: {
            id: organizationId,
            first: pageInfo.pageSize,
            after: pageInfo.cursor,
            searchPhrase: '',
            sort: `name:${pageInfo.sortAscending}`,
          },
        },
      ],
    });
  }

  inviteMembers(
    invitation: Invitation,
    organizationId: string
  ): Observable<FetchResult<inviteMembers>> {
    return this.apollo.mutate<inviteMembers, inviteMembersVariables>({
      mutation: inviteMembersMutation,
      variables: {
        command: {
          storeId: 'xapi',
          organizationId,
          urlSuffix: '/registration/by-invitation',
          emails: invitation.emails,
          message: invitation.message,
        },
      },
    });
  }
}
