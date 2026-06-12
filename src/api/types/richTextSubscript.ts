/**
 * RichTextSubscript class for Surfgram Telegram Bot SDK
 * @module types/richTextSubscript
 * @description A subscript text.
 * @see {@link https://core.telegram.org/bots/api#richtextsubscript Telegram API Documentation}
 * @class RichTextSubscript
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { RichText } from './richText';

/**
 * Represents a RichTextSubscript object from the Telegram Bot API
 * @class RichTextSubscript
 */
export class RichTextSubscript {
  /**
   * Type of the rich text, always “subscript”
   * @type { string }
   * @memberof RichTextSubscript
   * @instance
   * @public
   */
  type!: string;

  /**
   * The text
   * @type { RichText }
   * @memberof RichTextSubscript
   * @instance
   * @public
   */
  text!: RichText;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof RichTextSubscript
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof RichTextSubscript
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new RichTextSubscript instance from raw Telegram API data
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
