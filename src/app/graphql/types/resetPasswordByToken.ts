/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { InputResetPasswordByTokenType } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: resetPasswordByToken
// ====================================================

export interface resetPasswordByToken_resetPasswordByToken_errors {
  readonly __typename: "IdentityErrorInfoType";
  /**
   * Error code
   */
  readonly code: string;
  /**
   * Error description
   */
  readonly description: string | null;
  /**
   * Error parameter
   */
  readonly errorParameter: number | null;
}

export interface resetPasswordByToken_resetPasswordByToken {
  readonly __typename: "CustomIdentityResultType";
  /**
   * The errors that occurred during the identity operation.
   */
  readonly errors: ReadonlyArray<(resetPasswordByToken_resetPasswordByToken_errors | null)> | null;
  readonly succeeded: boolean;
}

export interface resetPasswordByToken {
  readonly resetPasswordByToken: resetPasswordByToken_resetPasswordByToken | null;
}

export interface resetPasswordByTokenVariables {
  readonly command: InputResetPasswordByTokenType;
}
