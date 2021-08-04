/* Tslint:disable */
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

export interface removeCartCoupon_removeCoupon {
  readonly __typename: "CartType";
  readonly coupons: ReadonlyArray<(removeCartCoupon_removeCoupon_coupons | null)> | null;
  readonly subTotal: removeCartCoupon_removeCoupon_subTotal | null;
  readonly total: removeCartCoupon_removeCoupon_total | null;
  readonly discountTotal: removeCartCoupon_removeCoupon_discountTotal | null;
  readonly taxTotal: removeCartCoupon_removeCoupon_taxTotal | null;
  readonly shippingTotal: removeCartCoupon_removeCoupon_shippingTotal | null;
}

export interface removeCartCoupon {
  readonly removeCoupon: removeCartCoupon_removeCoupon | null;
}

export interface removeCartCouponVariables {
  readonly command: InputRemoveCouponType;
}
