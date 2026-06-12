/**
 * RichBlockSlideshow class for Surfgram Telegram Bot SDK
 * @module types/richBlockSlideshow
 * @description A slideshow, corresponding to the custom HTML tag &lt;tg-slideshow&gt;.
 * @see {@link https://core.telegram.org/bots/api#richblockslideshow Telegram API Documentation}
 * @class RichBlockSlideshow
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { RichBlock } from './richBlock';
import { RichBlockCaption } from './richBlockCaption';

/**
 * Represents a RichBlockSlideshow object from the Telegram Bot API
 * @class RichBlockSlideshow
 */
export class RichBlockSlideshow {
  /**
   * Type of the block, always “slideshow”
   * @type { string }
   * @memberof RichBlockSlideshow
   * @instance
   * @public
   */
  type!: string;

  /**
   * Elements of the slideshow
   * @type { RichBlock[] }
   * @memberof RichBlockSlideshow
   * @instance
   * @public
   */
  blocks!: RichBlock[];

  /**
   * Optional. Caption of the block
   * @type { RichBlockCaption }
   * @memberof RichBlockSlideshow
   * @instance
   * @public
   */
  caption?: RichBlockCaption;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof RichBlockSlideshow
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof RichBlockSlideshow
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new RichBlockSlideshow instance from raw Telegram API data
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
