/**
 * RichTextReference class for Surfgram Telegram Bot SDK
 * @module types/richTextReference
 * @description A reference.
 * @see {@link https://core.telegram.org/bots/api#richtextreference Telegram API Documentation}
 * @class RichTextReference
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { RichText } from './richText';

/**
 * Represents a RichTextReference object from the Telegram Bot API
 * @class RichTextReference
 */
export class RichTextReference {
  /**
   * Type of the rich text, always “reference”
   * @type { string }
   * @memberof RichTextReference
   * @instance
   * @public
   */
  type!: string;

  /**
   * Text of the reference
   * @type { RichText }
   * @memberof RichTextReference
   * @instance
   * @public
   */
  text!: RichText;

  /**
   * The name of the reference
   * @type { string }
   * @memberof RichTextReference
   * @instance
   * @public
   */
  name!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof RichTextReference
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof RichTextReference
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new RichTextReference instance from raw Telegram API data
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
