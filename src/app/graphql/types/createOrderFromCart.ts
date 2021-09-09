/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { InputCreateOrderFromCartType } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: createOrderFromCart
// ====================================================

export interface createOrderFromCart_createOrderFromCart {
  readonly __typename: "CustomerOrderType";
  readonly id: string;
  readonly number: string;
}

export interface createOrderFromCart {
  readonly createOrderFromCart: createOrderFromCart_createOrderFromCart | null;
}

export interface createOrderFromCartVariables {
  readonly command: InputCreateOrderFromCartType;
}
