/**
 * RichTextCustomEmoji class for Surfgram Telegram Bot SDK
 * @module types/richTextCustomEmoji
 * @description A custom emoji.
 * @see {@link https://core.telegram.org/bots/api#richtextcustomemoji Telegram API Documentation}
 * @class RichTextCustomEmoji
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a RichTextCustomEmoji object from the Telegram Bot API
 * @class RichTextCustomEmoji
 */
export class RichTextCustomEmoji {
  /**
   * Type of the rich text, always “custom\_emoji”
   * @type { string }
   * @memberof RichTextCustomEmoji
   * @instance
   * @public
   */
  type!: string;

  /**
   * Unique identifier of the custom emoji. Use getCustomEmojiStickers to get full information about the sticker.
   * @type { string }
   * @memberof RichTextCustomEmoji
   * @instance
   * @public
   */
  customEmojiId!: string;

  /**
   * Alternative emoji for the custom emoji
   * @type { string }
   * @memberof RichTextCustomEmoji
   * @instance
   * @public
   */
  alternativeText!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof RichTextCustomEmoji
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof RichTextCustomEmoji
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new RichTextCustomEmoji instance from raw Telegram API data
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
