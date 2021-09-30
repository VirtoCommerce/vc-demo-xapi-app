import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromMembers from './members.reducer';

export const selectMembersState = createFeatureSelector<fromMembers.State>(
  fromMembers.membersFeatureKey
);

export const selectGenderDictionaryItems = createSelector(
  selectMembersState,
  (state: fromMembers.State) => state.genderDictionaryItems
);

export const selectMembers = createSelector(
  selectMembersState,
  (state: fromMembers.State) => state.members
);

export const membersCount = createSelector(
  selectMembersState,
  (state: fromMembers.State) => state.membersCount
);

export const selectInvitation = createSelector(
  selectMembersState,
  (state: fromMembers.State) => state.invitation
);

export const selectInvitationError = createSelector(
  selectMembersState,
  (state: fromMembers.State) => state.invitationError
);
