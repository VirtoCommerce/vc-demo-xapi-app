import { ApolloError } from '@apollo/client/errors';
import { createAction, props } from '@ngrx/store';
import { getDictionaryDynamicProperty } from 'src/app/graphql/types/getDictionaryDynamicProperty';
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
