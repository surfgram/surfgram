/**
 * LabeledPrice class for Surfgram Telegram Bot SDK
 * @module types/labeledPrice
 * @description This object represents a portion of the price for goods or services.
 * @see {@link https://core.telegram.org/bots/api#labeledprice Telegram API Documentation}
 * @class LabeledPrice
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a LabeledPrice object from the Telegram Bot API
 * @class LabeledPrice
 */
export class LabeledPrice {
  /**
   * Portion label
   * @type { string }
   * @memberof LabeledPrice
   * @instance
   * @public
   */
  label!: string;
  /**
   * Price of the product in the smallest units of the currency \(integer, not float/double\). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency \(2 for the majority of currencies\).
   * @type { number }
   * @memberof LabeledPrice
   * @instance
   * @public
   */
  amount!: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof LabeledPrice
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof LabeledPrice
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new LabeledPrice instance from raw Telegram API data
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

      this.label = data.label;
      this.amount = data.amount;
    }
  }
}
