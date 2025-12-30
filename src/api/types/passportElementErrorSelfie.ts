/**
 * PassportElementErrorSelfie class for Surfgram Telegram Bot SDK
 * @module types/passportElementErrorSelfie
 * @description Represents an issue with the selfie with a document. The error is considered resolved when the file with the selfie changes.
 * @see {@link https://core.telegram.org/bots/api#passportelementerrorselfie Telegram API Documentation}
 * @class PassportElementErrorSelfie
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a PassportElementErrorSelfie object from the Telegram Bot API
 * @class PassportElementErrorSelfie
 */
export class PassportElementErrorSelfie {
  /**
   * Error source, must be selfie
   * @type { string }
   * @memberof PassportElementErrorSelfie
   * @instance
   * @public
   */
  source!: string;

  /**
   * The section of the user's Telegram Passport which has the issue, one of “passport”, “driver\_license”, “identity\_card”, “internal\_passport”
   * @type { string }
   * @memberof PassportElementErrorSelfie
   * @instance
   * @public
   */
  type!: string;

  /**
   * Base64-encoded hash of the file with the selfie
   * @type { string }
   * @memberof PassportElementErrorSelfie
   * @instance
   * @public
   */
  fileHash!: string;

  /**
   * Error message
   * @type { string }
   * @memberof PassportElementErrorSelfie
   * @instance
   * @public
   */
  message!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof PassportElementErrorSelfie
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof PassportElementErrorSelfie
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new PassportElementErrorSelfie instance from raw Telegram API data
   * @constructor
   * @param {TelegramObject} raw - Raw data from Telegram API in JSON format
   * @param {Bot} bot - Bot instance for executing methods
   * @example
   * const message = new Message(rawData, botInstance);
   */
  constructor(raw?: TelegramObject, bot?: Bot) {
    this.raw = raw;
    this.bot = bot;
    const converted = snakeToCamel(raw);
    Object.assign(this, converted);
  }
}
