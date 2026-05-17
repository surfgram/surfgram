/**
 * InputPaidMediaLivePhoto class for Surfgram Telegram Bot SDK
 * @module types/inputPaidMediaLivePhoto
 * @description The paid media to send is a live photo.
 * @see {@link https://core.telegram.org/bots/api#inputpaidmedialivephoto Telegram API Documentation}
 * @class InputPaidMediaLivePhoto
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a InputPaidMediaLivePhoto object from the Telegram Bot API
 * @class InputPaidMediaLivePhoto
 */
export class InputPaidMediaLivePhoto {
  /**
   * Type of the media, must be live\_photo
   * @type { string }
   * @memberof InputPaidMediaLivePhoto
   * @instance
   * @public
   */
  type!: string;

  /**
   * Video of the live photo to send. Pass a file\_id to send a file that exists on the Telegram servers \(recommended\) or pass “attach://&lt;file\_attach\_name&gt;” to upload a new one using multipart/form-data under &lt;file\_attach\_name&gt; name. More information on Sending Files ». Sending live photos by a URL is currently unsupported.
   * @type { string }
   * @memberof InputPaidMediaLivePhoto
   * @instance
   * @public
   */
  media!: string;

  /**
   * The static photo to send. Pass a file\_id to send a file that exists on the Telegram servers \(recommended\) or pass “attach://&lt;file\_attach\_name&gt;” to upload a new one using multipart/form-data under &lt;file\_attach\_name&gt; name. More information on Sending Files ». Sending live photos by a URL is currently unsupported.
   * @type { string }
   * @memberof InputPaidMediaLivePhoto
   * @instance
   * @public
   */
  photo!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InputPaidMediaLivePhoto
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InputPaidMediaLivePhoto
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InputPaidMediaLivePhoto instance from raw Telegram API data
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
