import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, concatMap, tap, filter } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Apollo } from 'apollo-angular';
import { ApolloError } from '@apollo/client/errors';

import { nonNull } from 'src/app/helpers/nonNull';
import { Country } from 'src/app/models/country.model';

import * as CartActions from './cart.actions';
import { selectCountriesState } from '../countries/countries.selectors';

import getCartQuery from '../../graphql/queries/get-cart.graphql';
import addCartGiftsMutation from '../../graphql/mutations/add-cart-gift-items.graphql';
import rejectCartGiftsMutation from '../../graphql/mutations/remove-cart-gift-items.graphql';
import changeCartItemQuantityMutation from '../../graphql/mutations/change-cart-item-quantity.graphql';
import removeCartItemMutation from '../../graphql/mutations/remove-cart-item.graphql';
import updateCartCommentMutation from '../../graphql/mutations/update-cart-comment.graphql';
import updateCartDynamicPropertiesMutation from '../../graphql/mutations/update-cart-dynamic-properties.graphql';
import addCartCouponMutation from '../../graphql/mutations/add-cart-coupon.graphql';
import removeCartCouponMutation from '../../graphql/mutations/remove-cart-coupon.graphql';
import addOrUpdateShipment from '../../graphql/mutations/add-or-update-cart-shipment.graphql';
import addOrUpdatePayment from '../../graphql/mutations/add-or-update-cart-payment.graphql';

import { cart, cartVariables } from 'src/app/graphql/types/cart';
import { changeCartItemQuantity, changeCartItemQuantityVariables } from 'src/app/graphql/types/changeCartItemQuantity';
import { removeCartItem, removeCartItemVariables } from 'src/app/graphql/types/removeCartItem';
import { updateCartComment, updateCartCommentVariables } from 'src/app/graphql/types/updateCartComment';
import { updateCartDynamicProperties, updateCartDynamicPropertiesVariables }
  from 'src/app/graphql/types/updateCartDynamicProperties';
import { addCartCoupon, addCartCouponVariables } from 'src/app/graphql/types/addCartCoupon';
import { removeCartCoupon, removeCartCouponVariables } from 'src/app/graphql/types/removeCartCoupon';
import { addOrUpdateCartShipment, addOrUpdateCartShipmentVariables }
  from 'src/app/graphql/types/addOrUpdateCartShipment';
import { addOrUpdateCartPayment, addOrUpdateCartPaymentVariables }
  from 'src/app/graphql/types/addOrUpdateCartPayment';
import { addGiftItems, addGiftItemsVariables } from 'src/app/graphql/types/addGiftItems';
import { rejectGiftItems, rejectGiftItemsVariables } from 'src/app/graphql/types/rejectGiftItems';

@Injectable()
export class CartEffects {
  baseCartVariables: cartVariables = {
    storeId: 'Electronics',
    cartName: 'default',
    currencyCode: 'USD',
    cultureName: 'en-US',
  }

