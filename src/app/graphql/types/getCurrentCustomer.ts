/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getCurrentCustomer
// ====================================================

export interface getCurrentCustomer_me_contact_organizations_items {
  readonly __typename: "Organization";
  readonly id: string;
  /**
   * Name
   */
  readonly name: string | null;
}

export interface getCurrentCustomer_me_contact_organizations {
  readonly __typename: "OrganizationConnection";
  /**
   * A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead.
   */
  readonly items: ReadonlyArray<(getCurrentCustomer_me_contact_organizations_items | null)> | null;
}

export interface getCurrentCustomer_me_contact {
  readonly __typename: "ContactType";
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly fullName: string;
  readonly organizations: getCurrentCustomer_me_contact_organizations | null;
}

export interface getCurrentCustomer_me {
  readonly __typename: "UserType";
  readonly id: string;
  readonly userName: string;
  /**
   * The associated contact info
   */
  readonly contact: getCurrentCustomer_me_contact | null;
}

export interface getCurrentCustomer {
  readonly me: getCurrentCustomer_me | null;
}
