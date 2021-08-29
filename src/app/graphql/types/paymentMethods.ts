/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: paymentMethods
// ====================================================

export interface paymentMethods_paymentMethods_items {
  readonly __typename: "CodePaymentMethodType";
  readonly code: string;
  readonly logoUrl: string | null;
}

export interface paymentMethods_paymentMethods {
  readonly __typename: "CodePaymentMethodConnection";
  /**
   * A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead.
   */
  readonly items: ReadonlyArray<(paymentMethods_paymentMethods_items | null)> | null;
}

export interface paymentMethods {
  readonly paymentMethods: paymentMethods_paymentMethods | null;
}

export interface paymentMethodsVariables {
  readonly storeId: string;
}
