/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getOrganizations
// ====================================================

export interface getOrganizations_me_contact_organizations_items_addresses_items {
  readonly __typename: "AddressType";
  /**
   * Id
   */
  readonly id: string | null;
  /**
   * Id
   */
  readonly key: string | null;
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
   * Phone
   */
  readonly phone: string | null;
  /**
   * Email
   */
  readonly email: string | null;
  /**
   * Country code
   */
  readonly countryCode: string | null;
  /**
   * Country name
   */
  readonly countryName: string | null;
  /**
   * Postal code
   */
  readonly postalCode: string;
  /**
   * Region name
   */
  readonly regionName: string | null;
  /**
   * City
   */
  readonly city: string | null;
}

export interface getOrganizations_me_contact_organizations_items_addresses {
  readonly __typename: "AddressConnection";
  /**
   * A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead.
   */
  readonly items: ReadonlyArray<(getOrganizations_me_contact_organizations_items_addresses_items | null)> | null;
}

export interface getOrganizations_me_contact_organizations_items {
  readonly __typename: "Organization";
  readonly id: string;
  /**
   * Name
   */
  readonly name: string | null;
  readonly phones: ReadonlyArray<(string | null)> | null;
  readonly emails: ReadonlyArray<(string | null)> | null;
  /**
   * Organization status
   */
  readonly status: string | null;
  readonly addresses: getOrganizations_me_contact_organizations_items_addresses | null;
}

export interface getOrganizations_me_contact_organizations {
  readonly __typename: "OrganizationConnection";
  /**
   * A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`.
   */
  readonly totalCount: number | null;
  /**
   * A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead.
   */
  readonly items: ReadonlyArray<(getOrganizations_me_contact_organizations_items | null)> | null;
}

export interface getOrganizations_me_contact {
  readonly __typename: "ContactType";
  readonly organizations: getOrganizations_me_contact_organizations | null;
}

export interface getOrganizations_me {
  readonly __typename: "UserType";
  /**
   * The associated contact info
   */
  readonly contact: getOrganizations_me_contact | null;
}

export interface getOrganizations {
  readonly me: getOrganizations_me | null;
}

export interface getOrganizationsVariables {
  readonly count?: number | null;
  readonly cursor?: string | null;
  readonly sort?: string | null;
  readonly searchPhrase?: string | null;
}
