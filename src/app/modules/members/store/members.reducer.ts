import { createReducer, on } from '@ngrx/store';
import {
  getDictionaryDynamicPropery_dynamicProperty_dictionaryItems_items,
} from 'src/app/graphql/types/getDictionaryDynamicPropery';
import { Member } from 'src/app/models/member.model';
import * as MemberActions from './members.actions';

export const membersFeatureKey = 'members';

export interface State {
  newMember: Member | null,
  newMemberSucceeded: boolean | null,
  genderDictionaryItems: { value: string, valueId: string }[] | null
}

export const initialState: State = {
  newMember: null,
  newMemberSucceeded: null,
  genderDictionaryItems: null,
};

export const reducer = createReducer(
  initialState,

  on(MemberActions.getGender, (state): State => state),
  on(MemberActions.getGenderSuccess, (state, action): State => ({
    ...state,
    genderDictionaryItems: action.data.dynamicProperty?.dictionaryItems?.items
      ?.map(item => item as getDictionaryDynamicPropery_dynamicProperty_dictionaryItems_items)
      .map(item => ({
        valueId: item.id,
        value: item.name,
      })) ?? null,
  })),
  on(MemberActions.getGenderFailure, (state): State => state),
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
  }))

);

