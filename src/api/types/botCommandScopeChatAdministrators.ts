/**
 * BotCommandScopeChatAdministrators class for Surfgram Telegram Bot SDK
 * @module types/botCommandScopeChatAdministrators
 * @description Represents the scope of bot commands, covering all administrators of a specific group or supergroup chat.
 * @see {@link https://core.telegram.org/bots/api#botcommandscopechatadministrators Telegram API Documentation}
 * @class BotCommandScopeChatAdministrators
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a BotCommandScopeChatAdministrators object from the Telegram Bot API
 * @class BotCommandScopeChatAdministrators
 */
export class BotCommandScopeChatAdministrators {
  /**
   * Scope type, must be chat\_administrators
   * @type { string }
   * @memberof BotCommandScopeChatAdministrators
   * @instance
   * @public
   */
  type!: string;

  /**
   * Unique identifier for the target chat or username of the target supergroup \(in the format @supergroupusername\). Channel direct messages chats and channel chats aren't supported.
   * @type { number | string }
   * @memberof BotCommandScopeChatAdministrators
   * @instance
   * @public
   */
  chatId!: number | string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof BotCommandScopeChatAdministrators
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof BotCommandScopeChatAdministrators
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new BotCommandScopeChatAdministrators instance from raw Telegram API data
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
