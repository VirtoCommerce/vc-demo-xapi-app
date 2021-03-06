/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: cart
// ====================================================

export interface cart_cart_subTotal {
  readonly __typename: "MoneyType";
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface cart_cart_total {
  readonly __typename: "MoneyType";
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface cart_cart_discountTotal {
  readonly __typename: "MoneyType";
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface cart_cart_taxTotal {
  readonly __typename: "MoneyType";
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface cart_cart_shippingTotal {
  readonly __typename: "MoneyType";
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface cart_cart_items_dynamicProperties {
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

export interface cart_cart_items_extendedPrice {
  readonly __typename: "MoneyType";
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface cart_cart_items_placedPrice {
  readonly __typename: "MoneyType";
  /**
   * Formatted amount.
   */
  readonly formattedAmount: string;
}

export interface cart_cart_items {
  readonly __typename: "LineItemType";
  /**
   * Line item id
   */
  readonly id: string;
  /**
   * Value of product id
   */
  readonly productId: string | null;
  /**
   * Value of line item name
   */
  readonly name: string | null;
  /**
   * Value of product SKU
   */
  readonly sku: string | null;
  /**
   * Value of line item quantity
   */
  readonly quantity: number | null;
  /**
   * Value of line item image absolute URL
   */
  readonly imageUrl: string | null;
  /**
   * Cart line item dynamic property values
   */
  readonly dynamicProperties: ReadonlyArray<(cart_cart_items_dynamicProperties | null)> | null;
  readonly extendedPrice: cart_cart_items_extendedPrice | null;
  readonly placedPrice: cart_cart_items_placedPrice | null;
}

export interface cart_cart_dynamicProperties {
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

export interface cart_cart_coupons {
  readonly __typename: "CouponType";
  /**
   * Coupon code
   */
  readonly code: string | null;
  /**
   * Is coupon was applied successfully
   */
  readonly isAppliedSuccessfully: boolean | null;
}

export interface cart_cart_availableGifts {
  readonly __typename: "GiftItemType";
  /**
   * Artificial ID for this value object
   */
  readonly id: string;
  /**
   * Name of the reward
   */
  readonly name: string;
  /**
   * ID of lineItem if gift is in cart. Otherwise null
   */
  readonly lineItemId: string | null;
  /**
   * Product id
   */
  readonly productId: string | null;
  /**
   * Value of reward image absolute URL
   */
  readonly imageUrl: string | null;
  /**
   * Quantity of gifts in the reward
   */
  readonly quantity: number;
}

export interface cart_cart_availableShippingMethods_price {
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

export interface cart_cart_availableShippingMethods_discountAmount {
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

export interface cart_cart_availableShippingMethods_total {
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

export interface cart_cart_availableShippingMethods {
  readonly __typename: "ShippingMethodType";
  /**
   * Value of shipping gateway code
   */
  readonly code: string | null;
  /**
   * Value of shipping method option name
   */
  readonly optionName: string | null;
  /**
   * Value of shipping method priority
   */
  readonly priority: number | null;
  /**
   * Value of shipping method logo absolute URL
   */
  readonly logoUrl: string | null;
  readonly price: cart_cart_availableShippingMethods_price | null;
  readonly discountAmount: cart_cart_availableShippingMethods_discountAmount | null;
  readonly total: cart_cart_availableShippingMethods_total | null;
}

export interface cart_cart_availablePaymentMethods {
  readonly __typename: "PaymentMethodType";
  /**
   * Value of payment gateway code
   */
  readonly code: string | null;
  /**
   * Value of payment method name
   */
  readonly name: string | null;
  /**
   * Value of payment method type
   */
  readonly paymentMethodType: string | null;
  /**
   * Value of payment method logo absolute URL
   */
  readonly logoUrl: string | null;
  /**
   * Value of payment method priority
   */
  readonly priority: number | null;
}

export interface cart_cart_shipments_price {
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

export interface cart_cart_shipments_discountAmount {
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

export interface cart_cart_shipments_total {
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

export interface cart_cart_shipments_deliveryAddress {
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

export interface cart_cart_shipments {
  readonly __typename: "ShipmentType";
  /**
   * Shipment Id
   */
  readonly id: string | null;
  /**
   * Shipment method code
   */
  readonly shipmentMethodCode: string | null;
  /**
   * Shipment method option
   */
  readonly shipmentMethodOption: string | null;
  readonly price: cart_cart_shipments_price | null;
  readonly discountAmount: cart_cart_shipments_discountAmount | null;
  readonly total: cart_cart_shipments_total | null;
  readonly deliveryAddress: cart_cart_shipments_deliveryAddress | null;
}

export interface cart_cart_payments_billingAddress {
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

export interface cart_cart_payments {
  readonly __typename: "PaymentType";
  /**
   * Payment Id
   */
  readonly id: string | null;
  /**
   * Value of payment gateway code
   */
  readonly paymentGatewayCode: string | null;
  readonly billingAddress: cart_cart_payments_billingAddress | null;
}

export interface cart_cart {
  readonly __typename: "CartType";
  /**
   * Shopping cart Id
   */
  readonly id: string | null;
  /**
   * Shopping cart user id
   */
  readonly customerId: string | null;
  /**
   * Shopping cart text comment
   */
  readonly comment: string | null;
  readonly subTotal: cart_cart_subTotal | null;
  readonly total: cart_cart_total | null;
  readonly discountTotal: cart_cart_discountTotal | null;
  readonly taxTotal: cart_cart_taxTotal | null;
  readonly shippingTotal: cart_cart_shippingTotal | null;
  readonly items: ReadonlyArray<(cart_cart_items | null)> | null;
  /**
   * Cart dynamic property values
   */
  readonly dynamicProperties: ReadonlyArray<(cart_cart_dynamicProperties | null)> | null;
  readonly coupons: ReadonlyArray<(cart_cart_coupons | null)> | null;
  /**
   * Available Gifts
   */
  readonly availableGifts: ReadonlyArray<(cart_cart_availableGifts | null)> | null;
  readonly availableShippingMethods: ReadonlyArray<(cart_cart_availableShippingMethods | null)> | null;
  readonly availablePaymentMethods: ReadonlyArray<(cart_cart_availablePaymentMethods | null)> | null;
  readonly shipments: ReadonlyArray<(cart_cart_shipments | null)> | null;
  readonly payments: ReadonlyArray<(cart_cart_payments | null)> | null;
}

export interface cart {
  readonly cart: cart_cart | null;
}

export interface cartVariables {
  readonly storeId: string;
  readonly userId?: string | null;
  readonly currencyCode: string;
  readonly cultureName?: string | null;
  readonly cartName?: string | null;
}
