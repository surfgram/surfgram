/**
 * RichTextItalic class for Surfgram Telegram Bot SDK
 * @module types/richTextItalic
 * @description An italicized text.
 * @see {@link https://core.telegram.org/bots/api#richtextitalic Telegram API Documentation}
 * @class RichTextItalic
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { RichText } from './richText';

/**
 * Represents a RichTextItalic object from the Telegram Bot API
 * @class RichTextItalic
 */
export class RichTextItalic {
  /**
   * Type of the rich text, always “italic”
   * @type { string }
   * @memberof RichTextItalic
   * @instance
   * @public
   */
  type!: string;

  /**
   * The text
   * @type { RichText }
   * @memberof RichTextItalic
   * @instance
   * @public
   */
  text!: RichText;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof RichTextItalic
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof RichTextItalic
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new RichTextItalic instance from raw Telegram API data
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
