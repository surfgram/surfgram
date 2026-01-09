/**
 * BotCommandScopeAllChatAdministrators class for Surfgram Telegram Bot SDK
 * @module types/botCommandScopeAllChatAdministrators
 * @description Represents the scope of bot commands, covering all group and supergroup chat administrators.
 * @see {@link https://core.telegram.org/bots/api#botcommandscopeallchatadministrators Telegram API Documentation}
 * @class BotCommandScopeAllChatAdministrators
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a BotCommandScopeAllChatAdministrators object from the Telegram Bot API
 * @class BotCommandScopeAllChatAdministrators
 */
export class BotCommandScopeAllChatAdministrators {
  /**
   * Scope type, must be all\_chat\_administrators
   * @type { string }
   * @memberof BotCommandScopeAllChatAdministrators
   * @instance
   * @public
   */
  type!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof BotCommandScopeAllChatAdministrators
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof BotCommandScopeAllChatAdministrators
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new BotCommandScopeAllChatAdministrators instance from raw Telegram API data
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
    const converted = snakeToCamel(raw);
    Object.assign(this, converted);
  }
}
