import { ApolloError } from '@apollo/client/errors';
import { createAction, props } from '@ngrx/store';
import { Company } from './company.payload';
import { PartialDeep } from 'type-fest';

export const setCompany = createAction(
  '[Company] Set Company',
  props<{ data: PartialDeep<Company> }>()
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
