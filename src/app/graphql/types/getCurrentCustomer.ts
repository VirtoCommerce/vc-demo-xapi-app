/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getCurrentCustomer
// ====================================================

export interface getCurrentCustomer_me_contact_organizations {
  readonly __typename: "Organization";
  readonly id: string;
  /**
   * Name
   */
  readonly name: string | null;
}

export interface getCurrentCustomer_me_contact {
  readonly __typename: "ContactType";
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly fullName: string;
  /**
   * All contact's organizations
   */
  readonly organizations: ReadonlyArray<(getCurrentCustomer_me_contact_organizations | null)> | null;
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
