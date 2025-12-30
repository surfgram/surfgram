/**
 * MessageOriginChannel class for Surfgram Telegram Bot SDK
 * @module types/messageOriginChannel
 * @description The message was originally sent to a channel chat.
 * @see {@link https://core.telegram.org/bots/api#messageoriginchannel Telegram API Documentation}
 * @class MessageOriginChannel
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { Chat } from './chat';

/**
 * Represents a MessageOriginChannel object from the Telegram Bot API
 * @class MessageOriginChannel
 */
export class MessageOriginChannel {
  /**
   * Type of the message origin, always “channel”
   * @type { string }
   * @memberof MessageOriginChannel
   * @instance
   * @public
   */
  type!: string;

  /**
   * Date the message was sent originally in Unix time
   * @type { number }
   * @memberof MessageOriginChannel
   * @instance
   * @public
   */
  date!: number;

  /**
   * Channel chat to which the message was originally sent
   * @type { Chat }
   * @memberof MessageOriginChannel
   * @instance
   * @public
   */
  chat!: Chat;

  /**
   * Unique message identifier inside the chat
   * @type { number }
   * @memberof MessageOriginChannel
   * @instance
   * @public
   */
  messageId!: number;

  /**
   * Optional. Signature of the original post author
   * @type { string }
   * @memberof MessageOriginChannel
   * @instance
   * @public
   */
  authorSignature?: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof MessageOriginChannel
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof MessageOriginChannel
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new MessageOriginChannel instance from raw Telegram API data
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
