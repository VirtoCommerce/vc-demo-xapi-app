/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getRegions
// ====================================================

export interface getRegions_regions {
  readonly __typename: "CountryRegionType";
  /**
   * Code of country region. For example 'AL'.
   */
  readonly id: string;
  /**
   * Name of country region. For example 'Alabama'.
   */
  readonly name: string;
}

export interface getRegions {
  readonly regions: ReadonlyArray<(getRegions_regions | null)> | null;
}

export interface getRegionsVariables {
  readonly countryId: string;
}
