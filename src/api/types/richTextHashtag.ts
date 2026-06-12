/**
 * RichTextHashtag class for Surfgram Telegram Bot SDK
 * @module types/richTextHashtag
 * @description A hashtag.
 * @see {@link https://core.telegram.org/bots/api#richtexthashtag Telegram API Documentation}
 * @class RichTextHashtag
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { RichText } from './richText';

/**
 * Represents a RichTextHashtag object from the Telegram Bot API
 * @class RichTextHashtag
 */
export class RichTextHashtag {
  /**
   * Type of the rich text, always “hashtag”
   * @type { string }
   * @memberof RichTextHashtag
   * @instance
   * @public
   */
  type!: string;

  /**
   * The text
   * @type { RichText }
   * @memberof RichTextHashtag
   * @instance
   * @public
   */
  text!: RichText;

  /**
   * The hashtag
   * @type { string }
   * @memberof RichTextHashtag
   * @instance
   * @public
   */
  hashtag!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof RichTextHashtag
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof RichTextHashtag
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new RichTextHashtag instance from raw Telegram API data
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
