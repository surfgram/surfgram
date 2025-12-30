/**
 * PassportElementErrorReverseSide class for Surfgram Telegram Bot SDK
 * @module types/passportElementErrorReverseSide
 * @description Represents an issue with the reverse side of a document. The error is considered resolved when the file with reverse side of the document changes.
 * @see {@link https://core.telegram.org/bots/api#passportelementerrorreverseside Telegram API Documentation}
 * @class PassportElementErrorReverseSide
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a PassportElementErrorReverseSide object from the Telegram Bot API
 * @class PassportElementErrorReverseSide
 */
export class PassportElementErrorReverseSide {
  /**
   * Error source, must be reverse\_side
   * @type { string }
   * @memberof PassportElementErrorReverseSide
   * @instance
   * @public
   */
  source!: string;
  /**
   * The section of the user's Telegram Passport which has the issue, one of “driver\_license”, “identity\_card”
   * @type { string }
   * @memberof PassportElementErrorReverseSide
   * @instance
   * @public
   */
  type!: string;
  /**
   * Base64-encoded hash of the file with the reverse side of the document
   * @type { string }
   * @memberof PassportElementErrorReverseSide
   * @instance
   * @public
   */
  fileHash!: string;
  /**
   * Error message
   * @type { string }
   * @memberof PassportElementErrorReverseSide
   * @instance
   * @public
   */
  message!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof PassportElementErrorReverseSide
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof PassportElementErrorReverseSide
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new PassportElementErrorReverseSide instance from raw Telegram API data
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
      this.fileHash = data.fileHash;
      this.message = data.message;
    }
  }
}
