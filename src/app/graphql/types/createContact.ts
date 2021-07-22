/* Tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { InputCreateContactType } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: createContact
// ====================================================

export interface createContact_createContact {
  readonly __typename: "ContactType";
  readonly id: string;
}

export interface createContact {
  readonly createContact: createContact_createContact | null;
}

export interface createContactVariables {
  readonly command: InputCreateContactType;
}
