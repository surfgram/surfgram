/**
 * PassportElementErrorFrontSide class for Surfgram Telegram Bot SDK
 * @module types/passportElementErrorFrontSide
 * @description Represents an issue with the front side of a document. The error is considered resolved when the file with the front side of the document changes.
 * @see {@link https://core.telegram.org/bots/api#passportelementerrorfrontside Telegram API Documentation}
 * @class PassportElementErrorFrontSide
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a PassportElementErrorFrontSide object from the Telegram Bot API
 * @class PassportElementErrorFrontSide
 */
export class PassportElementErrorFrontSide {
  /**
   * Error source, must be front\_side
   * @type { string }
   * @memberof PassportElementErrorFrontSide
   * @instance
   * @public
   */
  source!: string;

  /**
   * The section of the user's Telegram Passport which has the issue, one of “passport”, “driver\_license”, “identity\_card”, “internal\_passport”
   * @type { string }
   * @memberof PassportElementErrorFrontSide
   * @instance
   * @public
   */
  type!: string;

  /**
   * Base64-encoded hash of the file with the front side of the document
   * @type { string }
   * @memberof PassportElementErrorFrontSide
   * @instance
   * @public
   */
  fileHash!: string;

  /**
   * Error message
   * @type { string }
   * @memberof PassportElementErrorFrontSide
   * @instance
   * @public
   */
  message!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof PassportElementErrorFrontSide
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof PassportElementErrorFrontSide
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new PassportElementErrorFrontSide instance from raw Telegram API data
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
