import { createReducer, on } from '@ngrx/store';
import {
  getDictionaryDynamicProperty_dynamicProperty_dictionaryItems_items,
} from 'src/app/graphql/types/getDictionaryDynamicProperty';
import { getOrganizationMembers } from 'src/app/graphql/types/getOrganizationMembers';
import { Member } from 'src/app/models/member.model';
import * as MemberActions from './members.actions';

export const membersFeatureKey = 'members';

export interface State {
  newMember: Member | null,
  newMemberSucceeded: boolean | null,
  genderDictionaryItems: { value: string, valueId: string }[] | null,
  members: Partial<Member>[] | null,
  membersCount: number | null,
}

export const initialState: State = {
  newMember: null,
  newMemberSucceeded: null,
  genderDictionaryItems: null,
  members: null,
  membersCount: null,
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
  on(MemberActions.getOrganizationMembers, (state): State => state),
  on(MemberActions.getOrganizationMembersSuccess, (state, action): State => ({
    ...state,
    members: mapResultToMembers(action.data) ?? null,
    membersCount: action.data.organization?.contacts?.totalCount ?? null,
  })),
  on(MemberActions.getOrganizationMembersFailure, (state): State => state)
);

function mapResultToMembers(data: getOrganizationMembers): Partial<Member>[] {
  const members = data.organization?.contacts?.items?.map(item => {
    if (item?.securityAccounts != null) {
      return {
        id: item?.id,
        fullName: item?.fullName,
        email: item?.securityAccounts[0]?.email,
        lockedState: item?.securityAccounts[0]?.lockedState ? 'Inactive' : 'Active',
      };
    }
    else {
      return {
        fullName: item?.fullName,
      };
    }
  });
  return members as Partial<Member>[];
}
