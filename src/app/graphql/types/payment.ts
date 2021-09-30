/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: payment
// ====================================================

export interface payment_payments_items_order {
  readonly __typename: "CustomerOrderType";
  readonly number: string;
  readonly customerName: string | null;
}

export interface payment_payments_items_billingAddress {
  readonly __typename: "AddressType";
  /**
   * City
   */
  readonly city: string | null;
  /**
   * Country name
   */
  readonly countryName: string | null;
  /**
   * First name
   */
  readonly firstName: string | null;
  /**
   * Last name
   */
  readonly lastName: string | null;
  /**
   * Line1
   */
  readonly line1: string | null;
  /**
   * Line2
   */
  readonly line2: string | null;
  /**
   * Name
   */
  readonly name: string | null;
  /**
   * Phone
   */
  readonly phone: string | null;
  /**
   * Postal code
   */
  readonly postalCode: string;
  /**
   * Region name
   */
  readonly regionName: string | null;
}

export interface payment_payments_items_sum {
  readonly __typename: "MoneyType";
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface payment_payments_items_price {
  readonly __typename: "MoneyType";
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface payment_payments_items_tax {
  readonly __typename: "MoneyType";
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface payment_payments_items {
  readonly __typename: "PaymentInType";
  readonly id: string;
  readonly number: string;
  /**
   * Associated Order
   */
  readonly order: payment_payments_items_order;
  readonly createdDate: any;
  readonly billingAddress: payment_payments_items_billingAddress | null;
  readonly status: string | null;
  readonly gatewayCode: string | null;
  readonly sum: payment_payments_items_sum | null;
  readonly price: payment_payments_items_price | null;
  readonly purpose: string | null;
  readonly comment: string | null;
  readonly authorizedDate: any | null;
  readonly cancelledDate: any | null;
  readonly cancelReason: string | null;
  readonly capturedDate: any | null;
  readonly outerId: string | null;
  readonly tax: payment_payments_items_tax | null;
  readonly voidedDate: any | null;
}

export interface payment_payments {
  readonly __typename: "PaymentInConnection";
  /**
   * A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead.
   */
  readonly items: ReadonlyArray<(payment_payments_items | null)> | null;
  /**
   * A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`.
   */
  readonly totalCount: number | null;
}

export interface payment {
  readonly payments: payment_payments | null;
}

export interface paymentVariables {
  readonly after?: string | null;
  readonly first?: number | null;
  readonly filter?: string | null;
  readonly sort?: string | null;
  readonly cultureName?: string | null;
  readonly userId: string;
}
