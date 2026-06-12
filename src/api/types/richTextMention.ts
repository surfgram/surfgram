/**
 * RichTextMention class for Surfgram Telegram Bot SDK
 * @module types/richTextMention
 * @description A mention by a username.
 * @see {@link https://core.telegram.org/bots/api#richtextmention Telegram API Documentation}
 * @class RichTextMention
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { RichText } from './richText';

/**
 * Represents a RichTextMention object from the Telegram Bot API
 * @class RichTextMention
 */
export class RichTextMention {
  /**
   * Type of the rich text, always “mention”
   * @type { string }
   * @memberof RichTextMention
   * @instance
   * @public
   */
  type!: string;

  /**
   * The text
   * @type { RichText }
   * @memberof RichTextMention
   * @instance
   * @public
   */
  text!: RichText;

  /**
   * The username
   * @type { string }
   * @memberof RichTextMention
   * @instance
   * @public
   */
  username!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof RichTextMention
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof RichTextMention
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new RichTextMention instance from raw Telegram API data
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
