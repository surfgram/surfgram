/**
 * BotCommandScopeChatMember class for Surfgram Telegram Bot SDK
 * @module types/botCommandScopeChatMember
 * @description Represents the scope of bot commands, covering a specific member of a group or supergroup chat.
 * @see {@link https://core.telegram.org/bots/api#botcommandscopechatmember Telegram API Documentation}
 * @class BotCommandScopeChatMember
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a BotCommandScopeChatMember object from the Telegram Bot API
 * @class BotCommandScopeChatMember
 */
export class BotCommandScopeChatMember {
  /**
   * Scope type, must be chat\_member
   * @type { string }
   * @memberof BotCommandScopeChatMember
   * @instance
   * @public
   */
  type!: string;

  /**
   * Unique identifier for the target chat or username of the target supergroup \(in the format @supergroupusername\). Channel direct messages chats and channel chats aren't supported.
   * @type { number | string }
   * @memberof BotCommandScopeChatMember
   * @instance
   * @public
   */
  chatId!: number | string;

  /**
   * Unique identifier of the target user
   * @type { number }
   * @memberof BotCommandScopeChatMember
   * @instance
   * @public
   */
  userId!: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof BotCommandScopeChatMember
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof BotCommandScopeChatMember
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new BotCommandScopeChatMember instance from raw Telegram API data
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
