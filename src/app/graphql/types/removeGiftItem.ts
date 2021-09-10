/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { InputRejectGiftItemsType } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: removeGiftItem
// ====================================================

export interface removeGiftItem_rejectItem_gifts {
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

export interface removeGiftItem_rejectItem {
  readonly __typename: "CartType";
  readonly gifts: ReadonlyArray<(removeGiftItem_rejectItem_gifts | null)> | null;
}

export interface removeGiftItem {
  readonly rejectItem: removeGiftItem_rejectItem | null;
}

export interface removeGiftItemVariables {
  readonly command: InputRejectGiftItemsType;
}
