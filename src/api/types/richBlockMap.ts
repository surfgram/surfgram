/**
 * RichBlockMap class for Surfgram Telegram Bot SDK
 * @module types/richBlockMap
 * @description A block with a map, corresponding to the custom HTML tag &lt;tg-map&gt;.
 * @see {@link https://core.telegram.org/bots/api#richblockmap Telegram API Documentation}
 * @class RichBlockMap
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { Location } from './location';
import { RichBlockCaption } from './richBlockCaption';

/**
 * Represents a RichBlockMap object from the Telegram Bot API
 * @class RichBlockMap
 */
export class RichBlockMap {
  /**
   * Type of the block, always “map”
   * @type { string }
   * @memberof RichBlockMap
   * @instance
   * @public
   */
  type!: string;

  /**
   * Location of the center of the map
   * @type { Location }
   * @memberof RichBlockMap
   * @instance
   * @public
   */
  location!: Location;

  /**
   * Map zoom level; 13-20
   * @type { number }
   * @memberof RichBlockMap
   * @instance
   * @public
   */
  zoom!: number;

  /**
   * Expected width of the map
   * @type { number }
   * @memberof RichBlockMap
   * @instance
   * @public
   */
  width!: number;

  /**
   * Expected height of the map
   * @type { number }
   * @memberof RichBlockMap
   * @instance
   * @public
   */
  height!: number;

  /**
   * Optional. Caption of the block
   * @type { RichBlockCaption }
   * @memberof RichBlockMap
   * @instance
   * @public
   */
  caption?: RichBlockCaption;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof RichBlockMap
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof RichBlockMap
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new RichBlockMap instance from raw Telegram API data
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
