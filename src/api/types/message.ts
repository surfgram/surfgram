/**
 * Message class for Surfgram Telegram Bot SDK
 * @module types/message
 * @description This object represents a message.
 * @see {@link https://core.telegram.org/bots/api#message Telegram API Documentation}
 * @class Message
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { DirectMessagesTopic } from './directMessagesTopic';
import { User } from './user';
import { Chat } from './chat';
import { MessageOrigin } from './messageOrigin';
import { ExternalReplyInfo } from './externalReplyInfo';
import { TextQuote } from './textQuote';
import { Story } from './story';
import { MessageEntity } from './messageEntity';
import { LinkPreviewOptions } from './linkPreviewOptions';
import { SuggestedPostInfo } from './suggestedPostInfo';
import { Animation } from './animation';
import { Audio } from './audio';
import { Document } from './document';
import { PaidMediaInfo } from './paidMediaInfo';
import { PhotoSize } from './photoSize';
import { Sticker } from './sticker';
import { Video } from './video';
import { VideoNote } from './videoNote';
import { Voice } from './voice';
import { Checklist } from './checklist';
import { Contact } from './contact';
import { Dice } from './dice';
import { Game } from './game';
import { Poll } from './poll';
import { Venue } from './venue';
import { Location } from './location';
import { MessageAutoDeleteTimerChanged } from './messageAutoDeleteTimerChanged';
import { MaybeInaccessibleMessage } from './maybeInaccessibleMessage';
import { Invoice } from './invoice';
import { SuccessfulPayment } from './successfulPayment';
import { RefundedPayment } from './refundedPayment';
import { UsersShared } from './usersShared';
import { ChatShared } from './chatShared';
import { GiftInfo } from './giftInfo';
import { UniqueGiftInfo } from './uniqueGiftInfo';
import { WriteAccessAllowed } from './writeAccessAllowed';
import { PassportData } from './passportData';
import { ProximityAlertTriggered } from './proximityAlertTriggered';
import { ChatBoostAdded } from './chatBoostAdded';
import { ChatBackground } from './chatBackground';
import { ChecklistTasksDone } from './checklistTasksDone';
import { ChecklistTasksAdded } from './checklistTasksAdded';
import { DirectMessagePriceChanged } from './directMessagePriceChanged';
import { ForumTopicCreated } from './forumTopicCreated';
import { ForumTopicEdited } from './forumTopicEdited';
import { ForumTopicClosed } from './forumTopicClosed';
import { ForumTopicReopened } from './forumTopicReopened';
import { GeneralForumTopicHidden } from './generalForumTopicHidden';
import { GeneralForumTopicUnhidden } from './generalForumTopicUnhidden';
import { GiveawayCreated } from './giveawayCreated';
import { Giveaway } from './giveaway';
import { GiveawayWinners } from './giveawayWinners';
import { GiveawayCompleted } from './giveawayCompleted';
import { PaidMessagePriceChanged } from './paidMessagePriceChanged';
import { SuggestedPostApproved } from './suggestedPostApproved';
import { SuggestedPostApprovalFailed } from './suggestedPostApprovalFailed';
import { SuggestedPostDeclined } from './suggestedPostDeclined';
import { SuggestedPostPaid } from './suggestedPostPaid';
import { SuggestedPostRefunded } from './suggestedPostRefunded';
import { VideoChatScheduled } from './videoChatScheduled';
import { VideoChatStarted } from './videoChatStarted';
import { VideoChatEnded } from './videoChatEnded';
import { VideoChatParticipantsInvited } from './videoChatParticipantsInvited';
import { WebAppData } from './webAppData';
import { InlineKeyboardMarkup } from './inlineKeyboardMarkup';

/**
 * Represents a Message object from the Telegram Bot API
 * @class Message
 */
export class Message {
  /**
   * Unique message identifier inside this chat. In specific instances \(e.g., message containing a video sent to a big chat\), the server might automatically schedule a message instead of sending it immediately. In such cases, this field will be 0 and the relevant message will be unusable until it is actually sent
   * @type { number }
   * @memberof Message
   * @instance
   * @public
   */
  messageId!: number;

  /**
   * Optional. Unique identifier of a message thread to which the message belongs; for supergroups only
   * @type { number }
   * @memberof Message
   * @instance
   * @public
   */
  messageThreadId?: number;

