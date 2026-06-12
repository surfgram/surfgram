/**
 * RichTextDateTime class for Surfgram Telegram Bot SDK
 * @module types/richTextDateTime
 * @description Formatted date and time.
 * @see {@link https://core.telegram.org/bots/api#richtextdatetime Telegram API Documentation}
 * @class RichTextDateTime
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { RichText } from './richText';

/**
 * Represents a RichTextDateTime object from the Telegram Bot API
 * @class RichTextDateTime
 */
export class RichTextDateTime {
  /**
   * Type of the rich text, always “date\_time”
   * @type { string }
   * @memberof RichTextDateTime
   * @instance
   * @public
   */
  type!: string;

  /**
   * The text
   * @type { RichText }
   * @memberof RichTextDateTime
   * @instance
   * @public
   */
  text!: RichText;

  /**
   * The Unix time associated with the entity
   * @type { number }
   * @memberof RichTextDateTime
   * @instance
   * @public
   */
  unixTime!: number;

  /**
   * The string that defines the formatting of the date and time. See date-time entity formatting for more details.
   * @type { string }
   * @memberof RichTextDateTime
   * @instance
   * @public
   */
  dateTimeFormat!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof RichTextDateTime
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof RichTextDateTime
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new RichTextDateTime instance from raw Telegram API data
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
