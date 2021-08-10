/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: validatePassword
// ====================================================

export interface validatePassword_validatePassword_errors {
  readonly __typename: "PasswordValidationErrorType";
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

export interface validatePassword_validatePassword {
  readonly __typename: "PasswordValidationType";
  /**
   * Validation errors
   */
  readonly errors: ReadonlyArray<(validatePassword_validatePassword_errors | null)> | null;
  /**
   * Validation result status
   */
  readonly succeeded: boolean;
}

export interface validatePassword {
  readonly validatePassword: validatePassword_validatePassword | null;
}

export interface validatePasswordVariables {
  readonly password: string;
}
