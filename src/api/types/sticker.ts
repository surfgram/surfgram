/**
 * Sticker class for Surfgram Telegram Bot SDK
 * @module types/sticker
 * @description This object represents a sticker.
 * @see {@link https://core.telegram.org/bots/api#sticker Telegram API Documentation}
 * @class Sticker
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { PhotoSize } from './photoSize';
import { File } from './file';
import { MaskPosition } from './maskPosition';

/**
 * Represents a Sticker object from the Telegram Bot API
 * @class Sticker
 */
export class Sticker {
  /**
   * Identifier for this file, which can be used to download or reuse the file
   * @type { string }
   * @memberof Sticker
   * @instance
   * @public
   */
  fileId!: string;
  /**
   * Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
   * @type { string }
   * @memberof Sticker
   * @instance
   * @public
   */
  fileUniqueId!: string;
  /**
   * Type of the sticker, currently one of “regular”, “mask”, “custom\_emoji”. The type of the sticker is independent from its format, which is determined by the fields is\_animated and is\_video.
   * @type { string }
   * @memberof Sticker
   * @instance
   * @public
   */
  type!: string;
  /**
   * Sticker width
   * @type { number }
   * @memberof Sticker
   * @instance
   * @public
   */
  width!: number;
  /**
   * Sticker height
   * @type { number }
   * @memberof Sticker
   * @instance
   * @public
   */
  height!: number;
  /**
   * True, if the sticker is animated
   * @type { boolean }
   * @memberof Sticker
   * @instance
   * @public
   */
  isAnimated!: boolean;
  /**
   * True, if the sticker is a video sticker
   * @type { boolean }
   * @memberof Sticker
   * @instance
   * @public
   */
  isVideo!: boolean;
  /**
   * Optional. Sticker thumbnail in the .WEBP or .JPG format
   * @type { PhotoSize }
   * @memberof Sticker
   * @instance
   * @public
   */
  thumbnail?: PhotoSize;
  /**
   * Optional. Emoji associated with the sticker
   * @type { string }
   * @memberof Sticker
   * @instance
   * @public
   */
  emoji?: string;
  /**
   * Optional. Name of the sticker set to which the sticker belongs
   * @type { string }
   * @memberof Sticker
   * @instance
   * @public
   */
  setName?: string;
  /**
   * Optional. For premium regular stickers, premium animation for the sticker
   * @type { File }
   * @memberof Sticker
   * @instance
   * @public
   */
  premiumAnimation?: File;
  /**
   * Optional. For mask stickers, the position where the mask should be placed
   * @type { MaskPosition }
   * @memberof Sticker
   * @instance
   * @public
   */
  maskPosition?: MaskPosition;
  /**
   * Optional. For custom emoji stickers, unique identifier of the custom emoji
   * @type { string }
   * @memberof Sticker
   * @instance
   * @public
   */
  customEmojiId?: string;
  /**
   * Optional. True, if the sticker must be repainted to a text color in messages, the color of the Telegram Premium badge in emoji status, white color on chat photos, or another appropriate color in other places
   * @type { boolean }
   * @memberof Sticker
   * @instance
   * @public
   */
  needsRepainting?: boolean;
  /**
   * Optional. File size in bytes
   * @type { number }
   * @memberof Sticker
   * @instance
   * @public
   */
  fileSize?: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof Sticker
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof Sticker
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new Sticker instance from raw Telegram API data
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
      this.type = data.type;
      this.width = data.width;
      this.height = data.height;
      this.isAnimated = data.isAnimated;
      this.isVideo = data.isVideo;
      this.thumbnail = data.thumbnail;
      this.emoji = data.emoji;
      this.setName = data.setName;
      this.premiumAnimation = data.premiumAnimation;
      this.maskPosition = data.maskPosition;
      this.customEmojiId = data.customEmojiId;
      this.needsRepainting = data.needsRepainting;
      this.fileSize = data.fileSize;
    }
  }
}