  /**
   * Optional. Information about the direct messages chat topic that contains the message
   * @type { DirectMessagesTopic }
   * @memberof Message
   * @instance
   * @public
   */
  directMessagesTopic?: DirectMessagesTopic;

  /**
   * Optional. Sender of the message; may be empty for messages sent to channels. For backward compatibility, if the message was sent on behalf of a chat, the field contains a fake sender user in non-channel chats
   * @type { User }
   * @memberof Message
   * @instance
   * @public
   */
  from?: User;

  /**
   * Optional. Sender of the message when sent on behalf of a chat. For example, the supergroup itself for messages sent by its anonymous administrators or a linked channel for messages automatically forwarded to the channel's discussion group. For backward compatibility, if the message was sent on behalf of a chat, the field from contains a fake sender user in non-channel chats.
   * @type { Chat }
   * @memberof Message
   * @instance
   * @public
   */
  senderChat?: Chat;

  /**
   * Optional. If the sender of the message boosted the chat, the number of boosts added by the user
   * @type { number }
   * @memberof Message
   * @instance
   * @public
   */
  senderBoostCount?: number;

  /**
   * Optional. The bot that actually sent the message on behalf of the business account. Available only for outgoing messages sent on behalf of the connected business account.
   * @type { User }
   * @memberof Message
   * @instance
   * @public
   */
  senderBusinessBot?: User;

  /**
   * Date the message was sent in Unix time. It is always a positive number, representing a valid date.
   * @type { number }
   * @memberof Message
   * @instance
   * @public
   */
  date!: number;

  /**
   * Optional. Unique identifier of the business connection from which the message was received. If non-empty, the message belongs to a chat of the corresponding business account that is independent from any potential bot chat which might share the same identifier.
   * @type { string }
   * @memberof Message
   * @instance
   * @public
   */
  businessConnectionId?: string;

  /**
   * Chat the message belongs to
   * @type { Chat }
   * @memberof Message
   * @instance
   * @public
   */
  chat!: Chat;

  /**
   * Optional. Information about the original message for forwarded messages
   * @type { MessageOrigin }
   * @memberof Message
   * @instance
   * @public
   */
  forwardOrigin?: MessageOrigin;

  /**
   * Optional. True, if the message is sent to a forum topic
   * @type { boolean }
   * @memberof Message
   * @instance
   * @public
   */
  isTopicMessage?: boolean;

  /**
   * Optional. True, if the message is a channel post that was automatically forwarded to the connected discussion group
   * @type { boolean }
   * @memberof Message
   * @instance
   * @public
   */
  isAutomaticForward?: boolean;

  /**
   * Optional. For replies in the same chat and message thread, the original message. Note that the Message object in this field will not contain further reply\_to\_message fields even if it itself is a reply.
   * @type { Message }
   * @memberof Message
   * @instance
   * @public
   */
  replyToMessage?: Message;

  /**
   * Optional. Information about the message that is being replied to, which may come from another chat or forum topic
   * @type { ExternalReplyInfo }
   * @memberof Message
   * @instance
   * @public
   */
  externalReply?: ExternalReplyInfo;

  /**
   * Optional. For replies that quote part of the original message, the quoted part of the message
   * @type { TextQuote }
   * @memberof Message
   * @instance
   * @public
   */
  quote?: TextQuote;

  /**
   * Optional. For replies to a story, the original story
   * @type { Story }
   * @memberof Message
   * @instance
   * @public
   */
  replyToStory?: Story;

  /**
   * Optional. Identifier of the specific checklist task that is being replied to
   * @type { number }
   * @memberof Message
   * @instance
   * @public
   */
  replyToChecklistTaskId?: number;

  /**
   * Optional. Bot through which the message was sent
   * @type { User }
   * @memberof Message
   * @instance
   * @public
   */
  viaBot?: User;

  /**
   * Optional. Date the message was last edited in Unix time
   * @type { number }
   * @memberof Message
   * @instance
   * @public
   */
  editDate?: number;

  /**
   * Optional. True, if the message can't be forwarded
   * @type { boolean }
   * @memberof Message
   * @instance
   * @public
   */
  hasProtectedContent?: boolean;

  /**
   * Optional. True, if the message was sent by an implicit action, for example, as an away or a greeting business message, or as a scheduled message
   * @type { boolean }
   * @memberof Message
   * @instance
   * @public
   */
  isFromOffline?: boolean;

