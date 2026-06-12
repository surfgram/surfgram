/**
 * RichBlockCollage class for Surfgram Telegram Bot SDK
 * @module types/richBlockCollage
 * @description A collage, corresponding to the custom HTML tag &lt;tg-collage&gt;.
 * @see {@link https://core.telegram.org/bots/api#richblockcollage Telegram API Documentation}
 * @class RichBlockCollage
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { RichBlock } from './richBlock';
import { RichBlockCaption } from './richBlockCaption';

/**
 * Represents a RichBlockCollage object from the Telegram Bot API
 * @class RichBlockCollage
 */
export class RichBlockCollage {
  /**
   * Type of the block, always “collage”
   * @type { string }
   * @memberof RichBlockCollage
   * @instance
   * @public
   */
  type!: string;

  /**
   * Elements of the collage
   * @type { RichBlock[] }
   * @memberof RichBlockCollage
   * @instance
   * @public
   */
  blocks!: RichBlock[];

  /**
   * Optional. Caption of the block
   * @type { RichBlockCaption }
   * @memberof RichBlockCollage
   * @instance
   * @public
   */
  caption?: RichBlockCaption;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof RichBlockCollage
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof RichBlockCollage
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new RichBlockCollage instance from raw Telegram API data
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
