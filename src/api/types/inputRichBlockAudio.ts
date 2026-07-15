/**
 * InputRichBlockAudio class for Surfgram Telegram Bot SDK
 * @module types/inputRichBlockAudio
 * @description A block with a music file, corresponding to the HTML tag &lt;audio&gt;.
 * @see {@link https://core.telegram.org/bots/api#inputrichblockaudio Telegram API Documentation}
 * @class InputRichBlockAudio
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { InputMediaAudio } from './inputMediaAudio';
import { RichBlockCaption } from './richBlockCaption';

/**
 * Represents a InputRichBlockAudio object from the Telegram Bot API
 * @class InputRichBlockAudio
 */
export class InputRichBlockAudio {
  /**
   * Type of the block, always “audio”
   * @type { string }
   * @memberof InputRichBlockAudio
   * @instance
   * @public
   */
  type!: string;

  /**
   * The audio. Caption is ignored.
   * @type { InputMediaAudio }
   * @memberof InputRichBlockAudio
   * @instance
   * @public
   */
  audio!: InputMediaAudio;

  /**
   * Optional. Caption of the block
   * @type { RichBlockCaption }
   * @memberof InputRichBlockAudio
   * @instance
   * @public
   */
  caption?: RichBlockCaption;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InputRichBlockAudio
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InputRichBlockAudio
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InputRichBlockAudio instance from raw Telegram API data
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
