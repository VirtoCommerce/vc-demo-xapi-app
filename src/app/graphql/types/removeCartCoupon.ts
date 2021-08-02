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

export interface removeCartCoupon_removeCoupon {
  readonly __typename: "CartType";
  readonly coupons: ReadonlyArray<(removeCartCoupon_removeCoupon_coupons | null)> | null;
}

export interface removeCartCoupon {
  readonly removeCoupon: removeCartCoupon_removeCoupon | null;
}

export interface removeCartCouponVariables {
  readonly command: InputRemoveCouponType;
}
