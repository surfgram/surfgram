/**
 * RichTextBold class for Surfgram Telegram Bot SDK
 * @module types/richTextBold
 * @description A bold text.
 * @see {@link https://core.telegram.org/bots/api#richtextbold Telegram API Documentation}
 * @class RichTextBold
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { RichText } from './richText';

/**
 * Represents a RichTextBold object from the Telegram Bot API
 * @class RichTextBold
 */
export class RichTextBold {
  /**
   * Type of the rich text, always “bold”
   * @type { string }
   * @memberof RichTextBold
   * @instance
   * @public
   */
  type!: string;

  /**
   * The text
   * @type { RichText }
   * @memberof RichTextBold
   * @instance
   * @public
   */
  text!: RichText;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof RichTextBold
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof RichTextBold
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new RichTextBold instance from raw Telegram API data
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
