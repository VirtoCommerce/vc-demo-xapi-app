/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getOrganization
// ====================================================

export interface getOrganization_organization_dynamicProperties {
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

export interface getOrganization_organization {
  readonly __typename: "Organization";
  readonly id: string;
  /**
   * Name
   */
  readonly name: string | null;
  /**
   * Organization's dynamic property values
   */
  readonly dynamicProperties: ReadonlyArray<(getOrganization_organization_dynamicProperties | null)>;
}

export interface getOrganization {
  readonly organization: getOrganization_organization | null;
}

export interface getOrganizationVariables {
  readonly id: string;
}
