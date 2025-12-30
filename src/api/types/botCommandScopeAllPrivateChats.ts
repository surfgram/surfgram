/**
 * BotCommandScopeAllPrivateChats class for Surfgram Telegram Bot SDK
 * @module types/botCommandScopeAllPrivateChats
 * @description Represents the scope of bot commands, covering all private chats.
 * @see {@link https://core.telegram.org/bots/api#botcommandscopeallprivatechats Telegram API Documentation}
 * @class BotCommandScopeAllPrivateChats
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a BotCommandScopeAllPrivateChats object from the Telegram Bot API
 * @class BotCommandScopeAllPrivateChats
 */
export class BotCommandScopeAllPrivateChats {
  /**
   * Scope type, must be all\_private\_chats
   * @type { string }
   * @memberof BotCommandScopeAllPrivateChats
   * @instance
   * @public
   */
  type!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof BotCommandScopeAllPrivateChats
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof BotCommandScopeAllPrivateChats
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new BotCommandScopeAllPrivateChats instance from raw Telegram API data
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
