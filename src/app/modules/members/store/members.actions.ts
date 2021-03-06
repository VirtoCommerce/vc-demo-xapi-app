import { ApolloError } from '@apollo/client/errors';
import { createAction, props } from '@ngrx/store';
import { getDictionaryDynamicProperty } from 'src/app/graphql/types/getDictionaryDynamicProperty';
import {
  getOrganizationMembers as getOrganizationMembersResult,
  getOrganizationMembersVariables,
} from 'src/app/graphql/types/getOrganizationMembers';
import { inviteMembers_inviteUser_errors } from 'src/app/graphql/types/inviteMembers';
import { Invitation } from 'src/app/models/invitation.model';
import { Member } from 'src/app/models/member.model';

export const getGenderDictionaryItems = createAction(
  '[Member] Get Dictionary Items Gender'
);

export const getGenderDictionaryItemsSuccess = createAction(
  '[Member] Get Gender Dictionary Items Success',
  props<{ data: getDictionaryDynamicProperty }>()
);

export const getGenderDictionaryItemsFailure = createAction(
  '[Member] Get Gender Dictionary Items Failure',
  props<{ error: ApolloError }>()
);

export const setNewMember = createAction(
  '[Member] Set New Member',
  props<{ member: Member }>()
);

export const clearNewMember = createAction(
  '[Member] Clear New Member'
);

export const addMember = createAction(
  '[Member] Add Member',
  props<{ member: Member }>()
);

export const addMemberSuccess = createAction(
  '[Member] Add Member Success'
);

export const addMemberFailure = createAction(
  '[Member] Add Member Failure',
  props<{ error: ApolloError }>()
);

export const getOrganizationMembers = createAction(
  '[Member] Get Company Members',
  props<{ data: getOrganizationMembersVariables }>()
);

export const getOrganizationMembersSuccess = createAction(
  '[Member] Get Company Members Success',
  props<{ data: getOrganizationMembersResult }>()
);

export const getOrganizationMembersFailure = createAction(
  '[Member] Get Company Members Failure',
  props<{ error: ApolloError }>()
);

export const deleteMember = createAction(
  '[Member] Delete Member',
  props<{ memberId: string, userName: string }>()
);

export const deleteMemberSuccess = createAction(
  '[Member] Delete Member Success'
);

export const deleteMemberFailure = createAction(
  '[Member] Delete Member Failure',
  props<{ error: ApolloError | string }>()
);

export const setInvitation = createAction(
  '[Member] Set Invitation',
  props<{ invitation: Invitation }>()
);

export const clearInvitation = createAction(
  '[Member] Clear Invitation'
);

export const inviteMembers = createAction(
  '[Member] Invite Members'
);

export const inviteMembersSuccess = createAction(
  '[Member] Invite Members Success'
);

export const inviteMembersFailure = createAction(
  '[Member] Invite Members Failure',
  props<{ error: ApolloError | ReadonlyArray<(inviteMembers_inviteUser_errors | null)> | null | undefined }>()
);
