/**
 * BotCommand class for Surfgram Telegram Bot SDK
 * @module types/botCommand
 * @description This object represents a bot command.
 * @see {@link https://core.telegram.org/bots/api#botcommand Telegram API Documentation}
 * @class BotCommand
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a BotCommand object from the Telegram Bot API
 * @class BotCommand
 */
export class BotCommand {
  /**
   * Text of the command; 1-32 characters. Can contain only lowercase English letters, digits and underscores.
   * @type { string }
   * @memberof BotCommand
   * @instance
   * @public
   */
  command!: string;
  /**
   * Description of the command; 1-256 characters.
   * @type { string }
   * @memberof BotCommand
   * @instance
   * @public
   */
  description!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof BotCommand
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof BotCommand
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new BotCommand instance from raw Telegram API data
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
    this.bot = bot;

    if (raw) {
      const data = snakeToCamel(raw) as any;

      this.command = data.command;
      this.description = data.description;
    }
  }
}
