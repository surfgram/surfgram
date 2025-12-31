/**
 * ChatMemberRestricted class for Surfgram Telegram Bot SDK
 * @module types/chatMemberRestricted
 * @description Represents a chat member that is under certain restrictions in the chat. Supergroups only.
 * @see {@link https://core.telegram.org/bots/api#chatmemberrestricted Telegram API Documentation}
 * @class ChatMemberRestricted
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { User } from './user';

/**
 * Represents a ChatMemberRestricted object from the Telegram Bot API
 * @class ChatMemberRestricted
 */
export class ChatMemberRestricted {
  /**
   * The member's status in the chat, always “restricted”
   * @type { string }
   * @memberof ChatMemberRestricted
   * @instance
   * @public
   */
  status!: string;

  /**
   * Information about the user
   * @type { User }
   * @memberof ChatMemberRestricted
   * @instance
   * @public
   */
  user!: User;

  /**
   * True, if the user is a member of the chat at the moment of the request
   * @type { boolean }
   * @memberof ChatMemberRestricted
   * @instance
   * @public
   */
  isMember!: boolean;

  /**
   * True, if the user is allowed to send text messages, contacts, giveaways, giveaway winners, invoices, locations and venues
   * @type { boolean }
   * @memberof ChatMemberRestricted
   * @instance
   * @public
   */
  canSendMessages!: boolean;

  /**
   * True, if the user is allowed to send audios
   * @type { boolean }
   * @memberof ChatMemberRestricted
   * @instance
   * @public
   */
  canSendAudios!: boolean;

  /**
   * True, if the user is allowed to send documents
   * @type { boolean }
   * @memberof ChatMemberRestricted
   * @instance
   * @public
   */
  canSendDocuments!: boolean;

  /**
   * True, if the user is allowed to send photos
   * @type { boolean }
   * @memberof ChatMemberRestricted
   * @instance
   * @public
   */
  canSendPhotos!: boolean;

  /**
   * True, if the user is allowed to send videos
   * @type { boolean }
   * @memberof ChatMemberRestricted
   * @instance
   * @public
   */
  canSendVideos!: boolean;

  /**
   * True, if the user is allowed to send video notes
   * @type { boolean }
   * @memberof ChatMemberRestricted
   * @instance
   * @public
   */
  canSendVideoNotes!: boolean;

  /**
   * True, if the user is allowed to send voice notes
   * @type { boolean }
   * @memberof ChatMemberRestricted
   * @instance
   * @public
   */
  canSendVoiceNotes!: boolean;

  /**
   * True, if the user is allowed to send polls and checklists
   * @type { boolean }
   * @memberof ChatMemberRestricted
   * @instance
   * @public
   */
  canSendPolls!: boolean;

  /**
   * True, if the user is allowed to send animations, games, stickers and use inline bots
   * @type { boolean }
   * @memberof ChatMemberRestricted
   * @instance
   * @public
   */
  canSendOtherMessages!: boolean;

  /**
   * True, if the user is allowed to add web page previews to their messages
   * @type { boolean }
   * @memberof ChatMemberRestricted
   * @instance
   * @public
   */
  canAddWebPagePreviews!: boolean;

  /**
   * True, if the user is allowed to change the chat title, photo and other settings
   * @type { boolean }
   * @memberof ChatMemberRestricted
   * @instance
   * @public
   */
  canChangeInfo!: boolean;

  /**
   * True, if the user is allowed to invite new users to the chat
   * @type { boolean }
   * @memberof ChatMemberRestricted
   * @instance
   * @public
   */
  canInviteUsers!: boolean;

  /**
   * True, if the user is allowed to pin messages
   * @type { boolean }
   * @memberof ChatMemberRestricted
   * @instance
   * @public
   */
  canPinMessages!: boolean;

  /**
   * True, if the user is allowed to create forum topics
   * @type { boolean }
   * @memberof ChatMemberRestricted
   * @instance
   * @public
   */
  canManageTopics!: boolean;

  /**
   * Date when restrictions will be lifted for this user; Unix time. If 0, then the user is restricted forever
   * @type { number }
   * @memberof ChatMemberRestricted
   * @instance
   * @public
   */
  untilDate!: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof ChatMemberRestricted
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof ChatMemberRestricted
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new ChatMemberRestricted instance from raw Telegram API data
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
