/* Tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getDictionaryDynamicPropery
// ====================================================

export interface getDictionaryDynamicPropery_dynamicProperty_dictionaryItems_items {
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

export interface getDictionaryDynamicPropery_dynamicProperty_dictionaryItems {
  readonly __typename: "DictionaryItemConnection";
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for "{
   * edges { node } }" when no edge data is needed, this field can be used instead.
   * Note that when clients like Relay need to fetch the "cursor" field on the edge
   * to enable efficient pagination, this shortcut cannot be used, and the full "{
   * edges { node } } " version should be used instead.
   */
  readonly items: ReadonlyArray<(getDictionaryDynamicPropery_dynamicProperty_dictionaryItems_items | null)> | null;
}

export interface getDictionaryDynamicPropery_dynamicProperty {
  readonly __typename: "DynamicPropertyType";
  readonly dictionaryItems: getDictionaryDynamicPropery_dynamicProperty_dictionaryItems | null;
}

export interface getDictionaryDynamicPropery {
  readonly dynamicProperty: getDictionaryDynamicPropery_dynamicProperty | null;
}

export interface getDictionaryDynamicProperyVariables {
  readonly idOrName: string;
}
