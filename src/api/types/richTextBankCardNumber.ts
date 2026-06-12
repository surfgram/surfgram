/**
 * RichTextBankCardNumber class for Surfgram Telegram Bot SDK
 * @module types/richTextBankCardNumber
 * @description A text with a bank card number.
 * @see {@link https://core.telegram.org/bots/api#richtextbankcardnumber Telegram API Documentation}
 * @class RichTextBankCardNumber
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { RichText } from './richText';

/**
 * Represents a RichTextBankCardNumber object from the Telegram Bot API
 * @class RichTextBankCardNumber
 */
export class RichTextBankCardNumber {
  /**
   * Type of the rich text, always “bank\_card\_number”
   * @type { string }
   * @memberof RichTextBankCardNumber
   * @instance
   * @public
   */
  type!: string;

  /**
   * The text
   * @type { RichText }
   * @memberof RichTextBankCardNumber
   * @instance
   * @public
   */
  text!: RichText;

  /**
   * The bank card number
   * @type { string }
   * @memberof RichTextBankCardNumber
   * @instance
   * @public
   */
  bankCardNumber!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof RichTextBankCardNumber
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof RichTextBankCardNumber
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new RichTextBankCardNumber instance from raw Telegram API data
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
