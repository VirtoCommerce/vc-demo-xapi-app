import { createReducer, on } from '@ngrx/store';
import {
  getDictionaryDynamicProperty_dynamicProperty_dictionaryItems_items,
} from 'src/app/graphql/types/getDictionaryDynamicProperty';
import { Invitation } from 'src/app/models/invitation.model';
import { Member } from 'src/app/models/member.model';
import * as MemberActions from './members.actions';

export const membersFeatureKey = 'members';

export interface State {
  genderDictionaryItems: { value: string, valueId: string }[] | null,
  newMember: Member | null,
  newMemberSucceeded: boolean | null,
  invitation: Invitation | null,
  invitationSucceeded: boolean | null
}

export const initialState: State = {
  genderDictionaryItems: null,
  newMember: null,
  newMemberSucceeded: null,
  invitation: null,
  invitationSucceeded: null,
};

export const reducer = createReducer(
  initialState,

  on(MemberActions.getGenderDictionaryItems, (state): State => state),
  on(MemberActions.getGenderDictionaryItemsSuccess, (state, action): State => ({
    ...state,
    genderDictionaryItems: action.data.dynamicProperty?.dictionaryItems?.items
      ?.map(item => item as getDictionaryDynamicProperty_dynamicProperty_dictionaryItems_items)
      .map(item => ({
        valueId: item.id,
        value: item.name,
      })) ?? null,
  })),
  on(MemberActions.getGenderDictionaryItemsFailure, (state): State => state),
  on(MemberActions.setNewMember, (state, action): State => ({
    ...state,
    newMember: {
      ...state.newMember,
      ...action.member,
    },
  })),
  on(MemberActions.clearNewMember, (state): State => ({
    ...state,
    newMember: null,
    newMemberSucceeded: null,
  })),
  on(MemberActions.addMember, (state): State => state),
  on(MemberActions.addMemberSuccess, (state): State => ({
    ...state,
    newMemberSucceeded: true,
  })),
  on(MemberActions.addMemberFailure, (state): State => ({
    ...state,
    newMemberSucceeded: false,
  })),
  on(MemberActions.setInvitation, (state, action): State => ({
    ...state,
    invitation: {
      ...state.invitation,
      ...action.invitation,
    },
  })),
  on(MemberActions.clearInvitation, (state): State => ({
    ...state,
    invitation: null,
    invitationSucceeded: null,
  })),
  on(MemberActions.inviteMembers, (state): State => state),
  on(MemberActions.inviteMembersSuccess, (state): State => ({
    ...state,
    invitationSucceeded: true,
  })),
  on(MemberActions.inviteMembersFailure, (state): State => ({
    ...state,
    invitationSucceeded: false,
  }))

);

