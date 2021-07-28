/* Tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: cart
// ====================================================

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
   * Value of line item quantity
   */
  readonly quantity: number | null;
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
