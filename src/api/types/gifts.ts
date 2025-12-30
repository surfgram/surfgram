/**
 * Gifts class for Surfgram Telegram Bot SDK
 * @module types/gifts
 * @description This object represent a list of gifts.
 * @see {@link https://core.telegram.org/bots/api#gifts Telegram API Documentation}
 * @class Gifts
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { Gift } from './gift';

/**
 * Represents a Gifts object from the Telegram Bot API
 * @class Gifts
 */
export class Gifts {
  /**
   * The list of gifts
   * @type { Gift[] }
   * @memberof Gifts
   * @instance
   * @public
   */
  gifts!: Gift[];

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof Gifts
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof Gifts
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new Gifts instance from raw Telegram API data
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
