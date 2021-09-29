/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getUser
// ====================================================

export interface getUser_user {
  readonly __typename: "UserType";
  readonly email: string | null;
}

export interface getUser {
  readonly user: getUser_user | null;
}

export interface getUserVariables {
  readonly id: string;
}
