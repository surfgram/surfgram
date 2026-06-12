/**
 * RichTextTextMention class for Surfgram Telegram Bot SDK
 * @module types/richTextTextMention
 * @description A mention of a Telegram user by their identifier.
 * @see {@link https://core.telegram.org/bots/api#richtexttextmention Telegram API Documentation}
 * @class RichTextTextMention
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { RichText } from './richText';
import { User } from './user';

/**
 * Represents a RichTextTextMention object from the Telegram Bot API
 * @class RichTextTextMention
 */
export class RichTextTextMention {
  /**
   * Type of the rich text, always “text\_mention”
   * @type { string }
   * @memberof RichTextTextMention
   * @instance
   * @public
   */
  type!: string;

  /**
   * The text
   * @type { RichText }
   * @memberof RichTextTextMention
   * @instance
   * @public
   */
  text!: RichText;

  /**
   * The mentioned user
   * @type { User }
   * @memberof RichTextTextMention
   * @instance
   * @public
   */
  user!: User;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof RichTextTextMention
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof RichTextTextMention
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new RichTextTextMention instance from raw Telegram API data
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
