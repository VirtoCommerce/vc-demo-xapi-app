/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { InputAddGiftItemsType } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: addGiftItem
// ====================================================

export interface addGiftItem_addGiftItem_gifts {
  readonly __typename: "CartGiftItemType";
  /**
   * Line item id
   */
  readonly id: string;
  /**
   * Was the line item rejected
   */
  readonly isRejected: boolean;
  /**
   * Value of product id
   */
  readonly productId: string | null;
  /**
   * Value of line item quantity
   */
  readonly quantity: number | null;
}

export interface addGiftItem_addGiftItem {
  readonly __typename: "CartType";
  readonly gifts: ReadonlyArray<(addGiftItem_addGiftItem_gifts | null)> | null;
}

export interface addGiftItem {
  readonly addGiftItem: addGiftItem_addGiftItem | null;
}

export interface addGiftItemVariables {
  readonly command: InputAddGiftItemsType;
}
