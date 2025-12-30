/**
 * MessageOrigin class for Surfgram Telegram Bot SDK
 * @module types/messageOrigin
 * @description This object describes the origin of a message. It can be one of
 * @see {@link https://core.telegram.org/bots/api#messageorigin Telegram API Documentation}
 * @class MessageOrigin
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { User } from './user';

/**
 * Represents a MessageOrigin object from the Telegram Bot API
 * @class MessageOrigin
 */
export class MessageOrigin {
  /**
   * Type of the message origin, always “user”
   * @type { string }
   * @memberof MessageOrigin
   * @instance
   * @public
   */
  type!: string;
  /**
   * Date the message was sent originally in Unix time
   * @type { number }
   * @memberof MessageOrigin
   * @instance
   * @public
   */
  date!: number;
  /**
   * User that sent the message originally
   * @type { User }
   * @memberof MessageOrigin
   * @instance
   * @public
   */
  senderUser!: User;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof MessageOrigin
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof MessageOrigin
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new MessageOrigin instance from raw Telegram API data
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

      this.type = data.type;
      this.date = data.date;
      this.senderUser = data.senderUser;
    }
  }
}
