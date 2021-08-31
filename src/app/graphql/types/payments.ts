/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: payments
// ====================================================

export interface payments_payments_items_order {
  readonly __typename: "CustomerOrderType";
  readonly number: string;
}

export interface payments_payments_items_sum {
  readonly __typename: "MoneyType";
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface payments_payments_items_price {
  readonly __typename: "MoneyType";
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface payments_payments_items {
  readonly __typename: "PaymentInType";
  readonly id: string;
  readonly number: string;
  /**
   * Associated Order
   */
  readonly order: payments_payments_items_order;
  readonly customerName: string | null;
  readonly status: string | null;
  /**
   * Payment method (gateway) code
   */
  readonly gatewayCode: string | null;
  readonly sum: payments_payments_items_sum | null;
  readonly price: payments_payments_items_price | null;
}

export interface payments_payments {
  readonly __typename: "PaymentInConnection";
  /**
   * A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead.
   */
  readonly items: ReadonlyArray<(payments_payments_items | null)> | null;
  /**
   * A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`.
   */
  readonly totalCount: number | null;
}

export interface payments {
  readonly payments: payments_payments | null;
}

export interface paymentsVariables {
  readonly after?: string | null;
  readonly first?: number | null;
  readonly filter?: string | null;
  readonly sort?: string | null;
  readonly cultureName?: string | null;
  readonly userId: string;
}
