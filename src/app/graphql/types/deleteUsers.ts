/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { InputDeleteUserType } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: deleteUsers
// ====================================================

export interface deleteUsers_deleteUsers {
  readonly __typename: "IdentityResultType";
  readonly succeeded: boolean;
}

export interface deleteUsers {
  readonly deleteUsers: deleteUsers_deleteUsers | null;
}

export interface deleteUsersVariables {
  readonly command: InputDeleteUserType;
}
