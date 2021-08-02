/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { InputCreateUserType } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: createUser
// ====================================================

export interface createUser_createUser {
  readonly __typename: "IdentityResultType";
  readonly succeeded: boolean;
}

export interface createUser {
  readonly createUser: createUser_createUser | null;
}

export interface createUserVariables {
  readonly command: InputCreateUserType;
}
