/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { InputChangeCartItemQuantityType } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: changeCartItemQuantity
// ====================================================

export interface changeCartItemQuantity_changeCartItemQuantity_subTotal {
  readonly __typename: "MoneyType";
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface changeCartItemQuantity_changeCartItemQuantity_total {
  readonly __typename: "MoneyType";
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface changeCartItemQuantity_changeCartItemQuantity_discountTotal {
  readonly __typename: "MoneyType";
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface changeCartItemQuantity_changeCartItemQuantity_taxTotal {
  readonly __typename: "MoneyType";
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface changeCartItemQuantity_changeCartItemQuantity_shippingTotal {
  readonly __typename: "MoneyType";
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface changeCartItemQuantity_changeCartItemQuantity_items_dynamicProperties {
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

export interface changeCartItemQuantity_changeCartItemQuantity_items_extendedPrice {
  readonly __typename: "MoneyType";
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface changeCartItemQuantity_changeCartItemQuantity_items_placedPrice {
  readonly __typename: "MoneyType";
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface changeCartItemQuantity_changeCartItemQuantity_items {
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
  readonly dynamicProperties: ReadonlyArray<(changeCartItemQuantity_changeCartItemQuantity_items_dynamicProperties | null)> | null;
  readonly extendedPrice: changeCartItemQuantity_changeCartItemQuantity_items_extendedPrice | null;
  readonly placedPrice: changeCartItemQuantity_changeCartItemQuantity_items_placedPrice | null;
}

export interface changeCartItemQuantity_changeCartItemQuantity_gifts {
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

export interface changeCartItemQuantity_changeCartItemQuantity_availableGifts {
  readonly __typename: "GiftItemType";
  /**
   * Value of line item name
   */
  readonly name: string | null;
  /**
   * Value of product id
   */
  readonly productId: string | null;
  /**
   * Value of line item image absolute URL
   */
  readonly imageUrl: string | null;
}

export interface changeCartItemQuantity_changeCartItemQuantity {
  readonly __typename: "CartType";
  /**
   * Shopping cart Id
   */
  readonly id: string | null;
  /**
   * Shopping cart user id
   */
  readonly customerId: string | null;
  readonly subTotal: changeCartItemQuantity_changeCartItemQuantity_subTotal | null;
  readonly total: changeCartItemQuantity_changeCartItemQuantity_total | null;
  readonly discountTotal: changeCartItemQuantity_changeCartItemQuantity_discountTotal | null;
  readonly taxTotal: changeCartItemQuantity_changeCartItemQuantity_taxTotal | null;
  readonly shippingTotal: changeCartItemQuantity_changeCartItemQuantity_shippingTotal | null;
  readonly items: ReadonlyArray<(changeCartItemQuantity_changeCartItemQuantity_items | null)> | null;
  readonly gifts: ReadonlyArray<(changeCartItemQuantity_changeCartItemQuantity_gifts | null)> | null;
  readonly availableGifts: ReadonlyArray<(changeCartItemQuantity_changeCartItemQuantity_availableGifts | null)> | null;
}

export interface changeCartItemQuantity {
  readonly changeCartItemQuantity: changeCartItemQuantity_changeCartItemQuantity | null;
}

export interface changeCartItemQuantityVariables {
  readonly command: InputChangeCartItemQuantityType;
}
