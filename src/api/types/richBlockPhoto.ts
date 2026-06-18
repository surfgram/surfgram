/**
 * RichBlockPhoto class for Surfgram Telegram Bot SDK
 * @module types/richBlockPhoto
 * @description A block with a photo, corresponding to the HTML tag &lt;img&gt;.
 * @see {@link https://core.telegram.org/bots/api#richblockphoto Telegram API Documentation}
 * @class RichBlockPhoto
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { PhotoSize } from './photoSize';
import { RichBlockCaption } from './richBlockCaption';

/**
 * Represents a RichBlockPhoto object from the Telegram Bot API
 * @class RichBlockPhoto
 */
export class RichBlockPhoto {
  /**
   * Type of the block, always “photo”
   * @type { string }
   * @memberof RichBlockPhoto
   * @instance
   * @public
   */
  type!: string;

  /**
   * Available sizes of the photo
   * @type { PhotoSize[] }
   * @memberof RichBlockPhoto
   * @instance
   * @public
   */
  photo!: PhotoSize[];

  /**
   * Optional. True, if the media preview is covered by a spoiler animation
   * @type { boolean }
   * @memberof RichBlockPhoto
   * @instance
   * @public
   */
  hasSpoiler?: boolean;

  /**
   * Optional. Caption of the block
   * @type { RichBlockCaption }
   * @memberof RichBlockPhoto
   * @instance
   * @public
   */
  caption?: RichBlockCaption;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof RichBlockPhoto
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof RichBlockPhoto
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new RichBlockPhoto instance from raw Telegram API data
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
