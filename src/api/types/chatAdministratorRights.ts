/**
 * ChatAdministratorRights class for Surfgram Telegram Bot SDK
 * @module types/chatAdministratorRights
 * @description Represents the rights of an administrator in a chat.
 * @see {@link https://core.telegram.org/bots/api#chatadministratorrights Telegram API Documentation}
 * @class ChatAdministratorRights
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a ChatAdministratorRights object from the Telegram Bot API
 * @class ChatAdministratorRights
 */
export class ChatAdministratorRights {
  /**
   * True, if the user's presence in the chat is hidden
   * @type { boolean }
   * @memberof ChatAdministratorRights
   * @instance
   * @public
   */
  isAnonymous!: boolean;

  /**
   * True, if the administrator can access the chat event log, get boost list, see hidden supergroup and channel members, report spam messages, ignore slow mode, and send messages to the chat without paying Telegram Stars. Implied by any other administrator privilege.
   * @type { boolean }
   * @memberof ChatAdministratorRights
   * @instance
   * @public
   */
  canManageChat!: boolean;

  /**
   * True, if the administrator can delete messages of other users
   * @type { boolean }
   * @memberof ChatAdministratorRights
   * @instance
   * @public
   */
  canDeleteMessages!: boolean;

  /**
   * True, if the administrator can manage video chats
   * @type { boolean }
   * @memberof ChatAdministratorRights
   * @instance
   * @public
   */
  canManageVideoChats!: boolean;

  /**
   * True, if the administrator can restrict, ban or unban chat members, or access supergroup statistics
   * @type { boolean }
   * @memberof ChatAdministratorRights
   * @instance
   * @public
   */
  canRestrictMembers!: boolean;

  /**
   * True, if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly \(promoted by administrators that were appointed by the user\)
   * @type { boolean }
   * @memberof ChatAdministratorRights
   * @instance
   * @public
   */
  canPromoteMembers!: boolean;

  /**
   * True, if the user is allowed to change the chat title, photo and other settings
   * @type { boolean }
   * @memberof ChatAdministratorRights
   * @instance
   * @public
   */
  canChangeInfo!: boolean;

  /**
   * True, if the user is allowed to invite new users to the chat
   * @type { boolean }
   * @memberof ChatAdministratorRights
   * @instance
   * @public
   */
  canInviteUsers!: boolean;

  /**
   * True, if the administrator can post stories to the chat
   * @type { boolean }
   * @memberof ChatAdministratorRights
   * @instance
   * @public
   */
  canPostStories!: boolean;

  /**
   * True, if the administrator can edit stories posted by other users, post stories to the chat page, pin chat stories, and access the chat's story archive
   * @type { boolean }
   * @memberof ChatAdministratorRights
   * @instance
   * @public
   */
  canEditStories!: boolean;

  /**
   * True, if the administrator can delete stories posted by other users
   * @type { boolean }
   * @memberof ChatAdministratorRights
   * @instance
   * @public
   */
  canDeleteStories!: boolean;

  /**
   * Optional. True, if the administrator can post messages in the channel, approve suggested posts, or access channel statistics; for channels only
   * @type { boolean }
   * @memberof ChatAdministratorRights
   * @instance
   * @public
   */
  canPostMessages?: boolean;

  /**
   * Optional. True, if the administrator can edit messages of other users and can pin messages; for channels only
   * @type { boolean }
   * @memberof ChatAdministratorRights
   * @instance
   * @public
   */
  canEditMessages?: boolean;

  /**
   * Optional. True, if the user is allowed to pin messages; for groups and supergroups only
   * @type { boolean }
   * @memberof ChatAdministratorRights
   * @instance
   * @public
   */
  canPinMessages?: boolean;

  /**
   * Optional. True, if the user is allowed to create, rename, close, and reopen forum topics; for supergroups only
   * @type { boolean }
   * @memberof ChatAdministratorRights
   * @instance
   * @public
   */
  canManageTopics?: boolean;

  /**
   * Optional. True, if the administrator can manage direct messages of the channel and decline suggested posts; for channels only
   * @type { boolean }
   * @memberof ChatAdministratorRights
   * @instance
   * @public
   */
  canManageDirectMessages?: boolean;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof ChatAdministratorRights
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof ChatAdministratorRights
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new ChatAdministratorRights instance from raw Telegram API data
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
