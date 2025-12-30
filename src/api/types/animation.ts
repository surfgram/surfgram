/**
 * Animation class for Surfgram Telegram Bot SDK
 * @module types/animation
 * @description This object represents an animation file \(GIF or H.264/MPEG-4 AVC video without sound\).
 * @see {@link https://core.telegram.org/bots/api#animation Telegram API Documentation}
 * @class Animation
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { PhotoSize } from './photoSize';

/**
 * Represents a Animation object from the Telegram Bot API
 * @class Animation
 */
export class Animation {
  /**
   * Identifier for this file, which can be used to download or reuse the file
   * @type { string }
   * @memberof Animation
   * @instance
   * @public
   */
  fileId!: string;
  /**
   * Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
   * @type { string }
   * @memberof Animation
   * @instance
   * @public
   */
  fileUniqueId!: string;
  /**
   * Video width as defined by the sender
   * @type { number }
   * @memberof Animation
   * @instance
   * @public
   */
  width!: number;
  /**
   * Video height as defined by the sender
   * @type { number }
   * @memberof Animation
   * @instance
   * @public
   */
  height!: number;
  /**
   * Duration of the video in seconds as defined by the sender
   * @type { number }
   * @memberof Animation
   * @instance
   * @public
   */
  duration!: number;
  /**
   * Optional. Animation thumbnail as defined by the sender
   * @type { PhotoSize }
   * @memberof Animation
   * @instance
   * @public
   */
  thumbnail?: PhotoSize;
  /**
   * Optional. Original animation filename as defined by the sender
   * @type { string }
   * @memberof Animation
   * @instance
   * @public
   */
  fileName?: string;
  /**
   * Optional. MIME type of the file as defined by the sender
   * @type { string }
   * @memberof Animation
   * @instance
   * @public
   */
  mimeType?: string;
  /**
   * Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value.
   * @type { number }
   * @memberof Animation
   * @instance
   * @public
   */
  fileSize?: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof Animation
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof Animation
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new Animation instance from raw Telegram API data
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
      this.width = data.width;
      this.height = data.height;
      this.duration = data.duration;
      this.thumbnail = data.thumbnail;
      this.fileName = data.fileName;
      this.mimeType = data.mimeType;
      this.fileSize = data.fileSize;
    }
  }
}
