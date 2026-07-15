/**
 * InputRichBlockMap class for Surfgram Telegram Bot SDK
 * @module types/inputRichBlockMap
 * @description A block with a map, corresponding to the custom HTML tag &lt;tg-map&gt;. The map&#39;s width and height must not exceed 10000 in total. The width and height ratio must be at most 20.
 * @see {@link https://core.telegram.org/bots/api#inputrichblockmap Telegram API Documentation}
 * @class InputRichBlockMap
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { Location } from './location';
import { RichBlockCaption } from './richBlockCaption';

/**
 * Represents a InputRichBlockMap object from the Telegram Bot API
 * @class InputRichBlockMap
 */
export class InputRichBlockMap {
  /**
   * Type of the block, always “map”
   * @type { string }
   * @memberof InputRichBlockMap
   * @instance
   * @public
   */
  type!: string;

  /**
   * Location of the center of the map
   * @type { Location }
   * @memberof InputRichBlockMap
   * @instance
   * @public
   */
  location!: Location;

  /**
   * Map zoom level; 0-24
   * @type { number }
   * @memberof InputRichBlockMap
   * @instance
   * @public
   */
  zoom!: number;

  /**
   * Map width; 0-10000
   * @type { number }
   * @memberof InputRichBlockMap
   * @instance
   * @public
   */
  width!: number;

  /**
   * Map height; 0-10000
   * @type { number }
   * @memberof InputRichBlockMap
   * @instance
   * @public
   */
  height!: number;

  /**
   * Optional. Caption of the block
   * @type { RichBlockCaption }
   * @memberof InputRichBlockMap
   * @instance
   * @public
   */
  caption?: RichBlockCaption;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InputRichBlockMap
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InputRichBlockMap
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InputRichBlockMap instance from raw Telegram API data
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
