/* Tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { InputChangeCommentType } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: updateCartComment
// ====================================================

export interface updateCartComment_changeComment {
  readonly __typename: "CartType";
  /**
   * Shopping cart Id
   */
  readonly id: string | null;
  /**
   * Shopping cart text comment
   */
  readonly comment: string | null;
}

export interface updateCartComment {
  readonly changeComment: updateCartComment_changeComment | null;
}

export interface updateCartCommentVariables {
  readonly command: InputChangeCommentType;
}
