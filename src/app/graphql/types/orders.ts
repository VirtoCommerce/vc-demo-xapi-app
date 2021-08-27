/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: orders
// ====================================================

export interface orders_orders_items_dynamicProperties {
  readonly __typename: "DynamicPropertyValueType";
  /**
   * Property Name
   */
  readonly name: string | null;
  /**
   * Property Value
   */
  readonly value: string | null;
}

export interface orders_orders_items_total {
  readonly __typename: "MoneyType";
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface orders_orders_items {
  readonly __typename: "CustomerOrderType";
  readonly id: string;
  readonly number: string;
  /**
   * Customer order dynamic property values
   */
  readonly dynamicProperties: ReadonlyArray<(orders_orders_items_dynamicProperties | null)> | null;
  readonly createdDate: any;
  readonly status: string | null;
  readonly total: orders_orders_items_total | null;
}

export interface orders_orders {
  readonly __typename: "CustomerOrderConnection";
  /**
   * A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead.
   */
  readonly items: ReadonlyArray<(orders_orders_items | null)> | null;
  /**
   * A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`.
   */
  readonly totalCount: number | null;
}

export interface orders {
  readonly orders: orders_orders | null;
}

export interface ordersVariables {
  readonly after?: string | null;
  readonly first?: number | null;
  readonly filter?: string | null;
  readonly sort?: string | null;
  readonly cultureName?: string | null;
  readonly userId?: string | null;
}
