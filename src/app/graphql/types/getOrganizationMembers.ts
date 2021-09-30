/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getOrganizationMembers
// ====================================================

export interface getOrganizationMembers_organization_contacts_items_securityAccounts {
  readonly __typename: "UserType";
  readonly email: string | null;
  /**
   * Account locked state
   */
  readonly lockedState: boolean | null;
  readonly userName: string;
}

export interface getOrganizationMembers_organization_contacts_items {
  readonly __typename: "ContactType";
  readonly id: string;
  readonly fullName: string;
  /**
   * Contact status
   */
  readonly status: string | null;
  readonly securityAccounts: ReadonlyArray<(getOrganizationMembers_organization_contacts_items_securityAccounts | null)> | null;
}

export interface getOrganizationMembers_organization_contacts {
  readonly __typename: "ContactConnection";
  /**
   * A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to `first`, then fetch the total count so it could display "5 of 83", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`.
   */
  readonly totalCount: number | null;
  /**
   * A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead.
   */
  readonly items: ReadonlyArray<(getOrganizationMembers_organization_contacts_items | null)> | null;
}

export interface getOrganizationMembers_organization {
  readonly __typename: "Organization";
  readonly id: string;
  readonly contacts: getOrganizationMembers_organization_contacts | null;
}

export interface getOrganizationMembers {
  readonly organization: getOrganizationMembers_organization | null;
}

export interface getOrganizationMembersVariables {
  readonly id: string;
  readonly after?: string | null;
  readonly first?: number | null;
  readonly searchPhrase?: string | null;
  readonly sort?: string | null;
}
