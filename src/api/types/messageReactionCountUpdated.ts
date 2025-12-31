/**
 * MessageReactionCountUpdated class for Surfgram Telegram Bot SDK
 * @module types/messageReactionCountUpdated
 * @description This object represents reaction changes on a message with anonymous reactions.
 * @see {@link https://core.telegram.org/bots/api#messagereactioncountupdated Telegram API Documentation}
 * @class MessageReactionCountUpdated
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { Chat } from './chat';
import { ReactionCount } from './reactionCount';

/**
 * Represents a MessageReactionCountUpdated object from the Telegram Bot API
 * @class MessageReactionCountUpdated
 */
export class MessageReactionCountUpdated {
  /**
   * The chat containing the message
   * @type { Chat }
   * @memberof MessageReactionCountUpdated
   * @instance
   * @public
   */
  chat!: Chat;

  /**
   * Unique message identifier inside the chat
   * @type { number }
   * @memberof MessageReactionCountUpdated
   * @instance
   * @public
   */
  messageId!: number;

  /**
   * Date of the change in Unix time
   * @type { number }
   * @memberof MessageReactionCountUpdated
   * @instance
   * @public
   */
  date!: number;

  /**
   * List of reactions that are present on the message
   * @type { ReactionCount[] }
   * @memberof MessageReactionCountUpdated
   * @instance
   * @public
   */
  reactions!: ReactionCount[];

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof MessageReactionCountUpdated
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof MessageReactionCountUpdated
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new MessageReactionCountUpdated instance from raw Telegram API data
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
