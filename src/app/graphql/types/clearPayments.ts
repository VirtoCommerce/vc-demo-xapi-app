/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { InputClearPaymentsType } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: clearPayments
// ====================================================

export interface clearPayments_clearPayments {
  readonly __typename: "CartType";
  /**
   * Shopping cart Id
   */
  readonly id: string | null;
  /**
   * Shopping cart user id
   */
  readonly customerId: string | null;
}

export interface clearPayments {
  readonly clearPayments: clearPayments_clearPayments | null;
}

export interface clearPaymentsVariables {
  readonly command: InputClearPaymentsType;
}
