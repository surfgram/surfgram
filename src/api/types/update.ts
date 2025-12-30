/**
 * Update class for Surfgram Telegram Bot SDK
 * @module types/update
 * @description This object represents an incoming update.At most one of the optional parameters can be present in any given update.
 * @see {@link https://core.telegram.org/bots/api#update Telegram API Documentation}
 * @class Update
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { Message } from './message';
import { BusinessConnection } from './businessConnection';
import { BusinessMessagesDeleted } from './businessMessagesDeleted';
import { MessageReactionUpdated } from './messageReactionUpdated';
import { MessageReactionCountUpdated } from './messageReactionCountUpdated';
import { InlineQuery } from './inlineQuery';
import { ChosenInlineResult } from './chosenInlineResult';
import { CallbackQuery } from './callbackQuery';
import { ShippingQuery } from './shippingQuery';
import { PreCheckoutQuery } from './preCheckoutQuery';
import { PaidMediaPurchased } from './paidMediaPurchased';
import { Poll } from './poll';
import { PollAnswer } from './pollAnswer';
import { ChatMemberUpdated } from './chatMemberUpdated';
import { ChatJoinRequest } from './chatJoinRequest';
import { ChatBoostUpdated } from './chatBoostUpdated';
import { ChatBoostRemoved } from './chatBoostRemoved';

/**
 * Represents a Update object from the Telegram Bot API
 * @class Update
 */
