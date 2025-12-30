/**
 * InputProfilePhotoAnimated class for Surfgram Telegram Bot SDK
 * @module types/inputProfilePhotoAnimated
 * @description An animated profile photo in the MPEG4 format.
 * @see {@link https://core.telegram.org/bots/api#inputprofilephotoanimated Telegram API Documentation}
 * @class InputProfilePhotoAnimated
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a InputProfilePhotoAnimated object from the Telegram Bot API
 * @class InputProfilePhotoAnimated
 */
export class InputProfilePhotoAnimated {
  /**
   * Type of the profile photo, must be animated
   * @type { string }
   * @memberof InputProfilePhotoAnimated
   * @instance
   * @public
   */
  type!: string;

  /**
   * The animated profile photo. Profile photos can't be reused and can only be uploaded as a new file, so you can pass “attach://&lt;file\_attach\_name&gt;” if the photo was uploaded using multipart/form-data under &lt;file\_attach\_name&gt;. More information on Sending Files »
   * @type { string }
   * @memberof InputProfilePhotoAnimated
   * @instance
   * @public
   */
  animation!: string;

  /**
   * Optional. Timestamp in seconds of the frame that will be used as the static profile photo. Defaults to 0.0.
   * @type { number }
   * @memberof InputProfilePhotoAnimated
   * @instance
   * @public
   */
  mainFrameTimestamp?: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InputProfilePhotoAnimated
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InputProfilePhotoAnimated
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InputProfilePhotoAnimated instance from raw Telegram API data
   * @constructor
   * @param {TelegramObject} raw - Raw data from Telegram API in JSON format
   * @param {Bot} bot - Bot instance for executing methods
   * @example
   * const message = new Message(rawData, botInstance);
   */
  constructor(raw?: TelegramObject, bot?: Bot) {
    this.raw = raw;
    this.bot = bot;
    const converted = snakeToCamel(raw);
    Object.assign(this, converted);
  }
}
