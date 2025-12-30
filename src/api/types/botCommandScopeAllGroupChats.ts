/**
 * BotCommandScopeAllGroupChats class for Surfgram Telegram Bot SDK
 * @module types/botCommandScopeAllGroupChats
 * @description Represents the scope of bot commands, covering all group and supergroup chats.
 * @see {@link https://core.telegram.org/bots/api#botcommandscopeallgroupchats Telegram API Documentation}
 * @class BotCommandScopeAllGroupChats
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a BotCommandScopeAllGroupChats object from the Telegram Bot API
 * @class BotCommandScopeAllGroupChats
 */
export class BotCommandScopeAllGroupChats {
  /**
   * Scope type, must be all\_group\_chats
   * @type { string }
   * @memberof BotCommandScopeAllGroupChats
   * @instance
   * @public
   */
  type!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof BotCommandScopeAllGroupChats
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof BotCommandScopeAllGroupChats
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new BotCommandScopeAllGroupChats instance from raw Telegram API data
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
