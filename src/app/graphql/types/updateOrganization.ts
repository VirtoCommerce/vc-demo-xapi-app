/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { InputUpdateOrganizationType } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: updateOrganization
// ====================================================

export interface updateOrganization_updateOrganization {
  readonly __typename: "Organization";
  readonly id: string;
  /**
   * Name
   */
  readonly name: string | null;
}

export interface updateOrganization {
  readonly updateOrganization: updateOrganization_updateOrganization | null;
}

export interface updateOrganizationVariables {
  readonly command: InputUpdateOrganizationType;
}
