/**
 * BotCommandScopeChat class for Surfgram Telegram Bot SDK
 * @module types/botCommandScopeChat
 * @description Represents the scope of bot commands, covering a specific chat.
 * @see {@link https://core.telegram.org/bots/api#botcommandscopechat Telegram API Documentation}
 * @class BotCommandScopeChat
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a BotCommandScopeChat object from the Telegram Bot API
 * @class BotCommandScopeChat
 */
export class BotCommandScopeChat {
  /**
   * Scope type, must be chat
   * @type { string }
   * @memberof BotCommandScopeChat
   * @instance
   * @public
   */
  type!: string;

  /**
   * Unique identifier for the target chat or username of the target supergroup \(in the format @supergroupusername\). Channel direct messages chats and channel chats aren't supported.
   * @type { number | string }
   * @memberof BotCommandScopeChat
   * @instance
   * @public
   */
  chatId!: number | string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof BotCommandScopeChat
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof BotCommandScopeChat
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new BotCommandScopeChat instance from raw Telegram API data
   * @constructor
   * @param {TelegramObject} raw - Raw data from Telegram API in JSON format
   * @param {Bot} bot - Bot instance for executing methods
   * @example
   * const message = new Message(rawData, botInstance);
   */
  constructor(raw?: TelegramObject, bot?: Bot) {
    this.raw = raw;
    this.bot = bot;
    const converted = snakeToCamel(raw);
    Object.assign(this, converted);
  }
}
