/**
 * StarAmount class for Surfgram Telegram Bot SDK
 * @module types/starAmount
 * @description Describes an amount of Telegram Stars.
 * @see {@link https://core.telegram.org/bots/api#staramount Telegram API Documentation}
 * @class StarAmount
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a StarAmount object from the Telegram Bot API
 * @class StarAmount
 */
export class StarAmount {
  /**
   * Integer amount of Telegram Stars, rounded to 0; can be negative
   * @type { number }
   * @memberof StarAmount
   * @instance
   * @public
   */
  amount!: number;

  /**
   * Optional. The number of 1/1000000000 shares of Telegram Stars; from -999999999 to 999999999; can be negative if and only if amount is non-positive
   * @type { number }
   * @memberof StarAmount
   * @instance
   * @public
   */
  nanostarAmount?: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof StarAmount
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof StarAmount
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new StarAmount instance from raw Telegram API data
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
