/**
 * BotCommandScopeDefault class for Surfgram Telegram Bot SDK
 * @module types/botCommandScopeDefault
 * @description Represents the default scope of bot commands. Default commands are used if no commands with a narrower scope are specified for the user.
 * @see {@link https://core.telegram.org/bots/api#botcommandscopedefault Telegram API Documentation}
 * @class BotCommandScopeDefault
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a BotCommandScopeDefault object from the Telegram Bot API
 * @class BotCommandScopeDefault
 */
export class BotCommandScopeDefault {
  /**
   * Scope type, must be default
   * @type { string }
   * @memberof BotCommandScopeDefault
   * @instance
   * @public
   */
  type!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof BotCommandScopeDefault
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof BotCommandScopeDefault
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new BotCommandScopeDefault instance from raw Telegram API data
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
