/* Tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { InputClearCartType } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: clearCart
// ====================================================

export interface clearCart_clearCart {
  readonly __typename: "CartType";
  /**
   * Shopping cart Id
   */
  readonly id: string | null;
}

export interface clearCart {
  readonly clearCart: clearCart_clearCart | null;
}

export interface clearCartVariables {
  readonly command: InputClearCartType;
}
