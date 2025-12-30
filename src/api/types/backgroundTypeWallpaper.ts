/**
 * BackgroundTypeWallpaper class for Surfgram Telegram Bot SDK
 * @module types/backgroundTypeWallpaper
 * @description The background is a wallpaper in the JPEG format.
 * @see {@link https://core.telegram.org/bots/api#backgroundtypewallpaper Telegram API Documentation}
 * @class BackgroundTypeWallpaper
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { Document } from './document';

/**
 * Represents a BackgroundTypeWallpaper object from the Telegram Bot API
 * @class BackgroundTypeWallpaper
 */
export class BackgroundTypeWallpaper {
  /**
   * Type of the background, always “wallpaper”
   * @type { string }
   * @memberof BackgroundTypeWallpaper
   * @instance
   * @public
   */
  type!: string;

  /**
   * Document with the wallpaper
   * @type { Document }
   * @memberof BackgroundTypeWallpaper
   * @instance
   * @public
   */
  document!: Document;

  /**
   * Dimming of the background in dark themes, as a percentage; 0-100
   * @type { number }
   * @memberof BackgroundTypeWallpaper
   * @instance
   * @public
   */
  darkThemeDimming!: number;

  /**
   * Optional. True, if the wallpaper is downscaled to fit in a 450x450 square and then box-blurred with radius 12
   * @type { boolean }
   * @memberof BackgroundTypeWallpaper
   * @instance
   * @public
   */
  isBlurred?: boolean;

  /**
   * Optional. True, if the background moves slightly when the device is tilted
   * @type { boolean }
   * @memberof BackgroundTypeWallpaper
   * @instance
   * @public
   */
  isMoving?: boolean;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof BackgroundTypeWallpaper
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof BackgroundTypeWallpaper
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new BackgroundTypeWallpaper instance from raw Telegram API data
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
