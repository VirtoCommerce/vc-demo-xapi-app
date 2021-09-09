/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getDictionaryDynamicProperty
// ====================================================

export interface getDictionaryDynamicProperty_dynamicProperty_dictionaryItems_items {
  readonly __typename: "DictionaryItemType";
  /**
   * Name
   */
  readonly name: string;
  /**
   * Id
   */
  readonly id: string;
}

export interface getDictionaryDynamicProperty_dynamicProperty_dictionaryItems {
  readonly __typename: "DictionaryItemConnection";
  /**
   * A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } } " version should be used instead.
   */
  readonly items: ReadonlyArray<(getDictionaryDynamicProperty_dynamicProperty_dictionaryItems_items | null)> | null;
}

export interface getDictionaryDynamicProperty_dynamicProperty {
  readonly __typename: "DynamicPropertyType";
  readonly dictionaryItems: getDictionaryDynamicProperty_dynamicProperty_dictionaryItems | null;
}

export interface getDictionaryDynamicProperty {
  readonly dynamicProperty: getDictionaryDynamicProperty_dynamicProperty | null;
}

export interface getDictionaryDynamicPropertyVariables {
  readonly idOrName: string;
}
