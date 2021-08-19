/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { InputClearShipmentsType } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: clearShipments
// ====================================================

export interface clearShipments_clearShipments {
  readonly __typename: "CartType";
  /**
   * Shopping cart Id
   */
  readonly id: string | null;
  /**
   * Shopping cart user id
   */
  readonly customerId: string | null;
}

export interface clearShipments {
  readonly clearShipments: clearShipments_clearShipments | null;
}

export interface clearShipmentsVariables {
  readonly command: InputClearShipmentsType;
}
