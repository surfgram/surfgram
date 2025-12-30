/**
 * Document class for Surfgram Telegram Bot SDK
 * @module types/document
 * @description This object represents a general file \(as opposed to photos, voice messages and audio files\).
 * @see {@link https://core.telegram.org/bots/api#document Telegram API Documentation}
 * @class Document
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { PhotoSize } from './photoSize';

/**
 * Represents a Document object from the Telegram Bot API
 * @class Document
 */
export class Document {
  /**
   * Identifier for this file, which can be used to download or reuse the file
   * @type { string }
   * @memberof Document
   * @instance
   * @public
   */
  fileId!: string;
  /**
   * Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
   * @type { string }
   * @memberof Document
   * @instance
   * @public
   */
  fileUniqueId!: string;
  /**
   * Optional. Document thumbnail as defined by the sender
   * @type { PhotoSize }
   * @memberof Document
   * @instance
   * @public
   */
  thumbnail?: PhotoSize;
  /**
   * Optional. Original filename as defined by the sender
   * @type { string }
   * @memberof Document
   * @instance
   * @public
   */
  fileName?: string;
  /**
   * Optional. MIME type of the file as defined by the sender
   * @type { string }
   * @memberof Document
   * @instance
   * @public
   */
  mimeType?: string;
  /**
   * Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value.
   * @type { number }
   * @memberof Document
   * @instance
   * @public
   */
  fileSize?: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof Document
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof Document
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new Document instance from raw Telegram API data
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

      this.fileId = data.fileId;
      this.fileUniqueId = data.fileUniqueId;
      this.thumbnail = data.thumbnail;
      this.fileName = data.fileName;
      this.mimeType = data.mimeType;
      this.fileSize = data.fileSize;
    }
  }
}
