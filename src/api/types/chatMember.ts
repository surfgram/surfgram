/**
 * ChatMember class for Surfgram Telegram Bot SDK
 * @module types/chatMember
 * @description This object contains information about one member of a chat. Currently, the following 6 types of chat members are supported:
 * @see {@link https://core.telegram.org/bots/api#chatmember Telegram API Documentation}
 * @class ChatMember
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { User } from './user';

/**
 * Represents a ChatMember object from the Telegram Bot API
 * @class ChatMember
 */
export class ChatMember {
  /**
   * The member's status in the chat, always “creator”
   * @type { string }
   * @memberof ChatMember
   * @instance
   * @public
   */
  status!: string;

  /**
   * Information about the user
   * @type { User }
   * @memberof ChatMember
   * @instance
   * @public
   */
  user!: User;

  /**
   * True, if the user's presence in the chat is hidden
   * @type { boolean }
   * @memberof ChatMember
   * @instance
   * @public
   */
  isAnonymous!: boolean;

  /**
   * Optional. Custom title for this user
   * @type { string }
   * @memberof ChatMember
   * @instance
   * @public
   */
  customTitle?: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof ChatMember
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof ChatMember
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new ChatMember instance from raw Telegram API data
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
