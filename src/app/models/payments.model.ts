import { Mutable } from 'type-fest';
import * as graphql from '../graphql/types/payment';
import * as graphPayments from '../graphql/types/payments';

type typeNameTemplate = '__typename'

export interface PaymentResult extends Mutable<Omit<graphql.payment_payments,
  'items' |
  typeNameTemplate>> {
  items: Payment[]
}

export type Payment = Mutable<Omit<graphql.payment_payments_items, typeNameTemplate>>

export interface PaymentsResult extends Mutable<Omit<graphPayments.payments_payments,
    'items' |
    typeNameTemplate>> {
    items: Mutable<Omit<graphPayments.payments_payments_items, typeNameTemplate>>[]
}
