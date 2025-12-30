/**
 * PaidMessagePriceChanged class for Surfgram Telegram Bot SDK
 * @module types/paidMessagePriceChanged
 * @description Describes a service message about a change in the price of paid messages within a chat.
 * @see {@link https://core.telegram.org/bots/api#paidmessagepricechanged Telegram API Documentation}
 * @class PaidMessagePriceChanged
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a PaidMessagePriceChanged object from the Telegram Bot API
 * @class PaidMessagePriceChanged
 */
export class PaidMessagePriceChanged {
  /**
   * The new number of Telegram Stars that must be paid by non-administrator users of the supergroup chat for each sent message
   * @type { number }
   * @memberof PaidMessagePriceChanged
   * @instance
   * @public
   */
  paidMessageStarCount!: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof PaidMessagePriceChanged
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof PaidMessagePriceChanged
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new PaidMessagePriceChanged instance from raw Telegram API data
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

      this.paidMessageStarCount = data.paidMessageStarCount;
    }
  }
}
