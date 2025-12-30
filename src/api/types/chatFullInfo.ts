/**
 * ChatFullInfo class for Surfgram Telegram Bot SDK
 * @module types/chatFullInfo
 * @description This object contains full information about a chat.
 * @see {@link https://core.telegram.org/bots/api#chatfullinfo Telegram API Documentation}
 * @class ChatFullInfo
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { ChatPhoto } from './chatPhoto';
import { Birthdate } from './birthdate';
import { BusinessIntro } from './businessIntro';
import { BusinessLocation } from './businessLocation';
import { BusinessOpeningHours } from './businessOpeningHours';
import { Chat } from './chat';
import { ReactionType } from './reactionType';
import { Message } from './message';
import { ChatPermissions } from './chatPermissions';
import { AcceptedGiftTypes } from './acceptedGiftTypes';
import { ChatLocation } from './chatLocation';

/**
 * Represents a ChatFullInfo object from the Telegram Bot API
 * @class ChatFullInfo
 */
export class ChatFullInfo {
  /**
   * Unique identifier for this chat. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier.
   * @type { number }
   * @memberof ChatFullInfo
   * @instance
   * @public
   */
  id!: number;

  /**
   * Type of the chat, can be either “private”, “group”, “supergroup” or “channel”
   * @type { string }
   * @memberof ChatFullInfo
   * @instance
   * @public
   */
  type!: string;

  /**
   * Optional. Title, for supergroups, channels and group chats
   * @type { string }
   * @memberof ChatFullInfo
   * @instance
   * @public
   */
  title?: string;

  /**
   * Optional. Username, for private chats, supergroups and channels if available
   * @type { string }
   * @memberof ChatFullInfo
   * @instance
   * @public
   */
  username?: string;

  /**
   * Optional. First name of the other party in a private chat
   * @type { string }
   * @memberof ChatFullInfo
   * @instance
   * @public
   */
  firstName?: string;

  /**
   * Optional. Last name of the other party in a private chat
   * @type { string }
   * @memberof ChatFullInfo
   * @instance
   * @public
   */
  lastName?: string;

  /**
   * Optional. True, if the supergroup chat is a forum \(has topics enabled\)
   * @type { boolean }
   * @memberof ChatFullInfo
   * @instance
   * @public
   */
  isForum?: boolean;

  /**
   * Optional. True, if the chat is the direct messages chat of a channel
   * @type { boolean }
   * @memberof ChatFullInfo
   * @instance
   * @public
   */
  isDirectMessages?: boolean;

  /**
   * Identifier of the accent color for the chat name and backgrounds of the chat photo, reply header, and link preview. See accent colors for more details.
   * @type { number }
   * @memberof ChatFullInfo
   * @instance
   * @public
   */
  accentColorId!: number;

  /**
   * The maximum number of reactions that can be set on a message in the chat
   * @type { number }
   * @memberof ChatFullInfo
   * @instance
   * @public
   */
  maxReactionCount!: number;

  /**
   * Optional. Chat photo
   * @type { ChatPhoto }
   * @memberof ChatFullInfo
   * @instance
   * @public
   */
  photo?: ChatPhoto;

  /**
   * Optional. If non-empty, the list of all active chat usernames; for private chats, supergroups and channels
   * @type { string[] }
   * @memberof ChatFullInfo
   * @instance
   * @public
   */
  activeUsernames?: string[];

  /**
   * Optional. For private chats, the date of birth of the user
   * @type { Birthdate }
   * @memberof ChatFullInfo
   * @instance
   * @public
   */
  birthdate?: Birthdate;

  /**
   * Optional. For private chats with business accounts, the intro of the business
   * @type { BusinessIntro }
   * @memberof ChatFullInfo
   * @instance
   * @public
   */
  businessIntro?: BusinessIntro;

  /**
   * Optional. For private chats with business accounts, the location of the business
   * @type { BusinessLocation }
   * @memberof ChatFullInfo
   * @instance
   * @public
   */
  businessLocation?: BusinessLocation;

  /**
   * Optional. For private chats with business accounts, the opening hours of the business
   * @type { BusinessOpeningHours }
   * @memberof ChatFullInfo
   * @instance
   * @public
   */
  businessOpeningHours?: BusinessOpeningHours;

  /**
   * Optional. For private chats, the personal channel of the user
   * @type { Chat }
   * @memberof ChatFullInfo
   * @instance
   * @public
   */
  personalChat?: Chat;

  /**
   * Optional. Information about the corresponding channel chat; for direct messages chats only
   * @type { Chat }
   * @memberof ChatFullInfo
   * @instance
   * @public
   */
  parentChat?: Chat;

  /**
   * Optional. List of available reactions allowed in the chat. If omitted, then all emoji reactions are allowed.
   * @type { ReactionType[] }
   * @memberof ChatFullInfo
   * @instance
   * @public
   */
  availableReactions?: ReactionType[];

  /**
   * Optional. Custom emoji identifier of the emoji chosen by the chat for the reply header and link preview background
   * @type { string }
   * @memberof ChatFullInfo
   * @instance
   * @public
   */
  backgroundCustomEmojiId?: string;

  /**
   * Optional. Identifier of the accent color for the chat's profile background. See profile accent colors for more details.
   * @type { number }
   * @memberof ChatFullInfo
   * @instance
   * @public
   */
  profileAccentColorId?: number;

  /**
   * Optional. Custom emoji identifier of the emoji chosen by the chat for its profile background
   * @type { string }
   * @memberof ChatFullInfo
   * @instance
   * @public
   */
  profileBackgroundCustomEmojiId?: string;

  /**
   * Optional. Custom emoji identifier of the emoji status of the chat or the other party in a private chat
   * @type { string }
   * @memberof ChatFullInfo
   * @instance
   * @public
   */
  emojiStatusCustomEmojiId?: string;

