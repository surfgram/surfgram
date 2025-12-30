/**
 * Audio class for Surfgram Telegram Bot SDK
 * @module types/audio
 * @description This object represents an audio file to be treated as music by the Telegram clients.
 * @see {@link https://core.telegram.org/bots/api#audio Telegram API Documentation}
 * @class Audio
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { PhotoSize } from './photoSize';

/**
 * Represents a Audio object from the Telegram Bot API
 * @class Audio
 */
export class Audio {
  /**
   * Identifier for this file, which can be used to download or reuse the file
   * @type { string }
   * @memberof Audio
   * @instance
   * @public
   */
  fileId!: string;
  /**
   * Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
   * @type { string }
   * @memberof Audio
   * @instance
   * @public
   */
  fileUniqueId!: string;
  /**
   * Duration of the audio in seconds as defined by the sender
   * @type { number }
   * @memberof Audio
   * @instance
   * @public
   */
  duration!: number;
  /**
   * Optional. Performer of the audio as defined by the sender or by audio tags
   * @type { string }
   * @memberof Audio
   * @instance
   * @public
   */
  performer?: string;
  /**
   * Optional. Title of the audio as defined by the sender or by audio tags
   * @type { string }
   * @memberof Audio
   * @instance
   * @public
   */
  title?: string;
  /**
   * Optional. Original filename as defined by the sender
   * @type { string }
   * @memberof Audio
   * @instance
   * @public
   */
  fileName?: string;
  /**
   * Optional. MIME type of the file as defined by the sender
   * @type { string }
   * @memberof Audio
   * @instance
   * @public
   */
  mimeType?: string;
  /**
   * Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value.
   * @type { number }
   * @memberof Audio
   * @instance
   * @public
   */
  fileSize?: number;
  /**
   * Optional. Thumbnail of the album cover to which the music file belongs
   * @type { PhotoSize }
   * @memberof Audio
   * @instance
   * @public
   */
  thumbnail?: PhotoSize;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof Audio
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof Audio
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new Audio instance from raw Telegram API data
   * @constructor
   * @param {TelegramObject} raw - Raw data from Telegram API in JSON format
   * @param {Bot} bot - Bot instance for executing methods
   * @example
   * const message = new Message(rawData, botInstance);
   */
  constructor(raw?: TelegramObject, bot?: Bot) {
    this.raw = raw;
    this.bot = bot;

    if (raw) {
      const data = snakeToCamel(raw) as any;

      this.fileId = data.fileId;
      this.fileUniqueId = data.fileUniqueId;
      this.duration = data.duration;
      this.performer = data.performer;
      this.title = data.title;
      this.fileName = data.fileName;
      this.mimeType = data.mimeType;
      this.fileSize = data.fileSize;
      this.thumbnail = data.thumbnail;
    }
  }
}
