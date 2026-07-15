/**
 * InputRichBlockVideo class for Surfgram Telegram Bot SDK
 * @module types/inputRichBlockVideo
 * @description A block with a video, corresponding to the HTML tag &lt;video&gt;.
 * @see {@link https://core.telegram.org/bots/api#inputrichblockvideo Telegram API Documentation}
 * @class InputRichBlockVideo
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { InputMediaVideo } from './inputMediaVideo';
import { RichBlockCaption } from './richBlockCaption';

/**
 * Represents a InputRichBlockVideo object from the Telegram Bot API
 * @class InputRichBlockVideo
 */
export class InputRichBlockVideo {
  /**
   * Type of the block, always “video”
   * @type { string }
   * @memberof InputRichBlockVideo
   * @instance
   * @public
   */
  type!: string;

  /**
   * The video. Caption is ignored.
   * @type { InputMediaVideo }
   * @memberof InputRichBlockVideo
   * @instance
   * @public
   */
  video!: InputMediaVideo;

  /**
   * Optional. Caption of the block
   * @type { RichBlockCaption }
   * @memberof InputRichBlockVideo
   * @instance
   * @public
   */
  caption?: RichBlockCaption;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InputRichBlockVideo
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InputRichBlockVideo
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InputRichBlockVideo instance from raw Telegram API data
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