export class Update {
  /**
   * The update's unique identifier. Update identifiers start from a certain positive number and increase sequentially. This identifier becomes especially handy if you're using webhooks, since it allows you to ignore repeated updates or to restore the correct update sequence, should they get out of order. If there are no new updates for at least a week, then identifier of the next update will be chosen randomly instead of sequentially.
   * @type { number }
   * @memberof Update
   * @instance
   * @public
   */
  updateId!: number;
  /**
   * Optional. New incoming message of any kind - text, photo, sticker, etc.
   * @type { Message }
   * @memberof Update
   * @instance
   * @public
   */
  message?: Message;
  /**
   * Optional. New version of a message that is known to the bot and was edited. This update may at times be triggered by changes to message fields that are either unavailable or not actively used by your bot.
   * @type { Message }
   * @memberof Update
   * @instance
   * @public
   */
  editedMessage?: Message;
  /**
   * Optional. New incoming channel post of any kind - text, photo, sticker, etc.
   * @type { Message }
   * @memberof Update
   * @instance
   * @public
   */
  channelPost?: Message;
  /**
   * Optional. New version of a channel post that is known to the bot and was edited. This update may at times be triggered by changes to message fields that are either unavailable or not actively used by your bot.
   * @type { Message }
   * @memberof Update
   * @instance
   * @public
   */
  editedChannelPost?: Message;
  /**
   * Optional. The bot was connected to or disconnected from a business account, or a user edited an existing connection with the bot
   * @type { BusinessConnection }
   * @memberof Update
   * @instance
   * @public
   */
  businessConnection?: BusinessConnection;
  /**
   * Optional. New message from a connected business account
   * @type { Message }
   * @memberof Update
   * @instance
   * @public
   */
  businessMessage?: Message;
  /**
   * Optional. New version of a message from a connected business account
   * @type { Message }
   * @memberof Update
   * @instance
   * @public
   */
  editedBusinessMessage?: Message;
  /**
   * Optional. Messages were deleted from a connected business account
   * @type { BusinessMessagesDeleted }
   * @memberof Update
   * @instance
   * @public
   */
  deletedBusinessMessages?: BusinessMessagesDeleted;
  /**
   * Optional. A reaction to a message was changed by a user. The bot must be an administrator in the chat and must explicitly specify "message\_reaction" in the list of allowed\_updates to receive these updates. The update isn't received for reactions set by bots.
   * @type { MessageReactionUpdated }
   * @memberof Update
   * @instance
   * @public
   */
  messageReaction?: MessageReactionUpdated;
  /**
   * Optional. Reactions to a message with anonymous reactions were changed. The bot must be an administrator in the chat and must explicitly specify "message\_reaction\_count" in the list of allowed\_updates to receive these updates. The updates are grouped and can be sent with delay up to a few minutes.
   * @type { MessageReactionCountUpdated }
   * @memberof Update
   * @instance
   * @public
   */
  messageReactionCount?: MessageReactionCountUpdated;
  /**
   * Optional. New incoming inline query
   * @type { InlineQuery }
   * @memberof Update
   * @instance
   * @public
   */
  inlineQuery?: InlineQuery;
  /**
   * Optional. The result of an inline query that was chosen by a user and sent to their chat partner. Please see our documentation on the feedback collecting for details on how to enable these updates for your bot.
   * @type { ChosenInlineResult }
   * @memberof Update
   * @instance
   * @public
   */
  chosenInlineResult?: ChosenInlineResult;
  /**
   * Optional. New incoming callback query
   * @type { CallbackQuery }
   * @memberof Update
   * @instance
   * @public
   */
  callbackQuery?: CallbackQuery;
  /**
   * Optional. New incoming shipping query. Only for invoices with flexible price
   * @type { ShippingQuery }
   * @memberof Update
   * @instance
   * @public
   */
  shippingQuery?: ShippingQuery;
  /**
   * Optional. New incoming pre-checkout query. Contains full information about checkout
   * @type { PreCheckoutQuery }
   * @memberof Update
   * @instance
   * @public
   */
  preCheckoutQuery?: PreCheckoutQuery;
  /**
   * Optional. A user purchased paid media with a non-empty payload sent by the bot in a non-channel chat
   * @type { PaidMediaPurchased }
   * @memberof Update
   * @instance
   * @public
   */
  purchasedPaidMedia?: PaidMediaPurchased;
  /**
   * Optional. New poll state. Bots receive only updates about manually stopped polls and polls, which are sent by the bot
   * @type { Poll }
   * @memberof Update
   * @instance
   * @public
   */
  poll?: Poll;
  /**
   * Optional. A user changed their answer in a non-anonymous poll. Bots receive new votes only in polls that were sent by the bot itself.
   * @type { PollAnswer }
   * @memberof Update
   * @instance
   * @public
   */
  pollAnswer?: PollAnswer;
  /**
   * Optional. The bot's chat member status was updated in a chat. For private chats, this update is received only when the bot is blocked or unblocked by the user.
   * @type { ChatMemberUpdated }
   * @memberof Update
   * @instance
   * @public
   */
  myChatMember?: ChatMemberUpdated;
  /**
   * Optional. A chat member's status was updated in a chat. The bot must be an administrator in the chat and must explicitly specify "chat\_member" in the list of allowed\_updates to receive these updates.
   * @type { ChatMemberUpdated }
   * @memberof Update
   * @instance
   * @public
   */
  chatMember?: ChatMemberUpdated;
  /**
   * Optional. A request to join the chat has been sent. The bot must have the can\_invite\_users administrator right in the chat to receive these updates.
   * @type { ChatJoinRequest }
   * @memberof Update
   * @instance
   * @public
   */
  chatJoinRequest?: ChatJoinRequest;
  /**
   * Optional. A chat boost was added or changed. The bot must be an administrator in the chat to receive these updates.
   * @type { ChatBoostUpdated }
   * @memberof Update
   * @instance
   * @public
   */
  chatBoost?: ChatBoostUpdated;
  /**
   * Optional. A boost was removed from a chat. The bot must be an administrator in the chat to receive these updates.
   * @type { ChatBoostRemoved }
   * @memberof Update
   * @instance
   * @public
   */
  removedChatBoost?: ChatBoostRemoved;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof Update
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof Update
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new Update instance from raw Telegram API data
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

      this.updateId = data.updateId;
      this.message = data.message;
      this.editedMessage = data.editedMessage;
      this.channelPost = data.channelPost;
      this.editedChannelPost = data.editedChannelPost;
      this.businessConnection = data.businessConnection;
      this.businessMessage = data.businessMessage;
      this.editedBusinessMessage = data.editedBusinessMessage;
      this.deletedBusinessMessages = data.deletedBusinessMessages;
      this.messageReaction = data.messageReaction;
      this.messageReactionCount = data.messageReactionCount;
      this.inlineQuery = data.inlineQuery;
      this.chosenInlineResult = data.chosenInlineResult;
      this.callbackQuery = data.callbackQuery;
      this.shippingQuery = data.shippingQuery;
      this.preCheckoutQuery = data.preCheckoutQuery;
      this.purchasedPaidMedia = data.purchasedPaidMedia;
      this.poll = data.poll;
      this.pollAnswer = data.pollAnswer;
      this.myChatMember = data.myChatMember;
      this.chatMember = data.chatMember;
      this.chatJoinRequest = data.chatJoinRequest;
      this.chatBoost = data.chatBoost;
      this.removedChatBoost = data.removedChatBoost;
    }
  }
}
