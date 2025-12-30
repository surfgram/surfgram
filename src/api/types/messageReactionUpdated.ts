/**
 * MessageReactionUpdated class for Surfgram Telegram Bot SDK
 * @module types/messageReactionUpdated
 * @description This object represents a change of a reaction on a message performed by a user.
 * @see {@link https://core.telegram.org/bots/api#messagereactionupdated Telegram API Documentation}
 * @class MessageReactionUpdated
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { Chat } from './chat';
import { User } from './user';
import { ReactionType } from './reactionType';

/**
 * Represents a MessageReactionUpdated object from the Telegram Bot API
 * @class MessageReactionUpdated
 */
export class MessageReactionUpdated {
  /**
   * The chat containing the message the user reacted to
   * @type { Chat }
   * @memberof MessageReactionUpdated
   * @instance
   * @public
   */
  chat!: Chat;
  /**
   * Unique identifier of the message inside the chat
   * @type { number }
   * @memberof MessageReactionUpdated
   * @instance
   * @public
   */
  messageId!: number;
  /**
   * Optional. The user that changed the reaction, if the user isn't anonymous
   * @type { User }
   * @memberof MessageReactionUpdated
   * @instance
   * @public
   */
  user?: User;
  /**
   * Optional. The chat on behalf of which the reaction was changed, if the user is anonymous
   * @type { Chat }
   * @memberof MessageReactionUpdated
   * @instance
   * @public
   */
  actorChat?: Chat;
  /**
   * Date of the change in Unix time
   * @type { number }
   * @memberof MessageReactionUpdated
   * @instance
   * @public
   */
  date!: number;
  /**
   * Previous list of reaction types that were set by the user
   * @type { ReactionType[] }
   * @memberof MessageReactionUpdated
   * @instance
   * @public
   */
  oldReaction!: ReactionType[];
  /**
   * New list of reaction types that have been set by the user
   * @type { ReactionType[] }
   * @memberof MessageReactionUpdated
   * @instance
   * @public
   */
  newReaction!: ReactionType[];

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof MessageReactionUpdated
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof MessageReactionUpdated
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new MessageReactionUpdated instance from raw Telegram API data
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
      this.messageId = data.messageId;
      this.user = data.user;
      this.actorChat = data.actorChat;
      this.date = data.date;
      this.oldReaction = data.oldReaction;
      this.newReaction = data.newReaction;
    }
  }
}
