/**
 * RichTextSuperscript class for Surfgram Telegram Bot SDK
 * @module types/richTextSuperscript
 * @description A superscript text.
 * @see {@link https://core.telegram.org/bots/api#richtextsuperscript Telegram API Documentation}
 * @class RichTextSuperscript
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { RichText } from './richText';

/**
 * Represents a RichTextSuperscript object from the Telegram Bot API
 * @class RichTextSuperscript
 */
export class RichTextSuperscript {
  /**
   * Type of the rich text, always “superscript”
   * @type { string }
   * @memberof RichTextSuperscript
   * @instance
   * @public
   */
  type!: string;

  /**
   * The text
   * @type { RichText }
   * @memberof RichTextSuperscript
   * @instance
   * @public
   */
  text!: RichText;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof RichTextSuperscript
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof RichTextSuperscript
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new RichTextSuperscript instance from raw Telegram API data
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
