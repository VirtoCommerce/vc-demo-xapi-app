/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { InputAddOrUpdateCartShipmentType } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: addOrUpdateCartShipment
// ====================================================

export interface addOrUpdateCartShipment_addOrUpdateCartShipment_shipments_deliveryAddress {
  readonly __typename: "AddressType";
  readonly addressType: number | null;
  /**
   * First name
   */
  readonly firstName: string | null;
  /**
   * Last name
   */
  readonly lastName: string | null;
  /**
   * Email
   */
  readonly email: string | null;
  /**
   * Phone
   */
  readonly phone: string | null;
  /**
   * Country code
   */
  readonly countryCode: string | null;
  /**
   * Country name
   */
  readonly countryName: string | null;
  /**
   * Region id
   */
  readonly regionId: string | null;
  /**
   * City
   */
  readonly city: string | null;
  /**
   * Postal code
   */
  readonly postalCode: string;
  /**
   * Line1
   */
  readonly line1: string | null;
  /**
   * Line2
   */
  readonly line2: string | null;
}

export interface addOrUpdateCartShipment_addOrUpdateCartShipment_shipments {
  readonly __typename: "ShipmentType";
  /**
   * Shipment Id
   */
  readonly id: string | null;
  readonly deliveryAddress: addOrUpdateCartShipment_addOrUpdateCartShipment_shipments_deliveryAddress | null;
}

export interface addOrUpdateCartShipment_addOrUpdateCartShipment {
  readonly __typename: "CartType";
  readonly shipments: ReadonlyArray<(addOrUpdateCartShipment_addOrUpdateCartShipment_shipments | null)> | null;
}

export interface addOrUpdateCartShipment {
  readonly addOrUpdateCartShipment: addOrUpdateCartShipment_addOrUpdateCartShipment | null;
}

export interface addOrUpdateCartShipmentVariables {
  readonly command: InputAddOrUpdateCartShipmentType;
}
