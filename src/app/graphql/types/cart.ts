/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: cart
// ====================================================

export interface cart_cart_subTotal {
  readonly __typename: "MoneyType";
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface cart_cart_total {
  readonly __typename: "MoneyType";
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface cart_cart_discountTotal {
  readonly __typename: "MoneyType";
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface cart_cart_taxTotal {
  readonly __typename: "MoneyType";
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface cart_cart_shippingTotal {
  readonly __typename: "MoneyType";
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface cart_cart_items_extendedPrice {
  readonly __typename: "MoneyType";
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface cart_cart_items_placedPrice {
  readonly __typename: "MoneyType";
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface cart_cart_items {
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
  readonly extendedPrice: cart_cart_items_extendedPrice | null;
  readonly placedPrice: cart_cart_items_placedPrice | null;
}

export interface cart_cart {
  readonly __typename: "CartType";
  /**
   * Shopping cart Id
   */
  readonly id: string | null;
  /**
   * Shopping cart user id
   */
  readonly customerId: string | null;
  /**
   * Shopping cart text comment
   */
  readonly comment: string | null;
  readonly subTotal: cart_cart_subTotal | null;
  readonly total: cart_cart_total | null;
  readonly discountTotal: cart_cart_discountTotal | null;
  readonly taxTotal: cart_cart_taxTotal | null;
  readonly shippingTotal: cart_cart_shippingTotal | null;
  readonly items: ReadonlyArray<(cart_cart_items | null)> | null;
}

export interface cart {
  readonly cart: cart_cart | null;
}

export interface cartVariables {
  readonly storeId: string;
  readonly userId?: string | null;
  readonly currencyCode: string;
  readonly cultureName?: string | null;
  readonly cartName?: string | null;
}
