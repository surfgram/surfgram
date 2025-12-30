/**
 * PassportElementErrorTranslationFiles class for Surfgram Telegram Bot SDK
 * @module types/passportElementErrorTranslationFiles
 * @description Represents an issue with the translated version of a document. The error is considered resolved when a file with the document translation change.
 * @see {@link https://core.telegram.org/bots/api#passportelementerrortranslationfiles Telegram API Documentation}
 * @class PassportElementErrorTranslationFiles
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a PassportElementErrorTranslationFiles object from the Telegram Bot API
 * @class PassportElementErrorTranslationFiles
 */
export class PassportElementErrorTranslationFiles {
  /**
   * Error source, must be translation\_files
   * @type { string }
   * @memberof PassportElementErrorTranslationFiles
   * @instance
   * @public
   */
  source!: string;
  /**
   * Type of element of the user's Telegram Passport which has the issue, one of “passport”, “driver\_license”, “identity\_card”, “internal\_passport”, “utility\_bill”, “bank\_statement”, “rental\_agreement”, “passport\_registration”, “temporary\_registration”
   * @type { string }
   * @memberof PassportElementErrorTranslationFiles
   * @instance
   * @public
   */
  type!: string;
  /**
   * List of base64-encoded file hashes
   * @type { string[] }
   * @memberof PassportElementErrorTranslationFiles
   * @instance
   * @public
   */
  fileHashes!: string[];
  /**
   * Error message
   * @type { string }
   * @memberof PassportElementErrorTranslationFiles
   * @instance
   * @public
   */
  message!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof PassportElementErrorTranslationFiles
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof PassportElementErrorTranslationFiles
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new PassportElementErrorTranslationFiles instance from raw Telegram API data
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
      this.fileHashes = data.fileHashes;
      this.message = data.message;
    }
  }
}
