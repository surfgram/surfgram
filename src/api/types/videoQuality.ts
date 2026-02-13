/**
 * VideoQuality class for Surfgram Telegram Bot SDK
 * @module types/videoQuality
 * @description This object represents a video file of a specific quality.
 * @see {@link https://core.telegram.org/bots/api#videoquality Telegram API Documentation}
 * @class VideoQuality
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a VideoQuality object from the Telegram Bot API
 * @class VideoQuality
 */
export class VideoQuality {
  /**
   * Identifier for this file, which can be used to download or reuse the file
   * @type { string }
   * @memberof VideoQuality
   * @instance
   * @public
   */
  fileId!: string;

  /**
   * Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
   * @type { string }
   * @memberof VideoQuality
   * @instance
   * @public
   */
  fileUniqueId!: string;

  /**
   * Video width
   * @type { number }
   * @memberof VideoQuality
   * @instance
   * @public
   */
  width!: number;

  /**
   * Video height
   * @type { number }
   * @memberof VideoQuality
   * @instance
   * @public
   */
  height!: number;

  /**
   * Codec that was used to encode the video, for example, “h264”, “h265”, or “av01”
   * @type { string }
   * @memberof VideoQuality
   * @instance
   * @public
   */
  codec!: string;

  /**
   * Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value.
   * @type { number }
   * @memberof VideoQuality
   * @instance
   * @public
   */
  fileSize?: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof VideoQuality
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof VideoQuality
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new VideoQuality instance from raw Telegram API data
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
