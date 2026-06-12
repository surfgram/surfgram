/**
 * RichTextUrl class for Surfgram Telegram Bot SDK
 * @module types/richTextUrl
 * @description A text with a link.
 * @see {@link https://core.telegram.org/bots/api#richtexturl Telegram API Documentation}
 * @class RichTextUrl
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { RichText } from './richText';

/**
 * Represents a RichTextUrl object from the Telegram Bot API
 * @class RichTextUrl
 */
export class RichTextUrl {
  /**
   * Type of the rich text, always “url”
   * @type { string }
   * @memberof RichTextUrl
   * @instance
   * @public
   */
  type!: string;

  /**
   * The text
   * @type { RichText }
   * @memberof RichTextUrl
   * @instance
   * @public
   */
  text!: RichText;

  /**
   * URL of the link
   * @type { string }
   * @memberof RichTextUrl
   * @instance
   * @public
   */
  url!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof RichTextUrl
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof RichTextUrl
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new RichTextUrl instance from raw Telegram API data
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
