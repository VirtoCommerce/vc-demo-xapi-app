/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { InputCreateOrganizationType } from "./../../../../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: createOrganization
// ====================================================

export interface createOrganization_createOrganization {
  readonly __typename: "Organization";
  readonly id: string;
}

export interface createOrganization {
  readonly createOrganization: createOrganization_createOrganization | null;
}

export interface createOrganizationVariables {
  readonly command: InputCreateOrganizationType;
}
