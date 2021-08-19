/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { InputAddItemType } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: addItem
// ====================================================

export interface addItem_addItem_subTotal {
  readonly __typename: "MoneyType";
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface addItem_addItem_total {
  readonly __typename: "MoneyType";
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface addItem_addItem_discountTotal {
  readonly __typename: "MoneyType";
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface addItem_addItem_taxTotal {
  readonly __typename: "MoneyType";
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface addItem_addItem_shippingTotal {
  readonly __typename: "MoneyType";
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface addItem_addItem_items_dynamicProperties {
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

export interface addItem_addItem_items_extendedPrice {
  readonly __typename: "MoneyType";
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface addItem_addItem_items_placedPrice {
  readonly __typename: "MoneyType";
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface addItem_addItem_items {
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
   * flag of line item is a gift
   */
  readonly isGift: boolean | null;
  /**
   * Cart line item dynamic property values
   */
  readonly dynamicProperties: ReadonlyArray<(addItem_addItem_items_dynamicProperties | null)> | null;
  readonly extendedPrice: addItem_addItem_items_extendedPrice | null;
  readonly placedPrice: addItem_addItem_items_placedPrice | null;
}

export interface addItem_addItem_availableGifts {
  readonly __typename: "GiftItemType";
  /**
   * Associated product name
   */
  readonly name: string;
  /**
   * Product id
   */
  readonly productId: string;
  /**
   * Product image absolute URL
   */
  readonly imageUrl: string | null;
  /**
   * Flag whether this gift was added into cart
   */
  readonly isAccepted: boolean;
}

export interface addItem_addItem {
  readonly __typename: "CartType";
  readonly subTotal: addItem_addItem_subTotal | null;
  readonly total: addItem_addItem_total | null;
  readonly discountTotal: addItem_addItem_discountTotal | null;
  readonly taxTotal: addItem_addItem_taxTotal | null;
  readonly shippingTotal: addItem_addItem_shippingTotal | null;
  readonly items: ReadonlyArray<(addItem_addItem_items | null)> | null;
  readonly availableGifts: ReadonlyArray<(addItem_addItem_availableGifts | null)> | null;
}

export interface addItem {
  readonly addItem: addItem_addItem | null;
}

export interface addItemVariables {
  readonly command: InputAddItemType;
}
