/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { InputUpdateMemberAddressType } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: updateMemberAddresses
// ====================================================

export interface updateMemberAddresses_updateMemberAddresses_addresses {
  readonly __typename: "AddressType";
  /**
   * Id
   */
  readonly key: string | null;
  /**
   * Line1
   */
  readonly line1: string | null;
}

export interface updateMemberAddresses_updateMemberAddresses {
  readonly __typename: "MemberType";
  readonly memberType: string;
  readonly addresses: ReadonlyArray<(updateMemberAddresses_updateMemberAddresses_addresses | null)> | null;
}

export interface updateMemberAddresses {
  readonly updateMemberAddresses: updateMemberAddresses_updateMemberAddresses | null;
}

export interface updateMemberAddressesVariables {
  readonly command: InputUpdateMemberAddressType;
}
