/**
 * RichTextBotCommand class for Surfgram Telegram Bot SDK
 * @module types/richTextBotCommand
 * @description A bot command.
 * @see {@link https://core.telegram.org/bots/api#richtextbotcommand Telegram API Documentation}
 * @class RichTextBotCommand
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { RichText } from './richText';

/**
 * Represents a RichTextBotCommand object from the Telegram Bot API
 * @class RichTextBotCommand
 */
export class RichTextBotCommand {
  /**
   * Type of the rich text, always “bot\_command”
   * @type { string }
   * @memberof RichTextBotCommand
   * @instance
   * @public
   */
  type!: string;

  /**
   * The text
   * @type { RichText }
   * @memberof RichTextBotCommand
   * @instance
   * @public
   */
  text!: RichText;

  /**
   * The bot command
   * @type { string }
   * @memberof RichTextBotCommand
   * @instance
   * @public
   */
  botCommand!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof RichTextBotCommand
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof RichTextBotCommand
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new RichTextBotCommand instance from raw Telegram API data
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
