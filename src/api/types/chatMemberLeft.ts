/**
 * ChatMemberLeft class for Surfgram Telegram Bot SDK
 * @module types/chatMemberLeft
 * @description Represents a chat member that isn&#39;t currently a member of the chat, but may join it themselves.
 * @see {@link https://core.telegram.org/bots/api#chatmemberleft Telegram API Documentation}
 * @class ChatMemberLeft
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { User } from './user';

/**
 * Represents a ChatMemberLeft object from the Telegram Bot API
 * @class ChatMemberLeft
 */
export class ChatMemberLeft {
  /**
   * The member's status in the chat, always “left”
   * @type { string }
   * @memberof ChatMemberLeft
   * @instance
   * @public
   */
  status!: string;
  /**
   * Information about the user
   * @type { User }
   * @memberof ChatMemberLeft
   * @instance
   * @public
   */
  user!: User;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof ChatMemberLeft
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof ChatMemberLeft
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new ChatMemberLeft instance from raw Telegram API data
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

      this.status = data.status;
      this.user = data.user;
    }
  }
}
