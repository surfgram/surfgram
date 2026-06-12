/**
 * RichTextCode class for Surfgram Telegram Bot SDK
 * @module types/richTextCode
 * @description A monowidth text.
 * @see {@link https://core.telegram.org/bots/api#richtextcode Telegram API Documentation}
 * @class RichTextCode
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { RichText } from './richText';

/**
 * Represents a RichTextCode object from the Telegram Bot API
 * @class RichTextCode
 */
export class RichTextCode {
  /**
   * Type of the rich text, always “code”
   * @type { string }
   * @memberof RichTextCode
   * @instance
   * @public
   */
  type!: string;

  /**
   * The text
   * @type { RichText }
   * @memberof RichTextCode
   * @instance
   * @public
   */
  text!: RichText;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof RichTextCode
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof RichTextCode
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new RichTextCode instance from raw Telegram API data
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
