/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: shippingMethods
// ====================================================

export interface shippingMethods_shippingMethods_items {
  readonly __typename: "CoreShippingMethodType";
  readonly code: string;
  readonly logoUrl: string | null;
}

export interface shippingMethods_shippingMethods {
  readonly __typename: "CoreShippingMethodConnection";
  /**
   * A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead.
   */
  readonly items: ReadonlyArray<(shippingMethods_shippingMethods_items | null)> | null;
}

export interface shippingMethods {
  readonly shippingMethods: shippingMethods_shippingMethods | null;
}

export interface shippingMethodsVariables {
  readonly storeId: string;
}
