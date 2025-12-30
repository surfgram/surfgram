/**
 * ChatPermissions class for Surfgram Telegram Bot SDK
 * @module types/chatPermissions
 * @description Describes actions that a non-administrator user is allowed to take in a chat.
 * @see {@link https://core.telegram.org/bots/api#chatpermissions Telegram API Documentation}
 * @class ChatPermissions
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a ChatPermissions object from the Telegram Bot API
 * @class ChatPermissions
 */
export class ChatPermissions {
  /**
   * Optional. True, if the user is allowed to send text messages, contacts, giveaways, giveaway winners, invoices, locations and venues
   * @type { boolean }
   * @memberof ChatPermissions
   * @instance
   * @public
   */
  canSendMessages?: boolean;
  /**
   * Optional. True, if the user is allowed to send audios
   * @type { boolean }
   * @memberof ChatPermissions
   * @instance
   * @public
   */
  canSendAudios?: boolean;
  /**
   * Optional. True, if the user is allowed to send documents
   * @type { boolean }
   * @memberof ChatPermissions
   * @instance
   * @public
   */
  canSendDocuments?: boolean;
  /**
   * Optional. True, if the user is allowed to send photos
   * @type { boolean }
   * @memberof ChatPermissions
   * @instance
   * @public
   */
  canSendPhotos?: boolean;
  /**
   * Optional. True, if the user is allowed to send videos
   * @type { boolean }
   * @memberof ChatPermissions
   * @instance
   * @public
   */
  canSendVideos?: boolean;
  /**
   * Optional. True, if the user is allowed to send video notes
   * @type { boolean }
   * @memberof ChatPermissions
   * @instance
   * @public
   */
  canSendVideoNotes?: boolean;
  /**
   * Optional. True, if the user is allowed to send voice notes
   * @type { boolean }
   * @memberof ChatPermissions
   * @instance
   * @public
   */
  canSendVoiceNotes?: boolean;
  /**
   * Optional. True, if the user is allowed to send polls and checklists
   * @type { boolean }
   * @memberof ChatPermissions
   * @instance
   * @public
   */
  canSendPolls?: boolean;
  /**
   * Optional. True, if the user is allowed to send animations, games, stickers and use inline bots
   * @type { boolean }
   * @memberof ChatPermissions
   * @instance
   * @public
   */
  canSendOtherMessages?: boolean;
  /**
   * Optional. True, if the user is allowed to add web page previews to their messages
   * @type { boolean }
   * @memberof ChatPermissions
   * @instance
   * @public
   */
  canAddWebPagePreviews?: boolean;
  /**
   * Optional. True, if the user is allowed to change the chat title, photo and other settings. Ignored in public supergroups
   * @type { boolean }
   * @memberof ChatPermissions
   * @instance
   * @public
   */
  canChangeInfo?: boolean;
  /**
   * Optional. True, if the user is allowed to invite new users to the chat
   * @type { boolean }
   * @memberof ChatPermissions
   * @instance
   * @public
   */
  canInviteUsers?: boolean;
  /**
   * Optional. True, if the user is allowed to pin messages. Ignored in public supergroups
   * @type { boolean }
   * @memberof ChatPermissions
   * @instance
   * @public
   */
  canPinMessages?: boolean;
  /**
   * Optional. True, if the user is allowed to create forum topics. If omitted defaults to the value of can\_pin\_messages
   * @type { boolean }
   * @memberof ChatPermissions
   * @instance
   * @public
   */
  canManageTopics?: boolean;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof ChatPermissions
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof ChatPermissions
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new ChatPermissions instance from raw Telegram API data
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

      this.canSendMessages = data.canSendMessages;
      this.canSendAudios = data.canSendAudios;
      this.canSendDocuments = data.canSendDocuments;
      this.canSendPhotos = data.canSendPhotos;
      this.canSendVideos = data.canSendVideos;
      this.canSendVideoNotes = data.canSendVideoNotes;
      this.canSendVoiceNotes = data.canSendVoiceNotes;
      this.canSendPolls = data.canSendPolls;
      this.canSendOtherMessages = data.canSendOtherMessages;
      this.canAddWebPagePreviews = data.canAddWebPagePreviews;
      this.canChangeInfo = data.canChangeInfo;
      this.canInviteUsers = data.canInviteUsers;
      this.canPinMessages = data.canPinMessages;
      this.canManageTopics = data.canManageTopics;
    }
  }
}
