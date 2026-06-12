/**
 * RichTextReferenceLink class for Surfgram Telegram Bot SDK
 * @module types/richTextReferenceLink
 * @description A link to a reference.
 * @see {@link https://core.telegram.org/bots/api#richtextreferencelink Telegram API Documentation}
 * @class RichTextReferenceLink
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { RichText } from './richText';

/**
 * Represents a RichTextReferenceLink object from the Telegram Bot API
 * @class RichTextReferenceLink
 */
export class RichTextReferenceLink {
  /**
   * Type of the rich text, always “reference\_link”
   * @type { string }
   * @memberof RichTextReferenceLink
   * @instance
   * @public
   */
  type!: string;

  /**
   * The link text
   * @type { RichText }
   * @memberof RichTextReferenceLink
   * @instance
   * @public
   */
  text!: RichText;

  /**
   * The name of the reference
   * @type { string }
   * @memberof RichTextReferenceLink
   * @instance
   * @public
   */
  referenceName!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof RichTextReferenceLink
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof RichTextReferenceLink
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new RichTextReferenceLink instance from raw Telegram API data
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
