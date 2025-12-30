/**
 * Invoice class for Surfgram Telegram Bot SDK
 * @module types/invoice
 * @description This object contains basic information about an invoice.
 * @see {@link https://core.telegram.org/bots/api#invoice Telegram API Documentation}
 * @class Invoice
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a Invoice object from the Telegram Bot API
 * @class Invoice
 */
export class Invoice {
  /**
   * Product name
   * @type { string }
   * @memberof Invoice
   * @instance
   * @public
   */
  title!: string;
  /**
   * Product description
   * @type { string }
   * @memberof Invoice
   * @instance
   * @public
   */
  description!: string;
  /**
   * Unique bot deep-linking parameter that can be used to generate this invoice
   * @type { string }
   * @memberof Invoice
   * @instance
   * @public
   */
  startParameter!: string;
  /**
   * Three-letter ISO 4217 currency code, or “XTR” for payments in Telegram Stars
   * @type { string }
   * @memberof Invoice
   * @instance
   * @public
   */
  currency!: string;
  /**
   * Total price in the smallest units of the currency \(integer, not float/double\). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency \(2 for the majority of currencies\).
   * @type { number }
   * @memberof Invoice
   * @instance
   * @public
   */
  totalAmount!: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof Invoice
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof Invoice
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new Invoice instance from raw Telegram API data
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

    if (raw) {
      const data = snakeToCamel(raw) as any;

      this.title = data.title;
      this.description = data.description;
      this.startParameter = data.startParameter;
      this.currency = data.currency;
      this.totalAmount = data.totalAmount;
    }
  }
}
