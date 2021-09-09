/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { InputAddOrUpdateCartPaymentType } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: addOrUpdateCartPayment
// ====================================================

export interface addOrUpdateCartPayment_addOrUpdateCartPayment_payments_billingAddress {
  readonly __typename: "AddressType";
  readonly addressType: number | null;
  /**
   * First name
   */
  readonly firstName: string | null;
  /**
   * Last name
   */
  readonly lastName: string | null;
  /**
   * Email
   */
  readonly email: string | null;
  /**
   * Phone
   */
  readonly phone: string | null;
  /**
   * Country code
   */
  readonly countryCode: string | null;
  /**
   * Country name
   */
  readonly countryName: string | null;
  /**
   * Region id
   */
  readonly regionId: string | null;
  /**
   * City
   */
  readonly city: string | null;
  /**
   * Postal code
   */
  readonly postalCode: string;
  /**
   * Line1
   */
  readonly line1: string | null;
  /**
   * Line2
   */
  readonly line2: string | null;
}

export interface addOrUpdateCartPayment_addOrUpdateCartPayment_payments {
  readonly __typename: "PaymentType";
  /**
   * Payment Id
   */
  readonly id: string | null;
  /**
   * Value of payment gateway code
   */
  readonly paymentGatewayCode: string | null;
  readonly billingAddress: addOrUpdateCartPayment_addOrUpdateCartPayment_payments_billingAddress | null;
}

export interface addOrUpdateCartPayment_addOrUpdateCartPayment {
  readonly __typename: "CartType";
  readonly payments: ReadonlyArray<(addOrUpdateCartPayment_addOrUpdateCartPayment_payments | null)> | null;
}

export interface addOrUpdateCartPayment {
  readonly addOrUpdateCartPayment: addOrUpdateCartPayment_addOrUpdateCartPayment | null;
}

export interface addOrUpdateCartPaymentVariables {
  readonly command: InputAddOrUpdateCartPaymentType;
}
