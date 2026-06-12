/**
 * RichTextUnderline class for Surfgram Telegram Bot SDK
 * @module types/richTextUnderline
 * @description An underlined text.
 * @see {@link https://core.telegram.org/bots/api#richtextunderline Telegram API Documentation}
 * @class RichTextUnderline
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { RichText } from './richText';

/**
 * Represents a RichTextUnderline object from the Telegram Bot API
 * @class RichTextUnderline
 */
export class RichTextUnderline {
  /**
   * Type of the rich text, always “underline”
   * @type { string }
   * @memberof RichTextUnderline
   * @instance
   * @public
   */
  type!: string;

  /**
   * The text
   * @type { RichText }
   * @memberof RichTextUnderline
   * @instance
   * @public
   */
  text!: RichText;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof RichTextUnderline
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof RichTextUnderline
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new RichTextUnderline instance from raw Telegram API data
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
