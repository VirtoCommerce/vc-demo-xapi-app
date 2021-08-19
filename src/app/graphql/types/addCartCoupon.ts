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

export interface addCartCoupon_addCoupon {
  readonly __typename: "CartType";
  readonly coupons: ReadonlyArray<(addCartCoupon_addCoupon_coupons | null)> | null;
  readonly subTotal: addCartCoupon_addCoupon_subTotal | null;
  readonly total: addCartCoupon_addCoupon_total | null;
  readonly discountTotal: addCartCoupon_addCoupon_discountTotal | null;
  readonly taxTotal: addCartCoupon_addCoupon_taxTotal | null;
  readonly shippingTotal: addCartCoupon_addCoupon_shippingTotal | null;
  readonly availableGifts: ReadonlyArray<(addCartCoupon_addCoupon_availableGifts | null)> | null;
}

export interface addCartCoupon {
  readonly addCoupon: addCartCoupon_addCoupon | null;
}

export interface addCartCouponVariables {
  readonly command: InputAddCouponType;
}
