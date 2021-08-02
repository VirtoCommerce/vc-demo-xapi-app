/* Tslint:disable */
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

export interface addCartCoupon_addCoupon {
  readonly __typename: "CartType";
  readonly coupons: ReadonlyArray<(addCartCoupon_addCoupon_coupons | null)> | null;
}

export interface addCartCoupon {
  readonly addCoupon: addCartCoupon_addCoupon | null;
}

export interface addCartCouponVariables {
  readonly command: InputAddCouponType;
}
