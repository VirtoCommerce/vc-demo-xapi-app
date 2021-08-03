/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { InputUpdateMemberDynamicPropertiesType } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: updateMemberDynamicProperties
// ====================================================

export interface updateMemberDynamicProperties_updateMemberDynamicProperties {
  readonly __typename: "MemberType";
  readonly name: string | null;
}

export interface updateMemberDynamicProperties {
  readonly updateMemberDynamicProperties: updateMemberDynamicProperties_updateMemberDynamicProperties | null;
}

export interface updateMemberDynamicPropertiesVariables {
  readonly command: InputUpdateMemberDynamicPropertiesType;
}
