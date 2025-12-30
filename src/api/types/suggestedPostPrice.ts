/**
 * SuggestedPostPrice class for Surfgram Telegram Bot SDK
 * @module types/suggestedPostPrice
 * @description Describes the price of a suggested post.
 * @see {@link https://core.telegram.org/bots/api#suggestedpostprice Telegram API Documentation}
 * @class SuggestedPostPrice
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a SuggestedPostPrice object from the Telegram Bot API
 * @class SuggestedPostPrice
 */
export class SuggestedPostPrice {
  /**
   * Currency in which the post will be paid. Currently, must be one of “XTR” for Telegram Stars or “TON” for toncoins
   * @type { string }
   * @memberof SuggestedPostPrice
   * @instance
   * @public
   */
  currency!: string;
  /**
   * The amount of the currency that will be paid for the post in the smallest units of the currency, i.e. Telegram Stars or nanotoncoins. Currently, price in Telegram Stars must be between 5 and 100000, and price in nanotoncoins must be between 10000000 and 10000000000000.
   * @type { number }
   * @memberof SuggestedPostPrice
   * @instance
   * @public
   */
  amount!: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof SuggestedPostPrice
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof SuggestedPostPrice
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new SuggestedPostPrice instance from raw Telegram API data
   * @constructor
   * @param {TelegramObject} raw - Raw data from Telegram API in JSON format
   * @param {Bot} bot - Bot instance for executing methods
   * @example
   * const message = new Message(rawData, botInstance);
   */
  constructor(raw?: TelegramObject, bot?: Bot) {
    this.raw = raw;
    this.bot = bot;

    if (raw) {
      const data = snakeToCamel(raw) as any;

      this.currency = data.currency;
      this.amount = data.amount;
    }
  }
}
