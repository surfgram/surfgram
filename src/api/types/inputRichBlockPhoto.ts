/**
 * InputRichBlockPhoto class for Surfgram Telegram Bot SDK
 * @module types/inputRichBlockPhoto
 * @description A block with a photo, corresponding to the HTML tag &lt;img&gt;.
 * @see {@link https://core.telegram.org/bots/api#inputrichblockphoto Telegram API Documentation}
 * @class InputRichBlockPhoto
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { InputMediaPhoto } from './inputMediaPhoto';
import { RichBlockCaption } from './richBlockCaption';

/**
 * Represents a InputRichBlockPhoto object from the Telegram Bot API
 * @class InputRichBlockPhoto
 */
export class InputRichBlockPhoto {
  /**
   * Type of the block, always “photo”
   * @type { string }
   * @memberof InputRichBlockPhoto
   * @instance
   * @public
   */
  type!: string;

  /**
   * The photo. Caption is ignored.
   * @type { InputMediaPhoto }
   * @memberof InputRichBlockPhoto
   * @instance
   * @public
   */
  photo!: InputMediaPhoto;

  /**
   * Optional. Caption of the block
   * @type { RichBlockCaption }
   * @memberof InputRichBlockPhoto
   * @instance
   * @public
   */
  caption?: RichBlockCaption;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InputRichBlockPhoto
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InputRichBlockPhoto
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InputRichBlockPhoto instance from raw Telegram API data
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
