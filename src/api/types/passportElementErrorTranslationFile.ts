/**
 * PassportElementErrorTranslationFile class for Surfgram Telegram Bot SDK
 * @module types/passportElementErrorTranslationFile
 * @description Represents an issue with one of the files that constitute the translation of a document. The error is considered resolved when the file changes.
 * @see {@link https://core.telegram.org/bots/api#passportelementerrortranslationfile Telegram API Documentation}
 * @class PassportElementErrorTranslationFile
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a PassportElementErrorTranslationFile object from the Telegram Bot API
 * @class PassportElementErrorTranslationFile
 */
export class PassportElementErrorTranslationFile {
  /**
   * Error source, must be translation\_file
   * @type { string }
   * @memberof PassportElementErrorTranslationFile
   * @instance
   * @public
   */
  source!: string;

  /**
   * Type of element of the user's Telegram Passport which has the issue, one of “passport”, “driver\_license”, “identity\_card”, “internal\_passport”, “utility\_bill”, “bank\_statement”, “rental\_agreement”, “passport\_registration”, “temporary\_registration”
   * @type { string }
   * @memberof PassportElementErrorTranslationFile
   * @instance
   * @public
   */
  type!: string;

  /**
   * Base64-encoded file hash
   * @type { string }
   * @memberof PassportElementErrorTranslationFile
   * @instance
   * @public
   */
  fileHash!: string;

  /**
   * Error message
   * @type { string }
   * @memberof PassportElementErrorTranslationFile
   * @instance
   * @public
   */
  message!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof PassportElementErrorTranslationFile
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof PassportElementErrorTranslationFile
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new PassportElementErrorTranslationFile instance from raw Telegram API data
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
