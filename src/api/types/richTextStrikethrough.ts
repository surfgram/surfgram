/**
 * RichTextStrikethrough class for Surfgram Telegram Bot SDK
 * @module types/richTextStrikethrough
 * @description A strikethrough text.
 * @see {@link https://core.telegram.org/bots/api#richtextstrikethrough Telegram API Documentation}
 * @class RichTextStrikethrough
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { RichText } from './richText';

/**
 * Represents a RichTextStrikethrough object from the Telegram Bot API
 * @class RichTextStrikethrough
 */
export class RichTextStrikethrough {
  /**
   * Type of the rich text, always “strikethrough”
   * @type { string }
   * @memberof RichTextStrikethrough
   * @instance
   * @public
   */
  type!: string;

  /**
   * The text
   * @type { RichText }
   * @memberof RichTextStrikethrough
   * @instance
   * @public
   */
  text!: RichText;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof RichTextStrikethrough
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof RichTextStrikethrough
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new RichTextStrikethrough instance from raw Telegram API data
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
