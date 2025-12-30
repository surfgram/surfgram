/**
 * Video class for Surfgram Telegram Bot SDK
 * @module types/video
 * @description This object represents a video file.
 * @see {@link https://core.telegram.org/bots/api#video Telegram API Documentation}
 * @class Video
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { PhotoSize } from './photoSize';

/**
 * Represents a Video object from the Telegram Bot API
 * @class Video
 */
export class Video {
  /**
   * Identifier for this file, which can be used to download or reuse the file
   * @type { string }
   * @memberof Video
   * @instance
   * @public
   */
  fileId!: string;

  /**
   * Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
   * @type { string }
   * @memberof Video
   * @instance
   * @public
   */
  fileUniqueId!: string;

  /**
   * Video width as defined by the sender
   * @type { number }
   * @memberof Video
   * @instance
   * @public
   */
  width!: number;

  /**
   * Video height as defined by the sender
   * @type { number }
   * @memberof Video
   * @instance
   * @public
   */
  height!: number;

  /**
   * Duration of the video in seconds as defined by the sender
   * @type { number }
   * @memberof Video
   * @instance
   * @public
   */
  duration!: number;

  /**
   * Optional. Video thumbnail
   * @type { PhotoSize }
   * @memberof Video
   * @instance
   * @public
   */
  thumbnail?: PhotoSize;

  /**
   * Optional. Available sizes of the cover of the video in the message
   * @type { PhotoSize[] }
   * @memberof Video
   * @instance
   * @public
   */
  cover?: PhotoSize[];

  /**
   * Optional. Timestamp in seconds from which the video will play in the message
   * @type { number }
   * @memberof Video
   * @instance
   * @public
   */
  startTimestamp?: number;

  /**
   * Optional. Original filename as defined by the sender
   * @type { string }
   * @memberof Video
   * @instance
   * @public
   */
  fileName?: string;

  /**
   * Optional. MIME type of the file as defined by the sender
   * @type { string }
   * @memberof Video
   * @instance
   * @public
   */
  mimeType?: string;

  /**
   * Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value.
   * @type { number }
   * @memberof Video
   * @instance
   * @public
   */
  fileSize?: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof Video
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof Video
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new Video instance from raw Telegram API data
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
