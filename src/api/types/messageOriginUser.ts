/**
 * MessageOriginUser class for Surfgram Telegram Bot SDK
 * @module types/messageOriginUser
 * @description The message was originally sent by a known user.
 * @see {@link https://core.telegram.org/bots/api#messageoriginuser Telegram API Documentation}
 * @class MessageOriginUser
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { User } from './user';

/**
 * Represents a MessageOriginUser object from the Telegram Bot API
 * @class MessageOriginUser
 */
export class MessageOriginUser {
  /**
   * Type of the message origin, always “user”
   * @type { string }
   * @memberof MessageOriginUser
   * @instance
   * @public
   */
  type!: string;
  /**
   * Date the message was sent originally in Unix time
   * @type { number }
   * @memberof MessageOriginUser
   * @instance
   * @public
   */
  date!: number;
  /**
   * User that sent the message originally
   * @type { User }
   * @memberof MessageOriginUser
   * @instance
   * @public
   */
  senderUser!: User;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof MessageOriginUser
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof MessageOriginUser
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new MessageOriginUser instance from raw Telegram API data
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
