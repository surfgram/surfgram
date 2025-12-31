/**
 * RefundedPayment class for Surfgram Telegram Bot SDK
 * @module types/refundedPayment
 * @description This object contains basic information about a refunded payment.
 * @see {@link https://core.telegram.org/bots/api#refundedpayment Telegram API Documentation}
 * @class RefundedPayment
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a RefundedPayment object from the Telegram Bot API
 * @class RefundedPayment
 */
export class RefundedPayment {
  /**
   * Three-letter ISO 4217 currency code, or “XTR” for payments in Telegram Stars. Currently, always “XTR”
   * @type { string }
   * @memberof RefundedPayment
   * @instance
   * @public
   */
  currency!: string;

  /**
   * Total refunded price in the smallest units of the currency \(integer, not float/double\). For example, for a price of US$ 1.45, total\_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency \(2 for the majority of currencies\).
   * @type { number }
   * @memberof RefundedPayment
   * @instance
   * @public
   */
  totalAmount!: number;

  /**
   * Bot-specified invoice payload
   * @type { string }
   * @memberof RefundedPayment
   * @instance
   * @public
   */
  invoicePayload!: string;

  /**
   * Telegram payment identifier
   * @type { string }
   * @memberof RefundedPayment
   * @instance
   * @public
   */
  telegramPaymentChargeId!: string;

  /**
   * Optional. Provider payment identifier
   * @type { string }
   * @memberof RefundedPayment
   * @instance
   * @public
   */
  providerPaymentChargeId?: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof RefundedPayment
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof RefundedPayment
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new RefundedPayment instance from raw Telegram API data
   * @constructor
   * @param {TelegramObject} raw - Raw data from Telegram API in JSON format
   * @param {Bot} bot - Bot instance for executing methods
   * @example
   * const message = new Message(rawData, botInstance);
   */
  constructor(raw?: TelegramObject, bot?: Bot) {
    this.raw = raw;
    this.bot = bot;
    const converted = snakeToCamel(raw);
    Object.assign(this, converted);
  }
}