  /**
   * Optional. True, if the message is a paid post. Note that such posts must not be deleted for 24 hours to receive the payment and can't be edited.
   * @type { boolean }
   * @memberof Message
   * @instance
   * @public
   */
  isPaidPost?: boolean;

  /**
   * Optional. The unique identifier of a media message group this message belongs to
   * @type { string }
   * @memberof Message
   * @instance
   * @public
   */
  mediaGroupId?: string;

  /**
   * Optional. Signature of the post author for messages in channels, or the custom title of an anonymous group administrator
   * @type { string }
   * @memberof Message
   * @instance
   * @public
   */
  authorSignature?: string;

  /**
   * Optional. The number of Telegram Stars that were paid by the sender of the message to send it
   * @type { number }
   * @memberof Message
   * @instance
   * @public
   */
  paidStarCount?: number;

  /**
   * Optional. For text messages, the actual UTF-8 text of the message
   * @type { string }
   * @memberof Message
   * @instance
   * @public
   */
  text?: string;

  /**
   * Optional. For text messages, special entities like usernames, URLs, bot commands, etc. that appear in the text
   * @type { MessageEntity[] }
   * @memberof Message
   * @instance
   * @public
   */
  entities?: MessageEntity[];

  /**
   * Optional. Options used for link preview generation for the message, if it is a text message and link preview options were changed
   * @type { LinkPreviewOptions }
   * @memberof Message
   * @instance
   * @public
   */
  linkPreviewOptions?: LinkPreviewOptions;

  /**
   * Optional. Information about suggested post parameters if the message is a suggested post in a channel direct messages chat. If the message is an approved or declined suggested post, then it can't be edited.
   * @type { SuggestedPostInfo }
   * @memberof Message
   * @instance
   * @public
   */
  suggestedPostInfo?: SuggestedPostInfo;

  /**
   * Optional. Unique identifier of the message effect added to the message
   * @type { string }
   * @memberof Message
   * @instance
   * @public
   */
  effectId?: string;

  /**
   * Optional. Message is an animation, information about the animation. For backward compatibility, when this field is set, the document field will also be set
   * @type { Animation }
   * @memberof Message
   * @instance
   * @public
   */
  animation?: Animation;

  /**
   * Optional. Message is an audio file, information about the file
   * @type { Audio }
   * @memberof Message
   * @instance
   * @public
   */
  audio?: Audio;

  /**
   * Optional. Message is a general file, information about the file
   * @type { Document }
   * @memberof Message
   * @instance
   * @public
   */
  document?: Document;

  /**
   * Optional. Message contains paid media; information about the paid media
   * @type { PaidMediaInfo }
   * @memberof Message
   * @instance
   * @public
   */
  paidMedia?: PaidMediaInfo;

  /**
   * Optional. Message is a photo, available sizes of the photo
   * @type { PhotoSize[] }
   * @memberof Message
   * @instance
   * @public
   */
  photo?: PhotoSize[];

  /**
   * Optional. Message is a sticker, information about the sticker
   * @type { Sticker }
   * @memberof Message
   * @instance
   * @public
   */
  sticker?: Sticker;

  /**
   * Optional. Message is a forwarded story
   * @type { Story }
   * @memberof Message
   * @instance
   * @public
   */
  story?: Story;

  /**
   * Optional. Message is a video, information about the video
   * @type { Video }
   * @memberof Message
   * @instance
   * @public
   */
  video?: Video;

  /**
   * Optional. Message is a video note, information about the video message
   * @type { VideoNote }
   * @memberof Message
   * @instance
   * @public
   */
  videoNote?: VideoNote;

  /**
   * Optional. Message is a voice message, information about the file
   * @type { Voice }
   * @memberof Message
   * @instance
   * @public
   */
  voice?: Voice;

  /**
   * Optional. Caption for the animation, audio, document, paid media, photo, video or voice
   * @type { string }
   * @memberof Message
   * @instance
   * @public
   */
  caption?: string;

  /**
   * Optional. For messages with a caption, special entities like usernames, URLs, bot commands, etc. that appear in the caption
   * @type { MessageEntity[] }
   * @memberof Message
   * @instance
   * @public
   */
  captionEntities?: MessageEntity[];

