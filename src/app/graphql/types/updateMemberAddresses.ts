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
  /**
   * First name
   */
  readonly firstName: string | null;
  /**
   * Last name
   */
  readonly lastName: string | null;
  /**
   * Phone
   */
  readonly phone: string | null;
  /**
   * Email
   */
  readonly email: string | null;
  /**
   * Country code
   */
  readonly countryCode: string | null;
  /**
   * Country name
   */
  readonly countryName: string | null;
  /**
   * Postal code
   */
  readonly postalCode: string;
  /**
   * Region name
   */
  readonly regionName: string | null;
  /**
   * City
   */
  readonly city: string | null;
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
