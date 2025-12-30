/**
 * InputPaidMediaPhoto class for Surfgram Telegram Bot SDK
 * @module types/inputPaidMediaPhoto
 * @description The paid media to send is a photo.
 * @see {@link https://core.telegram.org/bots/api#inputpaidmediaphoto Telegram API Documentation}
 * @class InputPaidMediaPhoto
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a InputPaidMediaPhoto object from the Telegram Bot API
 * @class InputPaidMediaPhoto
 */
export class InputPaidMediaPhoto {
  /**
   * Type of the media, must be photo
   * @type { string }
   * @memberof InputPaidMediaPhoto
   * @instance
   * @public
   */
  type!: string;

  /**
   * File to send. Pass a file\_id to send a file that exists on the Telegram servers \(recommended\), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://&lt;file\_attach\_name&gt;” to upload a new one using multipart/form-data under &lt;file\_attach\_name&gt; name. More information on Sending Files »
   * @type { string }
   * @memberof InputPaidMediaPhoto
   * @instance
   * @public
   */
  media!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InputPaidMediaPhoto
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InputPaidMediaPhoto
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InputPaidMediaPhoto instance from raw Telegram API data
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
