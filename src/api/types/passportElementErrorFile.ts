/**
 * PassportElementErrorFile class for Surfgram Telegram Bot SDK
 * @module types/passportElementErrorFile
 * @description Represents an issue with a document scan. The error is considered resolved when the file with the document scan changes.
 * @see {@link https://core.telegram.org/bots/api#passportelementerrorfile Telegram API Documentation}
 * @class PassportElementErrorFile
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a PassportElementErrorFile object from the Telegram Bot API
 * @class PassportElementErrorFile
 */
export class PassportElementErrorFile {
  /**
   * Error source, must be file
   * @type { string }
   * @memberof PassportElementErrorFile
   * @instance
   * @public
   */
  source!: string;

  /**
   * The section of the user's Telegram Passport which has the issue, one of “utility\_bill”, “bank\_statement”, “rental\_agreement”, “passport\_registration”, “temporary\_registration”
   * @type { string }
   * @memberof PassportElementErrorFile
   * @instance
   * @public
   */
  type!: string;

  /**
   * Base64-encoded file hash
   * @type { string }
   * @memberof PassportElementErrorFile
   * @instance
   * @public
   */
  fileHash!: string;

  /**
   * Error message
   * @type { string }
   * @memberof PassportElementErrorFile
   * @instance
   * @public
   */
  message!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof PassportElementErrorFile
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof PassportElementErrorFile
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new PassportElementErrorFile instance from raw Telegram API data
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
