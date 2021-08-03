/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getCountries
// ====================================================

export interface getCountries_countries {
  readonly __typename: "CountryType";
  /**
   * Code of country. For example 'USA'.
   */
  readonly id: string;
  /**
   * Name of country. For example 'United States of America'.
   */
  readonly name: string;
}

export interface getCountries {
  readonly countries: ReadonlyArray<(getCountries_countries | null)> | null;
}