  /**
   * Optional. True, if the caption must be shown above the message media
   * @type { boolean }
   * @memberof Message
   * @instance
   * @public
   */
  showCaptionAboveMedia?: boolean;

  /**
   * Optional. True, if the message media is covered by a spoiler animation
   * @type { boolean }
   * @memberof Message
   * @instance
   * @public
   */
  hasMediaSpoiler?: boolean;

  /**
   * Optional. Message is a checklist
   * @type { Checklist }
   * @memberof Message
   * @instance
   * @public
   */
  checklist?: Checklist;

  /**
   * Optional. Message is a shared contact, information about the contact
   * @type { Contact }
   * @memberof Message
   * @instance
   * @public
   */
  contact?: Contact;

  /**
   * Optional. Message is a dice with random value
   * @type { Dice }
   * @memberof Message
   * @instance
   * @public
   */
  dice?: Dice;

  /**
   * Optional. Message is a game, information about the game. More about games »
   * @type { Game }
   * @memberof Message
   * @instance
   * @public
   */
  game?: Game;

  /**
   * Optional. Message is a native poll, information about the poll
   * @type { Poll }
   * @memberof Message
   * @instance
   * @public
   */
  poll?: Poll;

  /**
   * Optional. Message is a venue, information about the venue. For backward compatibility, when this field is set, the location field will also be set
   * @type { Venue }
   * @memberof Message
   * @instance
   * @public
   */
  venue?: Venue;

  /**
   * Optional. Message is a shared location, information about the location
   * @type { Location }
   * @memberof Message
   * @instance
   * @public
   */
  location?: Location;

  /**
   * Optional. New members that were added to the group or supergroup and information about them \(the bot itself may be one of these members\)
   * @type { User[] }
   * @memberof Message
   * @instance
   * @public
   */
  newChatMembers?: User[];

  /**
   * Optional. A member was removed from the group, information about them \(this member may be the bot itself\)
   * @type { User }
   * @memberof Message
   * @instance
   * @public
   */
  leftChatMember?: User;

  /**
   * Optional. A chat title was changed to this value
   * @type { string }
   * @memberof Message
   * @instance
   * @public
   */
  newChatTitle?: string;

  /**
   * Optional. A chat photo was change to this value
   * @type { PhotoSize[] }
   * @memberof Message
   * @instance
   * @public
   */
  newChatPhoto?: PhotoSize[];

  /**
   * Optional. Service message: the chat photo was deleted
   * @type { boolean }
   * @memberof Message
   * @instance
   * @public
   */
  deleteChatPhoto?: boolean;

  /**
   * Optional. Service message: the group has been created
   * @type { boolean }
   * @memberof Message
   * @instance
   * @public
   */
  groupChatCreated?: boolean;

  /**
   * Optional. Service message: the supergroup has been created. This field can't be received in a message coming through updates, because bot can't be a member of a supergroup when it is created. It can only be found in reply\_to\_message if someone replies to a very first message in a directly created supergroup.
   * @type { boolean }
   * @memberof Message
   * @instance
   * @public
   */
  supergroupChatCreated?: boolean;

  /**
   * Optional. Service message: the channel has been created. This field can't be received in a message coming through updates, because bot can't be a member of a channel when it is created. It can only be found in reply\_to\_message if someone replies to a very first message in a channel.
   * @type { boolean }
   * @memberof Message
   * @instance
   * @public
   */
  channelChatCreated?: boolean;

  /**
   * Optional. Service message: auto-delete timer settings changed in the chat
   * @type { MessageAutoDeleteTimerChanged }
   * @memberof Message
   * @instance
   * @public
   */
  messageAutoDeleteTimerChanged?: MessageAutoDeleteTimerChanged;

  /**
   * Optional. The group has been migrated to a supergroup with the specified identifier. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier.
   * @type { number }
   * @memberof Message
   * @instance
   * @public
   */
  migrateToChatId?: number;

  /**
   * Optional. The supergroup has been migrated from a group with the specified identifier. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier.
   * @type { number }
   * @memberof Message
   * @instance
   * @public
   */
  migrateFromChatId?: number;

  /**
   * Optional. Specified message was pinned. Note that the Message object in this field will not contain further reply\_to\_message fields even if it itself is a reply.
   * @type { MaybeInaccessibleMessage }
   * @memberof Message
   * @instance
   * @public
   */
  pinnedMessage?: MaybeInaccessibleMessage;

