/**
 * RichBlockAnimation class for Surfgram Telegram Bot SDK
 * @module types/richBlockAnimation
 * @description A block with an animation, corresponding to the HTML tag &lt;video&gt;.
 * @see {@link https://core.telegram.org/bots/api#richblockanimation Telegram API Documentation}
 * @class RichBlockAnimation
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { Animation } from './animation';
import { RichBlockCaption } from './richBlockCaption';

/**
 * Represents a RichBlockAnimation object from the Telegram Bot API
 * @class RichBlockAnimation
 */
export class RichBlockAnimation {
  /**
   * Type of the block, always “animation”
   * @type { string }
   * @memberof RichBlockAnimation
   * @instance
   * @public
   */
  type!: string;

  /**
   * The animation
   * @type { Animation }
   * @memberof RichBlockAnimation
   * @instance
   * @public
   */
  animation!: Animation;

  /**
   * Optional. True, if the media preview is covered by a spoiler animation
   * @type { boolean }
   * @memberof RichBlockAnimation
   * @instance
   * @public
   */
  hasSpoiler?: boolean;

  /**
   * Optional. Caption of the block
   * @type { RichBlockCaption }
   * @memberof RichBlockAnimation
   * @instance
   * @public
   */
  caption?: RichBlockCaption;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof RichBlockAnimation
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof RichBlockAnimation
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new RichBlockAnimation instance from raw Telegram API data
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