  /**
   * Optional. Expiration date of the emoji status of the chat or the other party in a private chat, in Unix time, if any
   * @type { number }
   * @memberof ChatFullInfo
   * @instance
   * @public
   */
  emojiStatusExpirationDate?: number;

  /**
   * Optional. Bio of the other party in a private chat
   * @type { string }
   * @memberof ChatFullInfo
   * @instance
   * @public
   */
  bio?: string;

  /**
   * Optional. True, if privacy settings of the other party in the private chat allows to use tg://user?id=&lt;user\_id&gt; links only in chats with the user
   * @type { boolean }
   * @memberof ChatFullInfo
   * @instance
   * @public
   */
  hasPrivateForwards?: boolean;

  /**
   * Optional. True, if the privacy settings of the other party restrict sending voice and video note messages in the private chat
   * @type { boolean }
   * @memberof ChatFullInfo
   * @instance
   * @public
   */
  hasRestrictedVoiceAndVideoMessages?: boolean;

  /**
   * Optional. True, if users need to join the supergroup before they can send messages
   * @type { boolean }
   * @memberof ChatFullInfo
   * @instance
   * @public
   */
  joinToSendMessages?: boolean;

  /**
   * Optional. True, if all users directly joining the supergroup without using an invite link need to be approved by supergroup administrators
   * @type { boolean }
   * @memberof ChatFullInfo
   * @instance
   * @public
   */
  joinByRequest?: boolean;

  /**
   * Optional. Description, for groups, supergroups and channel chats
   * @type { string }
   * @memberof ChatFullInfo
   * @instance
   * @public
   */
  description?: string;

  /**
   * Optional. Primary invite link, for groups, supergroups and channel chats
   * @type { string }
   * @memberof ChatFullInfo
   * @instance
   * @public
   */
  inviteLink?: string;

  /**
   * Optional. The most recent pinned message \(by sending date\)
   * @type { Message }
   * @memberof ChatFullInfo
   * @instance
   * @public
   */
  pinnedMessage?: Message;

  /**
   * Optional. Default chat member permissions, for groups and supergroups
   * @type { ChatPermissions }
   * @memberof ChatFullInfo
   * @instance
   * @public
   */
  permissions?: ChatPermissions;

  /**
   * Information about types of gifts that are accepted by the chat or by the corresponding user for private chats
   * @type { AcceptedGiftTypes }
   * @memberof ChatFullInfo
   * @instance
   * @public
   */
  acceptedGiftTypes!: AcceptedGiftTypes;

  /**
   * Optional. True, if paid media messages can be sent or forwarded to the channel chat. The field is available only for channel chats.
   * @type { boolean }
   * @memberof ChatFullInfo
   * @instance
   * @public
   */
  canSendPaidMedia?: boolean;

  /**
   * Optional. For supergroups, the minimum allowed delay between consecutive messages sent by each unprivileged user; in seconds
   * @type { number }
   * @memberof ChatFullInfo
   * @instance
   * @public
   */
  slowModeDelay?: number;

  /**
   * Optional. For supergroups, the minimum number of boosts that a non-administrator user needs to add in order to ignore slow mode and chat permissions
   * @type { number }
   * @memberof ChatFullInfo
   * @instance
   * @public
   */
  unrestrictBoostCount?: number;

  /**
   * Optional. The time after which all messages sent to the chat will be automatically deleted; in seconds
   * @type { number }
   * @memberof ChatFullInfo
   * @instance
   * @public
   */
  messageAutoDeleteTime?: number;

  /**
   * Optional. True, if aggressive anti-spam checks are enabled in the supergroup. The field is only available to chat administrators.
   * @type { boolean }
   * @memberof ChatFullInfo
   * @instance
   * @public
   */
  hasAggressiveAntiSpamEnabled?: boolean;

  /**
   * Optional. True, if non-administrators can only get the list of bots and administrators in the chat
   * @type { boolean }
   * @memberof ChatFullInfo
   * @instance
   * @public
   */
  hasHiddenMembers?: boolean;

  /**
   * Optional. True, if messages from the chat can't be forwarded to other chats
   * @type { boolean }
   * @memberof ChatFullInfo
   * @instance
   * @public
   */
  hasProtectedContent?: boolean;

  /**
   * Optional. True, if new chat members will have access to old messages; available only to chat administrators
   * @type { boolean }
   * @memberof ChatFullInfo
   * @instance
   * @public
   */
  hasVisibleHistory?: boolean;

  /**
   * Optional. For supergroups, name of the group sticker set
   * @type { string }
   * @memberof ChatFullInfo
   * @instance
   * @public
   */
  stickerSetName?: string;

  /**
   * Optional. True, if the bot can change the group sticker set
   * @type { boolean }
   * @memberof ChatFullInfo
   * @instance
   * @public
   */
  canSetStickerSet?: boolean;

  /**
   * Optional. For supergroups, the name of the group's custom emoji sticker set. Custom emoji from this set can be used by all users and bots in the group.
   * @type { string }
   * @memberof ChatFullInfo
   * @instance
   * @public
   */
  customEmojiStickerSetName?: string;

  /**
   * Optional. Unique identifier for the linked chat, i.e. the discussion group identifier for a channel and vice versa; for supergroups and channel chats. This identifier may be greater than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier.
   * @type { number }
   * @memberof ChatFullInfo
   * @instance
   * @public
   */
  linkedChatId?: number;

  /**
   * Optional. For supergroups, the location to which the supergroup is connected
   * @type { ChatLocation }
   * @memberof ChatFullInfo
   * @instance
   * @public
   */
  location?: ChatLocation;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof ChatFullInfo
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof ChatFullInfo
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new ChatFullInfo instance from raw Telegram API data
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
