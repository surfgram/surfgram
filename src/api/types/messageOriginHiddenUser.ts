/**
 * MessageOriginHiddenUser class for Surfgram Telegram Bot SDK
 * @module types/messageOriginHiddenUser
 * @description The message was originally sent by an unknown user.
 * @see {@link https://core.telegram.org/bots/api#messageoriginhiddenuser Telegram API Documentation}
 * @class MessageOriginHiddenUser
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a MessageOriginHiddenUser object from the Telegram Bot API
 * @class MessageOriginHiddenUser
 */
export class MessageOriginHiddenUser {
  /**
   * Type of the message origin, always “hidden\_user”
   * @type { string }
   * @memberof MessageOriginHiddenUser
   * @instance
   * @public
   */
  type!: string;
  /**
   * Date the message was sent originally in Unix time
   * @type { number }
   * @memberof MessageOriginHiddenUser
   * @instance
   * @public
   */
  date!: number;
  /**
   * Name of the user that sent the message originally
   * @type { string }
   * @memberof MessageOriginHiddenUser
   * @instance
   * @public
   */
  senderUserName!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof MessageOriginHiddenUser
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof MessageOriginHiddenUser
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new MessageOriginHiddenUser instance from raw Telegram API data
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

      this.type = data.type;
      this.date = data.date;
      this.senderUserName = data.senderUserName;
    }
  }
}
