/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { InputAddGiftItemsType } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: addGiftItems
// ====================================================

export interface addGiftItems_addGiftItems_availableGifts {
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

export interface addGiftItems_addGiftItems {
  readonly __typename: "CartType";
  /**
   * Available Gifts
   */
  readonly availableGifts: ReadonlyArray<(addGiftItems_addGiftItems_availableGifts | null)> | null;
}

export interface addGiftItems {
  readonly addGiftItems: addGiftItems_addGiftItems | null;
}

export interface addGiftItemsVariables {
  readonly command: InputAddGiftItemsType;
}
