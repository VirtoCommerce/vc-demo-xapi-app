/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { InputInviteUserType } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: inviteMembers
// ====================================================

export interface inviteMembers_inviteUser_errors {
  readonly __typename: "IdentityErrorInfoType";
  /**
   * Error code
   */
  readonly code: string;
  /**
   * Error description
   */
  readonly description: string | null;
}

export interface inviteMembers_inviteUser {
  readonly __typename: "CustomIdentityResultType";
  readonly succeeded: boolean;
  /**
   * The errors that occurred during the identity operation.
   */
  readonly errors: ReadonlyArray<(inviteMembers_inviteUser_errors | null)> | null;
}

export interface inviteMembers {
  readonly inviteUser: inviteMembers_inviteUser | null;
}

export interface inviteMembersVariables {
  readonly command: InputInviteUserType;
}
