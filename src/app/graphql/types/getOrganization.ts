/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getOrganization
// ====================================================

export interface getOrganization_organization_dynamicProperties_dynamicProperty_dictionaryItems_items {
  readonly __typename: "DictionaryItemType";
  /**
   * Id
   */
  readonly id: string;
  /**
   * Name
   */
  readonly name: string;
}

export interface getOrganization_organization_dynamicProperties_dynamicProperty_dictionaryItems {
  readonly __typename: "DictionaryItemConnection";
  /**
   * A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead.
   */
  readonly items: ReadonlyArray<(getOrganization_organization_dynamicProperties_dynamicProperty_dictionaryItems_items | null)> | null;
}

export interface getOrganization_organization_dynamicProperties_dynamicProperty {
  readonly __typename: "DynamicPropertyType";
  readonly dictionaryItems: getOrganization_organization_dynamicProperties_dynamicProperty_dictionaryItems | null;
}

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
  /**
   * Associated dynamic property
   */
  readonly dynamicProperty: getOrganization_organization_dynamicProperties_dynamicProperty | null;
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
  readonly cultureName?: string | null;
}
