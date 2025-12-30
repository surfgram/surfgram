/**
 * PreparedInlineMessage class for Surfgram Telegram Bot SDK
 * @module types/preparedInlineMessage
 * @description Describes an inline message to be sent by a user of a Mini App.
 * @see {@link https://core.telegram.org/bots/api#preparedinlinemessage Telegram API Documentation}
 * @class PreparedInlineMessage
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a PreparedInlineMessage object from the Telegram Bot API
 * @class PreparedInlineMessage
 */
export class PreparedInlineMessage {
  /**
   * Unique identifier of the prepared message
   * @type { string }
   * @memberof PreparedInlineMessage
   * @instance
   * @public
   */
  id!: string;
  /**
   * Expiration date of the prepared message, in Unix time. Expired prepared messages can no longer be used
   * @type { number }
   * @memberof PreparedInlineMessage
   * @instance
   * @public
   */
  expirationDate!: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof PreparedInlineMessage
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof PreparedInlineMessage
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new PreparedInlineMessage instance from raw Telegram API data
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

      this.id = data.id;
      this.expirationDate = data.expirationDate;
    }
  }
}
