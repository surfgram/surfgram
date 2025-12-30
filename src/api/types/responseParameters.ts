/**
 * ResponseParameters class for Surfgram Telegram Bot SDK
 * @module types/responseParameters
 * @description Describes why a request was unsuccessful.
 * @see {@link https://core.telegram.org/bots/api#responseparameters Telegram API Documentation}
 * @class ResponseParameters
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a ResponseParameters object from the Telegram Bot API
 * @class ResponseParameters
 */
export class ResponseParameters {
  /**
   * Optional. The group has been migrated to a supergroup with the specified identifier. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier.
   * @type { number }
   * @memberof ResponseParameters
   * @instance
   * @public
   */
  migrateToChatId?: number;
  /**
   * Optional. In case of exceeding flood control, the number of seconds left to wait before the request can be repeated
   * @type { number }
   * @memberof ResponseParameters
   * @instance
   * @public
   */
  retryAfter?: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof ResponseParameters
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof ResponseParameters
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new ResponseParameters instance from raw Telegram API data
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

      this.migrateToChatId = data.migrateToChatId;
      this.retryAfter = data.retryAfter;
    }
  }
}
