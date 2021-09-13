import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromMembers from './members.reducer';

export const selectMembersState = createFeatureSelector<fromMembers.State>(
  fromMembers.membersFeatureKey
);

export const selectNewMemberState = createSelector(
  selectMembersState,
  (state: fromMembers.State) => state.newMember
);

export const selectGenderDictionaryItems = createSelector(
  selectMembersState,
  (state: fromMembers.State) => state.genderDictionaryItems
);
