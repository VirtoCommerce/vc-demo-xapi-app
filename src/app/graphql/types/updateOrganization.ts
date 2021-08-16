/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { InputUpdateOrganizationType } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: updateOrganization
// ====================================================

export interface updateOrganization_updateOrganization_dynamicProperties {
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

export interface updateOrganization_updateOrganization {
  readonly __typename: "Organization";
  readonly id: string;
  /**
   * Name
   */
  readonly name: string | null;
  /**
   * Organization's dynamic property values
   */
  readonly dynamicProperties: ReadonlyArray<(updateOrganization_updateOrganization_dynamicProperties | null)>;
}

export interface updateOrganization {
  readonly updateOrganization: updateOrganization_updateOrganization | null;
}

export interface updateOrganizationVariables {
  readonly command: InputUpdateOrganizationType;
}
