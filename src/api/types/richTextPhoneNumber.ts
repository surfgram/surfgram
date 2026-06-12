/**
 * RichTextPhoneNumber class for Surfgram Telegram Bot SDK
 * @module types/richTextPhoneNumber
 * @description A text with a phone number.
 * @see {@link https://core.telegram.org/bots/api#richtextphonenumber Telegram API Documentation}
 * @class RichTextPhoneNumber
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { RichText } from './richText';

/**
 * Represents a RichTextPhoneNumber object from the Telegram Bot API
 * @class RichTextPhoneNumber
 */
export class RichTextPhoneNumber {
  /**
   * Type of the rich text, always “phone\_number”
   * @type { string }
   * @memberof RichTextPhoneNumber
   * @instance
   * @public
   */
  type!: string;

  /**
   * The text
   * @type { RichText }
   * @memberof RichTextPhoneNumber
   * @instance
   * @public
   */
  text!: RichText;

  /**
   * The phone number
   * @type { string }
   * @memberof RichTextPhoneNumber
   * @instance
   * @public
   */
  phoneNumber!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof RichTextPhoneNumber
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof RichTextPhoneNumber
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new RichTextPhoneNumber instance from raw Telegram API data
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
