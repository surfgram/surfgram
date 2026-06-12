/**
 * RichTextCashtag class for Surfgram Telegram Bot SDK
 * @module types/richTextCashtag
 * @description A cashtag.
 * @see {@link https://core.telegram.org/bots/api#richtextcashtag Telegram API Documentation}
 * @class RichTextCashtag
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { RichText } from './richText';

/**
 * Represents a RichTextCashtag object from the Telegram Bot API
 * @class RichTextCashtag
 */
export class RichTextCashtag {
  /**
   * Type of the rich text, always “cashtag”
   * @type { string }
   * @memberof RichTextCashtag
   * @instance
   * @public
   */
  type!: string;

  /**
   * The text
   * @type { RichText }
   * @memberof RichTextCashtag
   * @instance
   * @public
   */
  text!: RichText;

  /**
   * The cashtag
   * @type { string }
   * @memberof RichTextCashtag
   * @instance
   * @public
   */
  cashtag!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof RichTextCashtag
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof RichTextCashtag
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new RichTextCashtag instance from raw Telegram API data
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
