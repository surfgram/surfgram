/**
 * InputMediaLink class for Surfgram Telegram Bot SDK
 * @module types/inputMediaLink
 * @description Represents an HTTP link to be sent.
 * @see {@link https://core.telegram.org/bots/api#inputmedialink Telegram API Documentation}
 * @class InputMediaLink
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a InputMediaLink object from the Telegram Bot API
 * @class InputMediaLink
 */
export class InputMediaLink {
  /**
   * Type of the result, must be link
   * @type { string }
   * @memberof InputMediaLink
   * @instance
   * @public
   */
  type!: string;

  /**
   * HTTP URL of the link
   * @type { string }
   * @memberof InputMediaLink
   * @instance
   * @public
   */
  url!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InputMediaLink
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InputMediaLink
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InputMediaLink instance from raw Telegram API data
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
