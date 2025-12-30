/**
 * MessageId class for Surfgram Telegram Bot SDK
 * @module types/messageId
 * @description This object represents a unique message identifier.
 * @see {@link https://core.telegram.org/bots/api#messageid Telegram API Documentation}
 * @class MessageId
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a MessageId object from the Telegram Bot API
 * @class MessageId
 */
export class MessageId {
  /**
   * Unique message identifier. In specific instances \(e.g., message containing a video sent to a big chat\), the server might automatically schedule a message instead of sending it immediately. In such cases, this field will be 0 and the relevant message will be unusable until it is actually sent
   * @type { number }
   * @memberof MessageId
   * @instance
   * @public
   */
  messageId!: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof MessageId
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof MessageId
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new MessageId instance from raw Telegram API data
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

      this.messageId = data.messageId;
    }
  }
}
