import { ApolloError } from '@apollo/client/errors';
import { createAction, props } from '@ngrx/store';
import { registerByInvitation_registerByInvitation_errors } from 'src/app/graphql/types/registerByInvitation';
import { CompanyMember, CompanyRegistration } from 'src/app/models/registration.model';
import { PartialDeep } from 'type-fest';

export const setCompanyRegistration = createAction(
  '[Registration] Set Company',
  props<{ data: PartialDeep<CompanyRegistration> }>()
);

export const clearCompanyRegistration = createAction(
  '[Registration] Clear Company'
);

export const registerCompany = createAction(
  '[Registration] Register Company'
);

export const registerCompanySuccess = createAction(
  '[Registration] Register Company Success',
  props<{ data: boolean | null }>()
);

export const registerCompanyFailure = createAction(
  '[Registration] Register Company Failure',
  props<{ error: ApolloError }>()
);

export const setRegistrationByInvitation = createAction(
  '[Registration] Set Registration By Invitation',
  props<{ data: PartialDeep<CompanyMember> }>()
);

export const clearRegistrationByInvitation = createAction(
  '[Registration] Clear Registration By Invitation'
);

export const registerByInvitation = createAction(
  '[Registration] Register By Invitation',
  props<{ userId: string, token: string }>()
);

export const registerByInvitationSuccess = createAction(
  '[Registration] Register By Invitation Success'
);

export const registerByInvitationFailure = createAction(
  '[Registration] Register By Invitation Failure',
  props<{
    error: ApolloError | ReadonlyArray<(registerByInvitation_registerByInvitation_errors | null)> | null | undefined
  }>()
);

