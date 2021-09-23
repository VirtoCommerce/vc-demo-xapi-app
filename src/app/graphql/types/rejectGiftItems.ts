/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { InputRejectGiftItemsType } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: rejectGiftItems
// ====================================================

export interface rejectGiftItems_rejectGiftItems_availableGifts {
  readonly __typename: "GiftItemType";
  /**
   * Artificial ID for this value object
   */
  readonly id: string;
  /**
   * Name of the reward
   */
  readonly name: string;
  /**
   * ID of lineItem if gift is in cart. Otherwise null
   */
  readonly lineItemId: string | null;
  /**
   * Product id
   */
  readonly productId: string | null;
  /**
   * Value of reward image absolute URL
   */
  readonly imageUrl: string | null;
  /**
   * Quantity of gifts in the reward
   */
  readonly quantity: number;
}

export interface rejectGiftItems_rejectGiftItems {
  readonly __typename: "CartType";
  /**
   * Available Gifts
   */
  readonly availableGifts: ReadonlyArray<(rejectGiftItems_rejectGiftItems_availableGifts | null)> | null;
}

export interface rejectGiftItems {
  readonly rejectGiftItems: rejectGiftItems_rejectGiftItems | null;
}

export interface rejectGiftItemsVariables {
  readonly command: InputRejectGiftItemsType;
}
