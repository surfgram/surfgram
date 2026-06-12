/**
 * RichText class for Surfgram Telegram Bot SDK
 * @module types/richText
 * @description This object represents a rich formatted text. Currently, it can be either a String for plain text, an Array of RichText, or any of the following types:
 * @see {@link https://core.telegram.org/bots/api#richtext Telegram API Documentation}
 * @class RichText
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a RichText object from the Telegram Bot API
 * @class RichText
 */
export class RichText {
  /**
   * Type of the rich text, always “bold”
   * @type { string }
   * @memberof RichText
   * @instance
   * @public
   */
  type!: string;

  /**
   * The text
   * @type { RichText }
   * @memberof RichText
   * @instance
   * @public
   */
  text!: RichText;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof RichText
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof RichText
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new RichText instance from raw Telegram API data
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
