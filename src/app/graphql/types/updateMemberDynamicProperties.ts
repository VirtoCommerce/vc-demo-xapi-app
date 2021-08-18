/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { InputUpdateMemberDynamicPropertiesType } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: updateMemberDynamicProperties
// ====================================================

export interface updateMemberDynamicProperties_updateMemberDynamicProperties_dynamicProperties {
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

export interface updateMemberDynamicProperties_updateMemberDynamicProperties {
  readonly __typename: "MemberType";
  readonly name: string | null;
  /**
   * Contact's dynamic property values
   */
  readonly dynamicProperties: ReadonlyArray<(updateMemberDynamicProperties_updateMemberDynamicProperties_dynamicProperties | null)>;
}

export interface updateMemberDynamicProperties {
  readonly updateMemberDynamicProperties: updateMemberDynamicProperties_updateMemberDynamicProperties | null;
}

export interface updateMemberDynamicPropertiesVariables {
  readonly command: InputUpdateMemberDynamicPropertiesType;
}
