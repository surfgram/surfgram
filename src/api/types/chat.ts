/**
 * Chat class for Surfgram Telegram Bot SDK
 * @module types/chat
 * @description This object represents a chat.
 * @see {@link https://core.telegram.org/bots/api#chat Telegram API Documentation}
 * @class Chat
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a Chat object from the Telegram Bot API
 * @class Chat
 */
export class Chat {
  /**
   * Unique identifier for this chat. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier.
   * @type { number }
   * @memberof Chat
   * @instance
   * @public
   */
  id!: number;
  /**
   * Type of the chat, can be either “private”, “group”, “supergroup” or “channel”
   * @type { string }
   * @memberof Chat
   * @instance
   * @public
   */
  type!: string;
  /**
   * Optional. Title, for supergroups, channels and group chats
   * @type { string }
   * @memberof Chat
   * @instance
   * @public
   */
  title?: string;
  /**
   * Optional. Username, for private chats, supergroups and channels if available
   * @type { string }
   * @memberof Chat
   * @instance
   * @public
   */
  username?: string;
  /**
   * Optional. First name of the other party in a private chat
   * @type { string }
   * @memberof Chat
   * @instance
   * @public
   */
  firstName?: string;
  /**
   * Optional. Last name of the other party in a private chat
   * @type { string }
   * @memberof Chat
   * @instance
   * @public
   */
  lastName?: string;
  /**
   * Optional. True, if the supergroup chat is a forum \(has topics enabled\)
   * @type { boolean }
   * @memberof Chat
   * @instance
   * @public
   */
  isForum?: boolean;
  /**
   * Optional. True, if the chat is the direct messages chat of a channel
   * @type { boolean }
   * @memberof Chat
   * @instance
   * @public
   */
  isDirectMessages?: boolean;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof Chat
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof Chat
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new Chat instance from raw Telegram API data
   * @constructor
   * @param {TelegramObject} raw - Raw data from Telegram API in JSON format
   * @param {Bot} bot - Bot instance for executing methods
   * @example
   * const message = new Message(rawData, botInstance);
   */
  constructor(raw?: TelegramObject, bot?: Bot) {
    this.raw = raw;
    this.bot = bot;

    if (raw) {
      const data = snakeToCamel(raw) as any;

      this.id = data.id;
      this.type = data.type;
      this.title = data.title;
      this.username = data.username;
      this.firstName = data.firstName;
      this.lastName = data.lastName;
      this.isForum = data.isForum;
      this.isDirectMessages = data.isDirectMessages;
    }
  }
}
