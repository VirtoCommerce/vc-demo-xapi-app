import { ApolloError } from '@apollo/client/errors';
import { createAction, props } from '@ngrx/store';
import { CompanyRegistration } from 'src/app/models/company-registration.model';
import { PartialDeep } from 'type-fest';

export const setCompany = createAction(
  '[Company] Set Company',
  props<{ data: PartialDeep<CompanyRegistration> }>()
);

export const clearCompany = createAction(
  '[Company] Clear Company'
);

export const registerCompany = createAction(
  '[Company] Register Company'
);

export const registerCompanySuccess = createAction(
  '[Company] Register Company Success',
  props<{ data: boolean | null }>()
);

export const registerCompanyFailure = createAction(
  '[Company] Register Company Failure',
  props<{ error: ApolloError }>()
);
