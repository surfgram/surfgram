/**
 * BotCommandScope class for Surfgram Telegram Bot SDK
 * @module types/botCommandScope
 * @description This object represents the scope to which bot commands are applied. Currently, the following 7 scopes are supported:
 * @see {@link https://core.telegram.org/bots/api#botcommandscope Telegram API Documentation}
 * @class BotCommandScope
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a BotCommandScope object from the Telegram Bot API
 * @class BotCommandScope
 */
export class BotCommandScope {
  /**
   * Scope type, must be default
   * @type { string }
   * @memberof BotCommandScope
   * @instance
   * @public
   */
  type!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof BotCommandScope
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof BotCommandScope
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new BotCommandScope instance from raw Telegram API data
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
