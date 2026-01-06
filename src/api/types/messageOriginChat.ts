/**
 * MessageOriginChat class for Surfgram Telegram Bot SDK
 * @module types/messageOriginChat
 * @description The message was originally sent on behalf of a chat to a group chat.
 * @see {@link https://core.telegram.org/bots/api#messageoriginchat Telegram API Documentation}
 * @class MessageOriginChat
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { Chat } from './chat';

/**
 * Represents a MessageOriginChat object from the Telegram Bot API
 * @class MessageOriginChat
 */
export class MessageOriginChat {
  /**
   * Type of the message origin, always “chat”
   * @type { string }
   * @memberof MessageOriginChat
   * @instance
   * @public
   */
  type!: string;

  /**
   * Date the message was sent originally in Unix time
   * @type { number }
   * @memberof MessageOriginChat
   * @instance
   * @public
   */
  date!: number;

  /**
   * Chat that sent the message originally
   * @type { Chat }
   * @memberof MessageOriginChat
   * @instance
   * @public
   */
  senderChat!: Chat;

  /**
   * Optional. For messages originally sent by an anonymous chat administrator, original message author signature
   * @type { string }
   * @memberof MessageOriginChat
   * @instance
   * @public
   */
  authorSignature?: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof MessageOriginChat
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof MessageOriginChat
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new MessageOriginChat instance from raw Telegram API data
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
