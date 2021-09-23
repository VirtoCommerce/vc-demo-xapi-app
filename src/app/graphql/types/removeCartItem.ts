/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { InputRemoveItemType } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: removeCartItem
// ====================================================

export interface removeCartItem_removeCartItem_subTotal {
  readonly __typename: "MoneyType";
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface removeCartItem_removeCartItem_total {
  readonly __typename: "MoneyType";
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface removeCartItem_removeCartItem_discountTotal {
  readonly __typename: "MoneyType";
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface removeCartItem_removeCartItem_taxTotal {
  readonly __typename: "MoneyType";
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface removeCartItem_removeCartItem_shippingTotal {
  readonly __typename: "MoneyType";
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface removeCartItem_removeCartItem_items_dynamicProperties {
  readonly __typename: "DynamicPropertyValueType";
  /**
   * Property Name
   */
  readonly name: string | null;
  /**
   * Property Value
   */
  readonly value: string | null;
  /**
   * Value Type
   */
  readonly valueType: string | null;
}

export interface removeCartItem_removeCartItem_items_extendedPrice {
  readonly __typename: "MoneyType";
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface removeCartItem_removeCartItem_items_placedPrice {
  readonly __typename: "MoneyType";
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface removeCartItem_removeCartItem_items {
  readonly __typename: "LineItemType";
  /**
   * Line item id
   */
  readonly id: string;
  /**
   * Value of product id
   */
  readonly productId: string | null;
  /**
   * Value of line item name
   */
  readonly name: string | null;
  /**
   * Value of product SKU
   */
  readonly sku: string | null;
  /**
   * Value of line item quantity
   */
  readonly quantity: number | null;
  /**
   * Value of line item image absolute URL
   */
  readonly imageUrl: string | null;
  /**
   * Cart line item dynamic property values
   */
  readonly dynamicProperties: ReadonlyArray<(removeCartItem_removeCartItem_items_dynamicProperties | null)> | null;
  readonly extendedPrice: removeCartItem_removeCartItem_items_extendedPrice | null;
  readonly placedPrice: removeCartItem_removeCartItem_items_placedPrice | null;
}

export interface removeCartItem_removeCartItem_availableGifts {
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

export interface removeCartItem_removeCartItem {
  readonly __typename: "CartType";
  /**
   * Shopping cart Id
   */
  readonly id: string | null;
  /**
   * Shopping cart user id
   */
  readonly customerId: string | null;
  readonly subTotal: removeCartItem_removeCartItem_subTotal | null;
  readonly total: removeCartItem_removeCartItem_total | null;
  readonly discountTotal: removeCartItem_removeCartItem_discountTotal | null;
  readonly taxTotal: removeCartItem_removeCartItem_taxTotal | null;
  readonly shippingTotal: removeCartItem_removeCartItem_shippingTotal | null;
  readonly items: ReadonlyArray<(removeCartItem_removeCartItem_items | null)> | null;
  /**
   * Available Gifts
   */
  readonly availableGifts: ReadonlyArray<(removeCartItem_removeCartItem_availableGifts | null)> | null;
}

export interface removeCartItem {
  readonly removeCartItem: removeCartItem_removeCartItem | null;
}

export interface removeCartItemVariables {
  readonly command: InputRemoveItemType;
}
