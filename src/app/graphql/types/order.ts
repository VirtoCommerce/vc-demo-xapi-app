/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: order
// ====================================================

export interface order_order_subTotal {
  readonly __typename: "MoneyType";
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface order_order_total {
  readonly __typename: "MoneyType";
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface order_order_discountTotal {
  readonly __typename: "MoneyType";
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface order_order_taxTotal {
  readonly __typename: "MoneyType";
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface order_order_shippingTotal {
  readonly __typename: "MoneyType";
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface order_order_items_dynamicProperties {
  readonly __typename: "DynamicPropertyValueType";
  /**
   * Property Name
   */
  readonly name: string | null;
  /**
   * Property Value
   */
  readonly value: string | null;
  /**
   * Value Type
   */
  readonly valueType: string | null;
}

export interface order_order_items_extendedPrice {
  readonly __typename: "MoneyType";
  /**
   * A decimal with the amount rounded to the significant number of decimal digits.
   */
  readonly amount: any;
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface order_order_items_placedPrice {
  readonly __typename: "MoneyType";
  /**
   * A decimal with the amount rounded to the significant number of decimal digits.
   */
  readonly amount: any;
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface order_order_items {
  readonly __typename: "OrderLineItemType";
  readonly id: string;
  readonly isGift: boolean | null;
  readonly productId: string;
  readonly name: string;
  readonly sku: string;
  readonly quantity: number;
  readonly imageUrl: string | null;
  /**
   * Customer order Line item dynamic property values
   */
  readonly dynamicProperties: ReadonlyArray<(order_order_items_dynamicProperties | null)> | null;
  readonly extendedPrice: order_order_items_extendedPrice | null;
  readonly placedPrice: order_order_items_placedPrice | null;
}

export interface order_order_dynamicProperties {
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

export interface order_order_shipments_shippingMethod {
  readonly __typename: "OrderShippingMethodType";
  readonly logoUrl: string;
}

export interface order_order_shipments_price {
  readonly __typename: "MoneyType";
  /**
   * A decimal with the amount rounded to the significant number of decimal digits.
   */
  readonly amount: any;
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface order_order_shipments_discountAmount {
  readonly __typename: "MoneyType";
  /**
   * A decimal with the amount rounded to the significant number of decimal digits.
   */
  readonly amount: any;
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface order_order_shipments_total {
  readonly __typename: "MoneyType";
  /**
   * A decimal with the amount rounded to the significant number of decimal digits.
   */
  readonly amount: any;
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface order_order_shipments_deliveryAddress {
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

export interface order_order_shipments {
  readonly __typename: "OrderShipmentType";
  readonly id: string;
  readonly number: string;
  /**
   * Current shipment method code
   */
  readonly shipmentMethodCode: string | null;
  /**
   * Current shipment option code
   */
  readonly shipmentMethodOption: string | null;
  readonly shippingMethod: order_order_shipments_shippingMethod | null;
  readonly price: order_order_shipments_price | null;
  readonly discountAmount: order_order_shipments_discountAmount | null;
  readonly total: order_order_shipments_total | null;
  readonly deliveryAddress: order_order_shipments_deliveryAddress | null;
}

export interface order_order_inPayments_paymentMethod_price {
  readonly __typename: "MoneyType";
  /**
   * A decimal with the amount rounded to the significant number of decimal digits.
   */
  readonly amount: any;
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface order_order_inPayments_paymentMethod {
  readonly __typename: "OrderPaymentMethodType";
  readonly code: string;
  readonly logoUrl: string;
  readonly price: order_order_inPayments_paymentMethod_price | null;
}

export interface order_order_inPayments_billingAddress {
  readonly __typename: "AddressType";
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
  readonly addressType: number | null;
  /**
   * Line1
   */
  readonly line1: string | null;
  /**
   * Line2
   */
  readonly line2: string | null;
}

export interface order_order_inPayments {
  readonly __typename: "PaymentInType";
  readonly id: string;
  readonly number: string;
  readonly paymentMethod: order_order_inPayments_paymentMethod | null;
  readonly billingAddress: order_order_inPayments_billingAddress | null;
}

export interface order_order {
  readonly __typename: "CustomerOrderType";
  readonly id: string;
  readonly number: string;
  readonly status: string | null;
  readonly createdDate: any;
  readonly storeId: string;
  readonly customerId: string;
  readonly customerName: string | null;
  readonly comment: string | null;
  readonly subTotal: order_order_subTotal | null;
  readonly total: order_order_total | null;
  readonly discountTotal: order_order_discountTotal | null;
  readonly taxTotal: order_order_taxTotal | null;
  readonly shippingTotal: order_order_shippingTotal | null;
  readonly items: ReadonlyArray<(order_order_items | null)>;
  /**
   * Customer order dynamic property values
   */
  readonly dynamicProperties: ReadonlyArray<(order_order_dynamicProperties | null)> | null;
  readonly shipments: ReadonlyArray<(order_order_shipments | null)> | null;
  readonly inPayments: ReadonlyArray<(order_order_inPayments | null)>;
}

export interface order {
  readonly order: order_order | null;
}

export interface orderVariables {
  readonly number?: string | null;
  readonly cultureName?: string | null;
}
