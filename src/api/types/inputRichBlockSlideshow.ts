/**
 * InputRichBlockSlideshow class for Surfgram Telegram Bot SDK
 * @module types/inputRichBlockSlideshow
 * @description A slideshow, corresponding to the custom HTML tag &lt;tg-slideshow&gt;.
 * @see {@link https://core.telegram.org/bots/api#inputrichblockslideshow Telegram API Documentation}
 * @class InputRichBlockSlideshow
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { InputRichBlock } from './inputRichBlock';
import { RichBlockCaption } from './richBlockCaption';

/**
 * Represents a InputRichBlockSlideshow object from the Telegram Bot API
 * @class InputRichBlockSlideshow
 */
export class InputRichBlockSlideshow {
  /**
   * Type of the block, always “slideshow”
   * @type { string }
   * @memberof InputRichBlockSlideshow
   * @instance
   * @public
   */
  type!: string;

  /**
   * Elements of the slideshow
   * @type { InputRichBlock[] }
   * @memberof InputRichBlockSlideshow
   * @instance
   * @public
   */
  blocks!: InputRichBlock[];

  /**
   * Optional. Caption of the block
   * @type { RichBlockCaption }
   * @memberof InputRichBlockSlideshow
   * @instance
   * @public
   */
  caption?: RichBlockCaption;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InputRichBlockSlideshow
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InputRichBlockSlideshow
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InputRichBlockSlideshow instance from raw Telegram API data
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
