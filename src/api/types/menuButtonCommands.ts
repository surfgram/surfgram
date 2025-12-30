/**
 * MenuButtonCommands class for Surfgram Telegram Bot SDK
 * @module types/menuButtonCommands
 * @description Represents a menu button, which opens the bot&#39;s list of commands.
 * @see {@link https://core.telegram.org/bots/api#menubuttoncommands Telegram API Documentation}
 * @class MenuButtonCommands
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a MenuButtonCommands object from the Telegram Bot API
 * @class MenuButtonCommands
 */
export class MenuButtonCommands {
  /**
   * Type of the button, must be commands
   * @type { string }
   * @memberof MenuButtonCommands
   * @instance
   * @public
   */
  type!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof MenuButtonCommands
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof MenuButtonCommands
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new MenuButtonCommands instance from raw Telegram API data
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

      this.type = data.type;
    }
  }
}