  /**
   * Optional. Message is an invoice for a payment, information about the invoice. More about payments »
   * @type { Invoice }
   * @memberof Message
   * @instance
   * @public
   */
  invoice?: Invoice;

  /**
   * Optional. Message is a service message about a successful payment, information about the payment. More about payments »
   * @type { SuccessfulPayment }
   * @memberof Message
   * @instance
   * @public
   */
  successfulPayment?: SuccessfulPayment;

  /**
   * Optional. Message is a service message about a refunded payment, information about the payment. More about payments »
   * @type { RefundedPayment }
   * @memberof Message
   * @instance
   * @public
   */
  refundedPayment?: RefundedPayment;

  /**
   * Optional. Service message: users were shared with the bot
   * @type { UsersShared }
   * @memberof Message
   * @instance
   * @public
   */
  usersShared?: UsersShared;

  /**
   * Optional. Service message: a chat was shared with the bot
   * @type { ChatShared }
   * @memberof Message
   * @instance
   * @public
   */
  chatShared?: ChatShared;

  /**
   * Optional. Service message: a regular gift was sent or received
   * @type { GiftInfo }
   * @memberof Message
   * @instance
   * @public
   */
  gift?: GiftInfo;

  /**
   * Optional. Service message: a unique gift was sent or received
   * @type { UniqueGiftInfo }
   * @memberof Message
   * @instance
   * @public
   */
  uniqueGift?: UniqueGiftInfo;

  /**
   * Optional. The domain name of the website on which the user has logged in. More about Telegram Login »
   * @type { string }
   * @memberof Message
   * @instance
   * @public
   */
  connectedWebsite?: string;

  /**
   * Optional. Service message: the user allowed the bot to write messages after adding it to the attachment or side menu, launching a Web App from a link, or accepting an explicit request from a Web App sent by the method requestWriteAccess
   * @type { WriteAccessAllowed }
   * @memberof Message
   * @instance
   * @public
   */
  writeAccessAllowed?: WriteAccessAllowed;

  /**
   * Optional. Telegram Passport data
   * @type { PassportData }
   * @memberof Message
   * @instance
   * @public
   */
  passportData?: PassportData;

  /**
   * Optional. Service message. A user in the chat triggered another user's proximity alert while sharing Live Location.
   * @type { ProximityAlertTriggered }
   * @memberof Message
   * @instance
   * @public
   */
  proximityAlertTriggered?: ProximityAlertTriggered;

  /**
   * Optional. Service message: user boosted the chat
   * @type { ChatBoostAdded }
   * @memberof Message
   * @instance
   * @public
   */
  boostAdded?: ChatBoostAdded;

  /**
   * Optional. Service message: chat background set
   * @type { ChatBackground }
   * @memberof Message
   * @instance
   * @public
   */
  chatBackgroundSet?: ChatBackground;

  /**
   * Optional. Service message: some tasks in a checklist were marked as done or not done
   * @type { ChecklistTasksDone }
   * @memberof Message
   * @instance
   * @public
   */
  checklistTasksDone?: ChecklistTasksDone;

  /**
   * Optional. Service message: tasks were added to a checklist
   * @type { ChecklistTasksAdded }
   * @memberof Message
   * @instance
   * @public
   */
  checklistTasksAdded?: ChecklistTasksAdded;

  /**
   * Optional. Service message: the price for paid messages in the corresponding direct messages chat of a channel has changed
   * @type { DirectMessagePriceChanged }
   * @memberof Message
   * @instance
   * @public
   */
  directMessagePriceChanged?: DirectMessagePriceChanged;

  /**
   * Optional. Service message: forum topic created
   * @type { ForumTopicCreated }
   * @memberof Message
   * @instance
   * @public
   */
  forumTopicCreated?: ForumTopicCreated;

  /**
   * Optional. Service message: forum topic edited
   * @type { ForumTopicEdited }
   * @memberof Message
   * @instance
   * @public
   */
  forumTopicEdited?: ForumTopicEdited;

  /**
   * Optional. Service message: forum topic closed
   * @type { ForumTopicClosed }
   * @memberof Message
   * @instance
   * @public
   */
  forumTopicClosed?: ForumTopicClosed;

