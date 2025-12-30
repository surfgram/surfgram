/**
 * PassportElementErrorUnspecified class for Surfgram Telegram Bot SDK
 * @module types/passportElementErrorUnspecified
 * @description Represents an issue in an unspecified place. The error is considered resolved when new data is added.
 * @see {@link https://core.telegram.org/bots/api#passportelementerrorunspecified Telegram API Documentation}
 * @class PassportElementErrorUnspecified
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a PassportElementErrorUnspecified object from the Telegram Bot API
 * @class PassportElementErrorUnspecified
 */
export class PassportElementErrorUnspecified {
  /**
   * Error source, must be unspecified
   * @type { string }
   * @memberof PassportElementErrorUnspecified
   * @instance
   * @public
   */
  source!: string;
  /**
   * Type of element of the user's Telegram Passport which has the issue
   * @type { string }
   * @memberof PassportElementErrorUnspecified
   * @instance
   * @public
   */
  type!: string;
  /**
   * Base64-encoded element hash
   * @type { string }
   * @memberof PassportElementErrorUnspecified
   * @instance
   * @public
   */
  elementHash!: string;
  /**
   * Error message
   * @type { string }
   * @memberof PassportElementErrorUnspecified
   * @instance
   * @public
   */
  message!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof PassportElementErrorUnspecified
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof PassportElementErrorUnspecified
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new PassportElementErrorUnspecified instance from raw Telegram API data
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

      this.source = data.source;
      this.type = data.type;
      this.elementHash = data.elementHash;
      this.message = data.message;
    }
  }
}
