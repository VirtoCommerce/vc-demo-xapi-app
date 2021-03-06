/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { InputUpdateCartItemDynamicPropertiesType } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: updateCartItemDynamicProperties
// ====================================================

export interface updateCartItemDynamicProperties_updateCartItemDynamicProperties_items {
  readonly __typename: "LineItemType";
  /**
   * Line item id
   */
  readonly id: string;
  /**
   * Value of product id
   */
  readonly productId: string | null;
}

export interface updateCartItemDynamicProperties_updateCartItemDynamicProperties {
  readonly __typename: "CartType";
  /**
   * Shopping cart Id
   */
  readonly id: string | null;
  /**
   * Shopping cart user id
   */
  readonly customerId: string | null;
  readonly items: ReadonlyArray<(updateCartItemDynamicProperties_updateCartItemDynamicProperties_items | null)> | null;
}

export interface updateCartItemDynamicProperties {
  readonly updateCartItemDynamicProperties: updateCartItemDynamicProperties_updateCartItemDynamicProperties | null;
}

export interface updateCartItemDynamicPropertiesVariables {
  readonly command: InputUpdateCartItemDynamicPropertiesType;
}
