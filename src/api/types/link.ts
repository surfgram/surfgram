/**
 * Link class for Surfgram Telegram Bot SDK
 * @module types/link
 * @description Represents an HTTP link.
 * @see {@link https://core.telegram.org/bots/api#link Telegram API Documentation}
 * @class Link
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a Link object from the Telegram Bot API
 * @class Link
 */
export class Link {
  /**
   * URL of the link
   * @type { string }
   * @memberof Link
   * @instance
   * @public
   */
  url!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof Link
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof Link
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new Link instance from raw Telegram API data
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
    const converted = snakeToCamel(raw);
    Object.assign(this, converted);
    this.bot = bot;
  }
}
