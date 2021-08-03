/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { InputAddItemsType } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: addItemsCart
// ====================================================

export interface addItemsCart_addItemsCart_items {
  readonly __typename: "LineItemType";
  /**
   * Line item id
   */
  readonly id: string;
}

export interface addItemsCart_addItemsCart {
  readonly __typename: "CartType";
  /**
   * Shopping cart Id
   */
  readonly id: string | null;
  /**
   * Shopping cart user id
   */
  readonly customerId: string | null;
  readonly items: ReadonlyArray<(addItemsCart_addItemsCart_items | null)> | null;
}

export interface addItemsCart {
  readonly addItemsCart: addItemsCart_addItemsCart | null;
}

export interface addItemsCartVariables {
  readonly command: InputAddItemsType;
}
