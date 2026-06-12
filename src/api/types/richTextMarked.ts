/**
 * RichTextMarked class for Surfgram Telegram Bot SDK
 * @module types/richTextMarked
 * @description A marked text.
 * @see {@link https://core.telegram.org/bots/api#richtextmarked Telegram API Documentation}
 * @class RichTextMarked
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { RichText } from './richText';

/**
 * Represents a RichTextMarked object from the Telegram Bot API
 * @class RichTextMarked
 */
export class RichTextMarked {
  /**
   * Type of the rich text, always “marked”
   * @type { string }
   * @memberof RichTextMarked
   * @instance
   * @public
   */
  type!: string;

  /**
   * The text
   * @type { RichText }
   * @memberof RichTextMarked
   * @instance
   * @public
   */
  text!: RichText;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof RichTextMarked
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof RichTextMarked
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new RichTextMarked instance from raw Telegram API data
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
