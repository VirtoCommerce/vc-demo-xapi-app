/* Tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { InputUpdateCartDynamicPropertiesType } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: updateCartDynamicProperties
// ====================================================

export interface updateCartDynamicProperties_updateCartDynamicProperties_dynamicProperties {
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
   * Value Type
   */
  readonly valueType: string | null;
}

export interface updateCartDynamicProperties_updateCartDynamicProperties {
  readonly __typename: "CartType";
  /**
   * Shopping cart Id
   */
  readonly id: string | null;
  /**
   * Cart dynamic property values
   */
  readonly dynamicProperties: ReadonlyArray<(updateCartDynamicProperties_updateCartDynamicProperties_dynamicProperties | null)> | null;
}

export interface updateCartDynamicProperties {
  readonly updateCartDynamicProperties: updateCartDynamicProperties_updateCartDynamicProperties | null;
}

export interface updateCartDynamicPropertiesVariables {
  readonly command: InputUpdateCartDynamicPropertiesType;
}
