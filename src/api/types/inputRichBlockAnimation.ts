/**
 * InputRichBlockAnimation class for Surfgram Telegram Bot SDK
 * @module types/inputRichBlockAnimation
 * @description A block with an animation, corresponding to the HTML tag &lt;video&gt;.
 * @see {@link https://core.telegram.org/bots/api#inputrichblockanimation Telegram API Documentation}
 * @class InputRichBlockAnimation
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { InputMediaAnimation } from './inputMediaAnimation';
import { RichBlockCaption } from './richBlockCaption';

/**
 * Represents a InputRichBlockAnimation object from the Telegram Bot API
 * @class InputRichBlockAnimation
 */
export class InputRichBlockAnimation {
  /**
   * Type of the block, always “animation”
   * @type { string }
   * @memberof InputRichBlockAnimation
   * @instance
   * @public
   */
  type!: string;

  /**
   * The animation. Caption is ignored.
   * @type { InputMediaAnimation }
   * @memberof InputRichBlockAnimation
   * @instance
   * @public
   */
  animation!: InputMediaAnimation;

  /**
   * Optional. Caption of the block
   * @type { RichBlockCaption }
   * @memberof InputRichBlockAnimation
   * @instance
   * @public
   */
  caption?: RichBlockCaption;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InputRichBlockAnimation
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InputRichBlockAnimation
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InputRichBlockAnimation instance from raw Telegram API data
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
