/**
 * RichTextAnchorLink class for Surfgram Telegram Bot SDK
 * @module types/richTextAnchorLink
 * @description A link to an anchor.
 * @see {@link https://core.telegram.org/bots/api#richtextanchorlink Telegram API Documentation}
 * @class RichTextAnchorLink
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { RichText } from './richText';

/**
 * Represents a RichTextAnchorLink object from the Telegram Bot API
 * @class RichTextAnchorLink
 */
export class RichTextAnchorLink {
  /**
   * Type of the rich text, always “anchor\_link”
   * @type { string }
   * @memberof RichTextAnchorLink
   * @instance
   * @public
   */
  type!: string;

  /**
   * The link text
   * @type { RichText }
   * @memberof RichTextAnchorLink
   * @instance
   * @public
   */
  text!: RichText;

  /**
   * The name of the anchor. If the name is empty, then the link brings back to the top of the message.
   * @type { string }
   * @memberof RichTextAnchorLink
   * @instance
   * @public
   */
  anchorName!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof RichTextAnchorLink
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof RichTextAnchorLink
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new RichTextAnchorLink instance from raw Telegram API data
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
