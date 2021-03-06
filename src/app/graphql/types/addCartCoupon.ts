/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { InputAddCouponType } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: addCartCoupon
// ====================================================

export interface addCartCoupon_addCoupon_coupons {
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

export interface addCartCoupon_addCoupon_items_extendedPrice {
  readonly __typename: "MoneyType";
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface addCartCoupon_addCoupon_items_placedPrice {
  readonly __typename: "MoneyType";
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface addCartCoupon_addCoupon_items {
  readonly __typename: "LineItemType";
  /**
   * Line item id
   */
  readonly id: string;
  readonly extendedPrice: addCartCoupon_addCoupon_items_extendedPrice | null;
  readonly placedPrice: addCartCoupon_addCoupon_items_placedPrice | null;
}

export interface addCartCoupon_addCoupon_subTotal {
  readonly __typename: "MoneyType";
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface addCartCoupon_addCoupon_total {
  readonly __typename: "MoneyType";
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface addCartCoupon_addCoupon_discountTotal {
  readonly __typename: "MoneyType";
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface addCartCoupon_addCoupon_taxTotal {
  readonly __typename: "MoneyType";
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface addCartCoupon_addCoupon_shippingTotal {
  readonly __typename: "MoneyType";
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface addCartCoupon_addCoupon_availableGifts {
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

export interface addCartCoupon_addCoupon {
  readonly __typename: "CartType";
  readonly coupons: ReadonlyArray<(addCartCoupon_addCoupon_coupons | null)> | null;
  readonly items: ReadonlyArray<(addCartCoupon_addCoupon_items | null)> | null;
  readonly subTotal: addCartCoupon_addCoupon_subTotal | null;
  readonly total: addCartCoupon_addCoupon_total | null;
  readonly discountTotal: addCartCoupon_addCoupon_discountTotal | null;
  readonly taxTotal: addCartCoupon_addCoupon_taxTotal | null;
  readonly shippingTotal: addCartCoupon_addCoupon_shippingTotal | null;
  /**
   * Available Gifts
   */
  readonly availableGifts: ReadonlyArray<(addCartCoupon_addCoupon_availableGifts | null)> | null;
}

export interface addCartCoupon {
  readonly addCoupon: addCartCoupon_addCoupon | null;
}

export interface addCartCouponVariables {
  readonly command: InputAddCouponType;
}
