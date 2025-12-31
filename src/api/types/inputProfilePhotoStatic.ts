/**
 * InputProfilePhotoStatic class for Surfgram Telegram Bot SDK
 * @module types/inputProfilePhotoStatic
 * @description A static profile photo in the .JPG format.
 * @see {@link https://core.telegram.org/bots/api#inputprofilephotostatic Telegram API Documentation}
 * @class InputProfilePhotoStatic
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a InputProfilePhotoStatic object from the Telegram Bot API
 * @class InputProfilePhotoStatic
 */
export class InputProfilePhotoStatic {
  /**
   * Type of the profile photo, must be static
   * @type { string }
   * @memberof InputProfilePhotoStatic
   * @instance
   * @public
   */
  type!: string;

  /**
   * The static profile photo. Profile photos can't be reused and can only be uploaded as a new file, so you can pass “attach://&lt;file\_attach\_name&gt;” if the photo was uploaded using multipart/form-data under &lt;file\_attach\_name&gt;. More information on Sending Files »
   * @type { string }
   * @memberof InputProfilePhotoStatic
   * @instance
   * @public
   */
  photo!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InputProfilePhotoStatic
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InputProfilePhotoStatic
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InputProfilePhotoStatic instance from raw Telegram API data
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
    this.bot = bot;
    const converted = snakeToCamel(raw);
    Object.assign(this, converted);
  }
}
