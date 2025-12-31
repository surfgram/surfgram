/**
 * ChatJoinRequest class for Surfgram Telegram Bot SDK
 * @module types/chatJoinRequest
 * @description Represents a join request sent to a chat.
 * @see {@link https://core.telegram.org/bots/api#chatjoinrequest Telegram API Documentation}
 * @class ChatJoinRequest
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { Chat } from './chat';
import { User } from './user';
import { ChatInviteLink } from './chatInviteLink';

/**
 * Represents a ChatJoinRequest object from the Telegram Bot API
 * @class ChatJoinRequest
 */
export class ChatJoinRequest {
  /**
   * Chat to which the request was sent
   * @type { Chat }
   * @memberof ChatJoinRequest
   * @instance
   * @public
   */
  chat!: Chat;

  /**
   * User that sent the join request
   * @type { User }
   * @memberof ChatJoinRequest
   * @instance
   * @public
   */
  from!: User;

  /**
   * Identifier of a private chat with the user who sent the join request. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier. The bot can use this identifier for 5 minutes to send messages until the join request is processed, assuming no other administrator contacted the user.
   * @type { number }
   * @memberof ChatJoinRequest
   * @instance
   * @public
   */
  userChatId!: number;

  /**
   * Date the request was sent in Unix time
   * @type { number }
   * @memberof ChatJoinRequest
   * @instance
   * @public
   */
  date!: number;

  /**
   * Optional. Bio of the user.
   * @type { string }
   * @memberof ChatJoinRequest
   * @instance
   * @public
   */
  bio?: string;

  /**
   * Optional. Chat invite link that was used by the user to send the join request
   * @type { ChatInviteLink }
   * @memberof ChatJoinRequest
   * @instance
   * @public
   */
  inviteLink?: ChatInviteLink;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof ChatJoinRequest
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof ChatJoinRequest
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new ChatJoinRequest instance from raw Telegram API data
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
