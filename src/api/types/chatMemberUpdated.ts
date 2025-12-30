/**
 * ChatMemberUpdated class for Surfgram Telegram Bot SDK
 * @module types/chatMemberUpdated
 * @description This object represents changes in the status of a chat member.
 * @see {@link https://core.telegram.org/bots/api#chatmemberupdated Telegram API Documentation}
 * @class ChatMemberUpdated
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { Chat } from './chat';
import { User } from './user';
import { ChatMember } from './chatMember';
import { ChatInviteLink } from './chatInviteLink';

/**
 * Represents a ChatMemberUpdated object from the Telegram Bot API
 * @class ChatMemberUpdated
 */
export class ChatMemberUpdated {
  /**
   * Chat the user belongs to
   * @type { Chat }
   * @memberof ChatMemberUpdated
   * @instance
   * @public
   */
  chat!: Chat;
  /**
   * Performer of the action, which resulted in the change
   * @type { User }
   * @memberof ChatMemberUpdated
   * @instance
   * @public
   */
  from!: User;
  /**
   * Date the change was done in Unix time
   * @type { number }
   * @memberof ChatMemberUpdated
   * @instance
   * @public
   */
  date!: number;
  /**
   * Previous information about the chat member
   * @type { ChatMember }
   * @memberof ChatMemberUpdated
   * @instance
   * @public
   */
  oldChatMember!: ChatMember;
  /**
   * New information about the chat member
   * @type { ChatMember }
   * @memberof ChatMemberUpdated
   * @instance
   * @public
   */
  newChatMember!: ChatMember;
  /**
   * Optional. Chat invite link, which was used by the user to join the chat; for joining by invite link events only.
   * @type { ChatInviteLink }
   * @memberof ChatMemberUpdated
   * @instance
   * @public
   */
  inviteLink?: ChatInviteLink;
  /**
   * Optional. True, if the user joined the chat after sending a direct join request without using an invite link and being approved by an administrator
   * @type { boolean }
   * @memberof ChatMemberUpdated
   * @instance
   * @public
   */
  viaJoinRequest?: boolean;
  /**
   * Optional. True, if the user joined the chat via a chat folder invite link
   * @type { boolean }
   * @memberof ChatMemberUpdated
   * @instance
   * @public
   */
  viaChatFolderInviteLink?: boolean;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof ChatMemberUpdated
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof ChatMemberUpdated
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new ChatMemberUpdated instance from raw Telegram API data
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

      this.chat = data.chat;
      this.from = data.from;
      this.date = data.date;
      this.oldChatMember = data.oldChatMember;
      this.newChatMember = data.newChatMember;
      this.inviteLink = data.inviteLink;
      this.viaJoinRequest = data.viaJoinRequest;
      this.viaChatFolderInviteLink = data.viaChatFolderInviteLink;
    }
  }
}
