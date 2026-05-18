/**
 * LivePhoto class for Surfgram Telegram Bot SDK
 * @module types/livePhoto
 * @description This object represents a live photo.
 * @see {@link https://core.telegram.org/bots/api#livephoto Telegram API Documentation}
 * @class LivePhoto
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { PhotoSize } from './photoSize';

/**
 * Represents a LivePhoto object from the Telegram Bot API
 * @class LivePhoto
 */
export class LivePhoto {
  /**
   * Optional. Available sizes of the corresponding static photo
   * @type { PhotoSize[] }
   * @memberof LivePhoto
   * @instance
   * @public
   */
  photo?: PhotoSize[];

  /**
   * Identifier for the video file which can be used to download or reuse the file
   * @type { string }
   * @memberof LivePhoto
   * @instance
   * @public
   */
  fileId!: string;

  /**
   * Unique identifier for the video file which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
   * @type { string }
   * @memberof LivePhoto
   * @instance
   * @public
   */
  fileUniqueId!: string;

  /**
   * Video width as defined by the sender
   * @type { number }
   * @memberof LivePhoto
   * @instance
   * @public
   */
  width!: number;

  /**
   * Video height as defined by the sender
   * @type { number }
   * @memberof LivePhoto
   * @instance
   * @public
   */
  height!: number;

  /**
   * Duration of the video in seconds as defined by the sender
   * @type { number }
   * @memberof LivePhoto
   * @instance
   * @public
   */
  duration!: number;

  /**
   * Optional. MIME type of the file as defined by the sender
   * @type { string }
   * @memberof LivePhoto
   * @instance
   * @public
   */
  mimeType?: string;

  /**
   * Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value.
   * @type { number }
   * @memberof LivePhoto
   * @instance
   * @public
   */
  fileSize?: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof LivePhoto
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof LivePhoto
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new LivePhoto instance from raw Telegram API data
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
    const converted = snakeToCamel(raw);
    Object.assign(this, converted);
    this.bot = bot;
  }
}
