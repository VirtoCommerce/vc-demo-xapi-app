import { ApolloError } from '@apollo/client/errors';
import { createAction, props } from '@ngrx/store';
import { getDictionaryDynamicPropery } from 'src/app/graphql/types/getDictionaryDynamicPropery';
import { Member } from 'src/app/models/member.model';

export const getGender = createAction(
  '[Member] Get Gender'
);

export const getGenderSuccess = createAction(
  '[Member] Get Gender Success',
  props<{ data: getDictionaryDynamicPropery }>()
);

export const getGenderFailure = createAction(
  '[Member] Get Gender Failure',
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
