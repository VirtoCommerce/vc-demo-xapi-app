/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { InputRemoveCouponType } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: removeCartCoupon
// ====================================================

export interface removeCartCoupon_removeCoupon_coupons {
  readonly __typename: "CouponType";
  /**
   * Coupon code
   */
  readonly code: string | null;
  /**
   * Is coupon was applied successfully
   */
  readonly isAppliedSuccessfully: boolean | null;
}

export interface removeCartCoupon_removeCoupon_items_extendedPrice {
  readonly __typename: "MoneyType";
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface removeCartCoupon_removeCoupon_items_placedPrice {
  readonly __typename: "MoneyType";
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface removeCartCoupon_removeCoupon_items {
  readonly __typename: "LineItemType";
  /**
   * Line item id
   */
  readonly id: string;
  readonly extendedPrice: removeCartCoupon_removeCoupon_items_extendedPrice | null;
  readonly placedPrice: removeCartCoupon_removeCoupon_items_placedPrice | null;
}

export interface removeCartCoupon_removeCoupon_subTotal {
  readonly __typename: "MoneyType";
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface removeCartCoupon_removeCoupon_total {
  readonly __typename: "MoneyType";
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface removeCartCoupon_removeCoupon_discountTotal {
  readonly __typename: "MoneyType";
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface removeCartCoupon_removeCoupon_taxTotal {
  readonly __typename: "MoneyType";
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface removeCartCoupon_removeCoupon_shippingTotal {
  readonly __typename: "MoneyType";
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface removeCartCoupon_removeCoupon_availableGifts {
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

export interface removeCartCoupon_removeCoupon {
  readonly __typename: "CartType";
  readonly coupons: ReadonlyArray<(removeCartCoupon_removeCoupon_coupons | null)> | null;
  readonly items: ReadonlyArray<(removeCartCoupon_removeCoupon_items | null)> | null;
  readonly subTotal: removeCartCoupon_removeCoupon_subTotal | null;
  readonly total: removeCartCoupon_removeCoupon_total | null;
  readonly discountTotal: removeCartCoupon_removeCoupon_discountTotal | null;
  readonly taxTotal: removeCartCoupon_removeCoupon_taxTotal | null;
  readonly shippingTotal: removeCartCoupon_removeCoupon_shippingTotal | null;
  /**
   * Available Gifts
   */
  readonly availableGifts: ReadonlyArray<(removeCartCoupon_removeCoupon_availableGifts | null)> | null;
}

export interface removeCartCoupon {
  readonly removeCoupon: removeCartCoupon_removeCoupon | null;
}

export interface removeCartCouponVariables {
  readonly command: InputRemoveCouponType;
}
