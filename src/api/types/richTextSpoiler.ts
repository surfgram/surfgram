/**
 * RichTextSpoiler class for Surfgram Telegram Bot SDK
 * @module types/richTextSpoiler
 * @description A text covered by a spoiler.
 * @see {@link https://core.telegram.org/bots/api#richtextspoiler Telegram API Documentation}
 * @class RichTextSpoiler
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { RichText } from './richText';

/**
 * Represents a RichTextSpoiler object from the Telegram Bot API
 * @class RichTextSpoiler
 */
export class RichTextSpoiler {
  /**
   * Type of the rich text, always “spoiler”
   * @type { string }
   * @memberof RichTextSpoiler
   * @instance
   * @public
   */
  type!: string;

  /**
   * The text
   * @type { RichText }
   * @memberof RichTextSpoiler
   * @instance
   * @public
   */
  text!: RichText;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof RichTextSpoiler
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof RichTextSpoiler
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new RichTextSpoiler instance from raw Telegram API data
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
