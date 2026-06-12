/**
 * RichBlockVideo class for Surfgram Telegram Bot SDK
 * @module types/richBlockVideo
 * @description A block with a video, corresponding to the HTML tag &lt;video&gt;.
 * @see {@link https://core.telegram.org/bots/api#richblockvideo Telegram API Documentation}
 * @class RichBlockVideo
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { Video } from './video';
import { RichBlockCaption } from './richBlockCaption';

/**
 * Represents a RichBlockVideo object from the Telegram Bot API
 * @class RichBlockVideo
 */
export class RichBlockVideo {
  /**
   * Type of the block, always “video”
   * @type { string }
   * @memberof RichBlockVideo
   * @instance
   * @public
   */
  type!: string;

  /**
   * The video
   * @type { Video }
   * @memberof RichBlockVideo
   * @instance
   * @public
   */
  video!: Video;

  /**
   * Optional. True, if the media preview is covered by a spoiler animation
   * @type { boolean }
   * @memberof RichBlockVideo
   * @instance
   * @public
   */
  hasSpoiler?: boolean;

  /**
   * Optional. Caption of the block
   * @type { RichBlockCaption }
   * @memberof RichBlockVideo
   * @instance
   * @public
   */
  caption?: RichBlockCaption;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof RichBlockVideo
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof RichBlockVideo
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new RichBlockVideo instance from raw Telegram API data
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