  getCart$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CartActions.getCart),
      concatMap(() => this.apollo.query<cart>({
        query: getCartQuery,
        variables: {
          ...this.baseCartVariables,
          userId: localStorage.getItem('cartUserId'),
        },
      })
        .pipe(
          map(result => CartActions.getCartSuccess({ data: result.data })),
          catchError((error: ApolloError) => of(CartActions.getCartFailure({ error })))
        ))
    );
  });

  addGiftItems$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CartActions.addGiftItems),
      concatMap(action => this.apollo.mutate<addGiftItems, addGiftItemsVariables>({
        mutation: addCartGiftsMutation,
        variables: {
          command: {
            ...this.baseCartVariables,
            userId: localStorage.getItem('cartUserId') ?? '',
            ids: action.ids,
          },
        },
      })
        .pipe(
          map(result => CartActions.addGiftItemsSuccess({
            data: result.data?.addGiftItems ?? null,
          }))
        ))
    );
  });

  rejectGiftItems$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CartActions.rejectCartItems),
      concatMap(action => this.apollo.mutate<rejectGiftItems, rejectGiftItemsVariables>({
        mutation: rejectCartGiftsMutation,
        variables: {
          command: {
            ...this.baseCartVariables,
            userId: localStorage.getItem('cartUserId') ?? '',
            ids: action.ids,
          },
        },
      })
        .pipe(
          map(result => CartActions.rejectCartItemsSuccess({
            data: result.data?.rejectGiftItems ?? null,
          }))
        ))
    );
  });

  changeCartItemQuantity$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CartActions.changeCartItemQuantity),
      concatMap(action => this.apollo.mutate<changeCartItemQuantity, changeCartItemQuantityVariables>({
        mutation: changeCartItemQuantityMutation,
        variables: {
          command: {
            ...this.baseCartVariables,
            userId: localStorage.getItem('cartUserId') ?? '',
            lineItemId: action.lineItemId,
            quantity: action.quantity,
          },
        },
      })
        .pipe(
          map(result => CartActions.changeCartItemQuantitySuccess({
            data: result.data?.changeCartItemQuantity ?? null,
          }))
        ))
    );
  });

  removeCartItem$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CartActions.removeCartItem),
      concatMap(action => this.apollo.mutate<removeCartItem, removeCartItemVariables>({
        mutation: removeCartItemMutation,
        variables: {
          command: {
            ...this.baseCartVariables,
            userId: localStorage.getItem('cartUserId') ?? '',
            lineItemId: action.lineItemId,
          },
        },
      })
        .pipe(
          map(result => CartActions.removeCartItemSuccess({
            data: result.data?.removeCartItem ?? null,
          }))
        ))
    );
  });

  updateCartComment$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CartActions.updateCartComment),
      concatMap(action => this.apollo.mutate<updateCartComment, updateCartCommentVariables>({
        mutation: updateCartCommentMutation,
        variables: {
          command: {
            ...this.baseCartVariables,
            userId: localStorage.getItem('cartUserId') ?? '',
            comment: action.comment,
          },
        },
      })
        .pipe(
          map(result => CartActions.updateStoredCart({
            data: {
              comment: result.data?.changeComment?.comment,
            },
          }))
        ))
    );
  });

  updateCartPurchaseNumber$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CartActions.updateCartPurchaseNumber),
      concatMap(action => this.apollo.mutate<updateCartDynamicProperties, updateCartDynamicPropertiesVariables>({
        mutation: updateCartDynamicPropertiesMutation,
        variables: {
          command: {
            ...this.baseCartVariables,
            userId: localStorage.getItem('cartUserId') ?? '',
            dynamicProperties: [
              {
                name: 'Purchase order number',
                value: action.purchaseNumber,
              },
            ],
          },
        },
      })
        .pipe(
          map(result => CartActions.updateCartDynamicProperties({
            dynamicProperties: result.data?.updateCartDynamicProperties?.dynamicProperties,
          }))
        ))
    );
  });

  addCartCoupon$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CartActions.addCartCoupon),
      concatMap(action => this.apollo.mutate<addCartCoupon, addCartCouponVariables>({
        mutation: addCartCouponMutation,
        variables: {
          command: {
            ...this.baseCartVariables,
            userId: localStorage.getItem('cartUserId') ?? '',
            couponCode: action.coupon ?? '',
          },
        },
      })
        .pipe(
          map(result => CartActions.addCartCouponSuccess({
            data: result.data?.addCoupon ?? null,
          }))
        ))
    );
  });

  removeCartCoupon$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CartActions.removeCartCoupon),
      concatMap(action => this.apollo.mutate<removeCartCoupon, removeCartCouponVariables>({
        mutation: removeCartCouponMutation,
        variables: {
          command: {
            ...this.baseCartVariables,
            userId: localStorage.getItem('cartUserId') ?? '',
            couponCode: action.coupon ?? '',
          },
        },
      })
        .pipe(
          map(result => CartActions.removeCartCouponSuccess({
            data: result.data?.removeCoupon ?? null,
          }))
        ))
    );
  });

  addOrUpdateShipment$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CartActions.addOrUpdateShipment),
      concatLatestFrom(() => this.getCountries),
      concatMap(([
        action,
        countries,
      ]) => this.apollo.mutate<addOrUpdateCartShipment, addOrUpdateCartShipmentVariables>({
        mutation: addOrUpdateShipment,
        variables: {
          command: {
            ...this.baseCartVariables,
            userId: localStorage.getItem('cartUserId') ?? '',
            shipment: {
              id: action.shipment?.id,
              shipmentMethodCode: action.shipment?.shipmentMethodCode,
              shipmentMethodOption: action.shipment?.shipmentMethodOption,
              price: action.shipment?.price?.amount as number,
              deliveryAddress: action.shipment?.deliveryAddress
                ? {
                  addressType: 2,
                  firstName: action.shipment.deliveryAddress.firstName,
                  lastName: action.shipment.deliveryAddress.lastName,
                  email: action.shipment.deliveryAddress.email,
                  phone: action.shipment.deliveryAddress.phone,
                  city: action.shipment.deliveryAddress.city,
                  line1: action.shipment.deliveryAddress.line1,
                  line2: action.shipment.deliveryAddress.line2,
                  postalCode: action.shipment.deliveryAddress.postalCode,
                  regionId: action.shipment.deliveryAddress.regionId,
                  countryCode: action.shipment?.deliveryAddress.countryCode,
                  countryName: this.getCountryName(countries, action.shipment.deliveryAddress.countryCode),
                }
                : null,
            },
          },
        },
      })
        .pipe(
          map(result => CartActions.addOrUpdateShipmentSuccess({
            shipmentResult: result.data?.addOrUpdateCartShipment,
          }))
        ))
    );
  });

  addOrUpdatePayment$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CartActions.addOrUpdatePayment),
      concatLatestFrom(() => this.getCountries),
      concatMap(([
        action,
        countries,
      ]) => this.apollo.mutate<addOrUpdateCartPayment, addOrUpdateCartPaymentVariables>({
        mutation: addOrUpdatePayment,
        variables: {
          command: {
            ...this.baseCartVariables,
            userId: localStorage.getItem('cartUserId') ?? '',
            payment: {
              id: action.payment?.id,
              paymentGatewayCode: action.payment?.paymentGatewayCode,
              billingAddress: action.payment?.billingAddress
                ? {
                  addressType: 1,
                  firstName: action.payment?.billingAddress.firstName,
                  lastName: action.payment?.billingAddress.lastName,
                  email: action.payment?.billingAddress.email,
                  phone: action.payment?.billingAddress.phone,
                  city: action.payment?.billingAddress.city,
                  line1: action.payment?.billingAddress.line1,
                  line2: action.payment?.billingAddress.line2,
                  postalCode: action.payment?.billingAddress.postalCode,
                  regionId: action.payment?.billingAddress.regionId,
                  countryCode: action.payment?.billingAddress.countryCode,
                  countryName: this.getCountryName(countries, action.payment.billingAddress.countryCode),
                }
                : null,
            },
          },
        },
      })
        .pipe(
          map(result => CartActions.addOrUpdatePaymentSuccess({
            payments: result.data?.addOrUpdateCartPayment?.payments ?? [],
          }))
        ))
    );
  });

  setCartUserId$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CartActions.setCartUserId),
      tap(result => {
        localStorage.setItem('cartUserId', result.userId);
      })
    );
  }, { dispatch: false });

  private readonly getCountries = [
    this.store.select(selectCountriesState).pipe(filter(nonNull)),
  ];

  getCountryName(countries: Country[], countryCode?: string | null): string {
    return countries.find(country => {
      return country.id === countryCode;
    })?.name as string;
  }

  constructor(
    private readonly actions$: Actions,
    private readonly apollo: Apollo,
    private readonly store: Store
  ) { }
}
