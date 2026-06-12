/**
 * RichTextAnchor class for Surfgram Telegram Bot SDK
 * @module types/richTextAnchor
 * @description An anchor.
 * @see {@link https://core.telegram.org/bots/api#richtextanchor Telegram API Documentation}
 * @class RichTextAnchor
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a RichTextAnchor object from the Telegram Bot API
 * @class RichTextAnchor
 */
export class RichTextAnchor {
  /**
   * Type of the rich text, always “anchor”
   * @type { string }
   * @memberof RichTextAnchor
   * @instance
   * @public
   */
  type!: string;

  /**
   * The name of the anchor
   * @type { string }
   * @memberof RichTextAnchor
   * @instance
   * @public
   */
  name!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof RichTextAnchor
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof RichTextAnchor
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new RichTextAnchor instance from raw Telegram API data
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
