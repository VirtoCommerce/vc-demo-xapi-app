/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getOrganization
// ====================================================

export interface getOrganization_organization {
  readonly __typename: "Organization";
  readonly id: string;
  /**
   * Name
   */
  readonly name: string | null;
}

export interface getOrganization {
  readonly organization: getOrganization_organization | null;
}

export interface getOrganizationVariables {
  readonly id: string;
}