  /**
   * Optional. Service message: forum topic reopened
   * @type { ForumTopicReopened }
   * @memberof Message
   * @instance
   * @public
   */
  forumTopicReopened?: ForumTopicReopened;

  /**
   * Optional. Service message: the 'General' forum topic hidden
   * @type { GeneralForumTopicHidden }
   * @memberof Message
   * @instance
   * @public
   */
  generalForumTopicHidden?: GeneralForumTopicHidden;

  /**
   * Optional. Service message: the 'General' forum topic unhidden
   * @type { GeneralForumTopicUnhidden }
   * @memberof Message
   * @instance
   * @public
   */
  generalForumTopicUnhidden?: GeneralForumTopicUnhidden;

  /**
   * Optional. Service message: a scheduled giveaway was created
   * @type { GiveawayCreated }
   * @memberof Message
   * @instance
   * @public
   */
  giveawayCreated?: GiveawayCreated;

  /**
   * Optional. The message is a scheduled giveaway message
   * @type { Giveaway }
   * @memberof Message
   * @instance
   * @public
   */
  giveaway?: Giveaway;

  /**
   * Optional. A giveaway with public winners was completed
   * @type { GiveawayWinners }
   * @memberof Message
   * @instance
   * @public
   */
  giveawayWinners?: GiveawayWinners;

  /**
   * Optional. Service message: a giveaway without public winners was completed
   * @type { GiveawayCompleted }
   * @memberof Message
   * @instance
   * @public
   */
  giveawayCompleted?: GiveawayCompleted;

  /**
   * Optional. Service message: the price for paid messages has changed in the chat
   * @type { PaidMessagePriceChanged }
   * @memberof Message
   * @instance
   * @public
   */
  paidMessagePriceChanged?: PaidMessagePriceChanged;

  /**
   * Optional. Service message: a suggested post was approved
   * @type { SuggestedPostApproved }
   * @memberof Message
   * @instance
   * @public
   */
  suggestedPostApproved?: SuggestedPostApproved;

  /**
   * Optional. Service message: approval of a suggested post has failed
   * @type { SuggestedPostApprovalFailed }
   * @memberof Message
   * @instance
   * @public
   */
  suggestedPostApprovalFailed?: SuggestedPostApprovalFailed;

  /**
   * Optional. Service message: a suggested post was declined
   * @type { SuggestedPostDeclined }
   * @memberof Message
   * @instance
   * @public
   */
  suggestedPostDeclined?: SuggestedPostDeclined;

  /**
   * Optional. Service message: payment for a suggested post was received
   * @type { SuggestedPostPaid }
   * @memberof Message
   * @instance
   * @public
   */
  suggestedPostPaid?: SuggestedPostPaid;

  /**
   * Optional. Service message: payment for a suggested post was refunded
   * @type { SuggestedPostRefunded }
   * @memberof Message
   * @instance
   * @public
   */
  suggestedPostRefunded?: SuggestedPostRefunded;

  /**
   * Optional. Service message: video chat scheduled
   * @type { VideoChatScheduled }
   * @memberof Message
   * @instance
   * @public
   */
  videoChatScheduled?: VideoChatScheduled;

  /**
   * Optional. Service message: video chat started
   * @type { VideoChatStarted }
   * @memberof Message
   * @instance
   * @public
   */
  videoChatStarted?: VideoChatStarted;

  /**
   * Optional. Service message: video chat ended
   * @type { VideoChatEnded }
   * @memberof Message
   * @instance
   * @public
   */
  videoChatEnded?: VideoChatEnded;

  /**
   * Optional. Service message: new participants invited to a video chat
   * @type { VideoChatParticipantsInvited }
   * @memberof Message
   * @instance
   * @public
   */
  videoChatParticipantsInvited?: VideoChatParticipantsInvited;

  /**
   * Optional. Service message: data sent by a Web App
   * @type { WebAppData }
   * @memberof Message
   * @instance
   * @public
   */
  webAppData?: WebAppData;

  /**
   * Optional. Inline keyboard attached to the message. login\_url buttons are represented as ordinary url buttons.
   * @type { InlineKeyboardMarkup }
   * @memberof Message
   * @instance
   * @public
   */
  replyMarkup?: InlineKeyboardMarkup;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof Message
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof Message
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new Message instance from raw Telegram API data
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
