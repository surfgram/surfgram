/**
 * RichTextEmailAddress class for Surfgram Telegram Bot SDK
 * @module types/richTextEmailAddress
 * @description A text with an email address.
 * @see {@link https://core.telegram.org/bots/api#richtextemailaddress Telegram API Documentation}
 * @class RichTextEmailAddress
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { RichText } from './richText';

/**
 * Represents a RichTextEmailAddress object from the Telegram Bot API
 * @class RichTextEmailAddress
 */
export class RichTextEmailAddress {
  /**
   * Type of the rich text, always “email\_address”
   * @type { string }
   * @memberof RichTextEmailAddress
   * @instance
   * @public
   */
  type!: string;

  /**
   * The text
   * @type { RichText }
   * @memberof RichTextEmailAddress
   * @instance
   * @public
   */
  text!: RichText;

  /**
   * The email address
   * @type { string }
   * @memberof RichTextEmailAddress
   * @instance
   * @public
   */
  emailAddress!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof RichTextEmailAddress
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof RichTextEmailAddress
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new RichTextEmailAddress instance from raw Telegram API data
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
