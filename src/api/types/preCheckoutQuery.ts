/**
 * PreCheckoutQuery class for Surfgram Telegram Bot SDK
 * @module types/preCheckoutQuery
 * @description This object contains information about an incoming pre-checkout query.
 * @see {@link https://core.telegram.org/bots/api#precheckoutquery Telegram API Documentation}
 * @class PreCheckoutQuery
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { User } from './user';
import { OrderInfo } from './orderInfo';

/**
 * Represents a PreCheckoutQuery object from the Telegram Bot API
 * @class PreCheckoutQuery
 */
export class PreCheckoutQuery {
  /**
   * Unique query identifier
   * @type { string }
   * @memberof PreCheckoutQuery
   * @instance
   * @public
   */
  id!: string;

  /**
   * User who sent the query
   * @type { User }
   * @memberof PreCheckoutQuery
   * @instance
   * @public
   */
  from!: User;

  /**
   * Three-letter ISO 4217 currency code, or “XTR” for payments in Telegram Stars
   * @type { string }
   * @memberof PreCheckoutQuery
   * @instance
   * @public
   */
  currency!: string;

  /**
   * Total price in the smallest units of the currency \(integer, not float/double\). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency \(2 for the majority of currencies\).
   * @type { number }
   * @memberof PreCheckoutQuery
   * @instance
   * @public
   */
  totalAmount!: number;

  /**
   * Bot-specified invoice payload
   * @type { string }
   * @memberof PreCheckoutQuery
   * @instance
   * @public
   */
  invoicePayload!: string;

  /**
   * Optional. Identifier of the shipping option chosen by the user
   * @type { string }
   * @memberof PreCheckoutQuery
   * @instance
   * @public
   */
  shippingOptionId?: string;

  /**
   * Optional. Order information provided by the user
   * @type { OrderInfo }
   * @memberof PreCheckoutQuery
   * @instance
   * @public
   */
  orderInfo?: OrderInfo;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof PreCheckoutQuery
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof PreCheckoutQuery
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new PreCheckoutQuery instance from raw Telegram API data
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
