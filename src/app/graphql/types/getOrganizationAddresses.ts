/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getOrganizationAddresses
// ====================================================

export interface getOrganizationAddresses_organization_addresses_edges {
  readonly __typename: "AddressEdge";
  /**
   * A cursor for use in pagination
   */
  readonly cursor: string;
}

export interface getOrganizationAddresses_organization_addresses_items {
  readonly __typename: "AddressType";
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

export interface getOrganizationAddresses_organization_addresses_pageInfo {
  readonly __typename: "PageInfo";
  /**
   * When paginating forwards, the cursor to continue.
   */
  readonly endCursor: string | null;
  /**
   * When paginating forwards, are there more items?
   */
  readonly hasNextPage: boolean;
  /**
   * When paginating backwards, are there more items?
   */
  readonly hasPreviousPage: boolean;
  /**
   * When paginating backwards, the cursor to continue.
   */
  readonly startCursor: string | null;
}

export interface getOrganizationAddresses_organization_addresses {
  readonly __typename: "AddressConnection";
  /**
   * A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`.
   */
  readonly totalCount: number | null;
  /**
   * Information to aid in pagination.
   */
  readonly edges: ReadonlyArray<(getOrganizationAddresses_organization_addresses_edges | null)> | null;
  /**
   * A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead.
   */
  readonly items: ReadonlyArray<(getOrganizationAddresses_organization_addresses_items | null)> | null;
  /**
   * Information to aid in pagination.
   */
  readonly pageInfo: getOrganizationAddresses_organization_addresses_pageInfo;
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
