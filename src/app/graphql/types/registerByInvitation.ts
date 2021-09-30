/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { InputRegisterByInvitationType } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: registerByInvitation
// ====================================================

export interface registerByInvitation_registerByInvitation_errors {
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

export interface registerByInvitation_registerByInvitation {
  readonly __typename: "CustomIdentityResultType";
  readonly succeeded: boolean;
  /**
   * The errors that occurred during the identity operation.
   */
  readonly errors: ReadonlyArray<(registerByInvitation_registerByInvitation_errors | null)> | null;
}

export interface registerByInvitation {
  readonly registerByInvitation: registerByInvitation_registerByInvitation | null;
}

export interface registerByInvitationVariables {
  readonly command: InputRegisterByInvitationType;
}
