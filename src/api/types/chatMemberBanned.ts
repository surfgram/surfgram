/**
 * ChatMemberBanned class for Surfgram Telegram Bot SDK
 * @module types/chatMemberBanned
 * @description Represents a chat member that was banned in the chat and can&#39;t return to the chat or view chat messages.
 * @see {@link https://core.telegram.org/bots/api#chatmemberbanned Telegram API Documentation}
 * @class ChatMemberBanned
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { User } from './user';

/**
 * Represents a ChatMemberBanned object from the Telegram Bot API
 * @class ChatMemberBanned
 */
export class ChatMemberBanned {
  /**
   * The member's status in the chat, always “kicked”
   * @type { string }
   * @memberof ChatMemberBanned
   * @instance
   * @public
   */
  status!: string;

  /**
   * Information about the user
   * @type { User }
   * @memberof ChatMemberBanned
   * @instance
   * @public
   */
  user!: User;

  /**
   * Date when restrictions will be lifted for this user; Unix time. If 0, then the user is banned forever
   * @type { number }
   * @memberof ChatMemberBanned
   * @instance
   * @public
   */
  untilDate!: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof ChatMemberBanned
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof ChatMemberBanned
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new ChatMemberBanned instance from raw Telegram API data
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
