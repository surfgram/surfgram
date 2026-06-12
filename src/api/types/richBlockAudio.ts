/**
 * RichBlockAudio class for Surfgram Telegram Bot SDK
 * @module types/richBlockAudio
 * @description A block with a music file, corresponding to the HTML tag &lt;audio&gt;.
 * @see {@link https://core.telegram.org/bots/api#richblockaudio Telegram API Documentation}
 * @class RichBlockAudio
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { Audio } from './audio';
import { RichBlockCaption } from './richBlockCaption';

/**
 * Represents a RichBlockAudio object from the Telegram Bot API
 * @class RichBlockAudio
 */
export class RichBlockAudio {
  /**
   * Type of the block, always “audio”
   * @type { string }
   * @memberof RichBlockAudio
   * @instance
   * @public
   */
  type!: string;

  /**
   * The audio
   * @type { Audio }
   * @memberof RichBlockAudio
   * @instance
   * @public
   */
  audio!: Audio;

  /**
   * Optional. Caption of the block
   * @type { RichBlockCaption }
   * @memberof RichBlockAudio
   * @instance
   * @public
   */
  caption?: RichBlockCaption;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof RichBlockAudio
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof RichBlockAudio
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new RichBlockAudio instance from raw Telegram API data
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
