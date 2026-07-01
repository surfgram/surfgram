/**
 * InputMediaLivePhoto class for Surfgram Telegram Bot SDK
 * @module types/inputMediaLivePhoto
 * @description Represents a live photo to be sent.
 * @see {@link https://core.telegram.org/bots/api#inputmedialivephoto Telegram API Documentation}
 * @class InputMediaLivePhoto
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { MessageEntity } from './messageEntity';

/**
 * Represents a InputMediaLivePhoto object from the Telegram Bot API
 * @class InputMediaLivePhoto
 */
export class InputMediaLivePhoto {
  /**
   * Type of the media, must be live\_photo
   * @type { string }
   * @memberof InputMediaLivePhoto
   * @instance
   * @public
   */
  type!: string;

  /**
   * Video of the live photo to send. Pass a file\_id to send a file that exists on the Telegram servers \(recommended\) or pass "attach://&lt;file\_attach\_name&gt;" to upload a new one using multipart/form-data under &lt;file\_attach\_name&gt; name. More information on Sending Files ». Sending live photos by a URL is currently unsupported.
   * @type { string }
   * @memberof InputMediaLivePhoto
   * @instance
   * @public
   */
  media!: string;

  /**
   * The static photo to send. Pass a file\_id to send a file that exists on the Telegram servers \(recommended\) or pass "attach://&lt;file\_attach\_name&gt;" to upload a new one using multipart/form-data under &lt;file\_attach\_name&gt; name. More information on Sending Files ». Sending live photos by a URL is currently unsupported.
   * @type { string }
   * @memberof InputMediaLivePhoto
   * @instance
   * @public
   */
  photo!: string;

  /**
   * Optional. Caption of the live photo to be sent, 0-1024 characters after entities parsing
   * @type { string }
   * @memberof InputMediaLivePhoto
   * @instance
   * @public
   */
  caption?: string;

  /**
   * Optional. Mode for parsing entities in the live photo caption. See formatting options for more details.
   * @type { string }
   * @memberof InputMediaLivePhoto
   * @instance
   * @public
   */
  parseMode?: string;

  /**
   * Optional. List of special entities that appear in the caption, which can be specified instead of parse\_mode
   * @type { MessageEntity[] }
   * @memberof InputMediaLivePhoto
   * @instance
   * @public
   */
  captionEntities?: MessageEntity[];

  /**
   * Optional. Pass True, if the caption must be shown above the message media
   * @type { boolean }
   * @memberof InputMediaLivePhoto
   * @instance
   * @public
   */
  showCaptionAboveMedia?: boolean;

  /**
   * Optional. Pass True if the live photo needs to be covered with a spoiler animation
   * @type { boolean }
   * @memberof InputMediaLivePhoto
   * @instance
   * @public
   */
  hasSpoiler?: boolean;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InputMediaLivePhoto
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InputMediaLivePhoto
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InputMediaLivePhoto instance from raw Telegram API data
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
