/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getOrganizationAddresses
// ====================================================

export interface getOrganizationAddresses_organization_addresses_items {
  readonly __typename: "AddressType";
  /**
   * Id
   */
  readonly id: string | null;
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

export interface getOrganizationAddresses_organization_addresses {
  readonly __typename: "AddressConnection";
  /**
   * A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`.
   */
  readonly totalCount: number | null;
  /**
   * A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead.
   */
  readonly items: ReadonlyArray<(getOrganizationAddresses_organization_addresses_items | null)> | null;
}

export interface getOrganizationAddresses_organization {
  readonly __typename: "Organization";
  readonly addresses: getOrganizationAddresses_organization_addresses | null;
}

export interface getOrganizationAddresses {
  readonly organization: getOrganizationAddresses_organization | null;
}

export interface getOrganizationAddressesVariables {
  readonly id: string;
  readonly count?: number | null;
  readonly cursor?: string | null;
  readonly sort?: string | null;
}
