/**
 * SuccessfulPayment class for Surfgram Telegram Bot SDK
 * @module types/successfulPayment
 * @description This object contains basic information about a successful payment. Note that if the buyer initiates a chargeback with the relevant payment provider following this transaction, the funds may be debited from your balance. This is outside of Telegram&#39;s control.
 * @see {@link https://core.telegram.org/bots/api#successfulpayment Telegram API Documentation}
 * @class SuccessfulPayment
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { OrderInfo } from './orderInfo';

/**
 * Represents a SuccessfulPayment object from the Telegram Bot API
 * @class SuccessfulPayment
 */
export class SuccessfulPayment {
  /**
   * Three-letter ISO 4217 currency code, or “XTR” for payments in Telegram Stars
   * @type { string }
   * @memberof SuccessfulPayment
   * @instance
   * @public
   */
  currency!: string;

  /**
   * Total price in the smallest units of the currency \(integer, not float/double\). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency \(2 for the majority of currencies\).
   * @type { number }
   * @memberof SuccessfulPayment
   * @instance
   * @public
   */
  totalAmount!: number;

  /**
   * Bot-specified invoice payload
   * @type { string }
   * @memberof SuccessfulPayment
   * @instance
   * @public
   */
  invoicePayload!: string;

  /**
   * Optional. Expiration date of the subscription, in Unix time; for recurring payments only
   * @type { number }
   * @memberof SuccessfulPayment
   * @instance
   * @public
   */
  subscriptionExpirationDate?: number;

  /**
   * Optional. True, if the payment is a recurring payment for a subscription
   * @type { boolean }
   * @memberof SuccessfulPayment
   * @instance
   * @public
   */
  isRecurring?: boolean;

  /**
   * Optional. True, if the payment is the first payment for a subscription
   * @type { boolean }
   * @memberof SuccessfulPayment
   * @instance
   * @public
   */
  isFirstRecurring?: boolean;

  /**
   * Optional. Identifier of the shipping option chosen by the user
   * @type { string }
   * @memberof SuccessfulPayment
   * @instance
   * @public
   */
  shippingOptionId?: string;

  /**
   * Optional. Order information provided by the user
   * @type { OrderInfo }
   * @memberof SuccessfulPayment
   * @instance
   * @public
   */
  orderInfo?: OrderInfo;

  /**
   * Telegram payment identifier
   * @type { string }
   * @memberof SuccessfulPayment
   * @instance
   * @public
   */
  telegramPaymentChargeId!: string;

  /**
   * Provider payment identifier
   * @type { string }
   * @memberof SuccessfulPayment
   * @instance
   * @public
   */
  providerPaymentChargeId!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof SuccessfulPayment
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof SuccessfulPayment
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new SuccessfulPayment instance from raw Telegram API data
   * @constructor
   * @param {TelegramObject} raw - Raw data from Telegram API in JSON format
   * @param {Bot} bot - Bot instance for executing methods
   * @example
   * const message = new Message(rawData, botInstance);
   */
  constructor(
    raw?: TelegramObject,
    bot?: Bot
  ) {
    this.raw = raw;
    this.bot = bot;
    const converted = snakeToCamel(raw);
    Object.assign(this, converted);
  }
}
