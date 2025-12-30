/**
 * StickerSet class for Surfgram Telegram Bot SDK
 * @module types/stickerSet
 * @description This object represents a sticker set.
 * @see {@link https://core.telegram.org/bots/api#stickerset Telegram API Documentation}
 * @class StickerSet
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { Sticker } from './sticker';
import { PhotoSize } from './photoSize';

/**
 * Represents a StickerSet object from the Telegram Bot API
 * @class StickerSet
 */
export class StickerSet {
  /**
   * Sticker set name
   * @type { string }
   * @memberof StickerSet
   * @instance
   * @public
   */
  name!: string;
  /**
   * Sticker set title
   * @type { string }
   * @memberof StickerSet
   * @instance
   * @public
   */
  title!: string;
  /**
   * Type of stickers in the set, currently one of “regular”, “mask”, “custom\_emoji”
   * @type { string }
   * @memberof StickerSet
   * @instance
   * @public
   */
  stickerType!: string;
  /**
   * List of all set stickers
   * @type { Sticker[] }
   * @memberof StickerSet
   * @instance
   * @public
   */
  stickers!: Sticker[];
  /**
   * Optional. Sticker set thumbnail in the .WEBP, .TGS, or .WEBM format
   * @type { PhotoSize }
   * @memberof StickerSet
   * @instance
   * @public
   */
  thumbnail?: PhotoSize;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof StickerSet
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof StickerSet
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new StickerSet instance from raw Telegram API data
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

      this.name = data.name;
      this.title = data.title;
      this.stickerType = data.stickerType;
      this.stickers = data.stickers;
      this.thumbnail = data.thumbnail;
    }
  }
}
