/**
 * InputMediaAnimation class for Surfgram Telegram Bot SDK
 * @module types/inputMediaAnimation
 * @description Represents an animation file \(GIF or H.264/MPEG-4 AVC video without sound\) to be sent.
 * @see {@link https://core.telegram.org/bots/api#inputmediaanimation Telegram API Documentation}
 * @class InputMediaAnimation
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { MessageEntity } from './messageEntity';

/**
 * Represents a InputMediaAnimation object from the Telegram Bot API
 * @class InputMediaAnimation
 */
export class InputMediaAnimation {
  /**
   * Type of the result, must be animation
   * @type { string }
   * @memberof InputMediaAnimation
   * @instance
   * @public
   */
  type!: string;

  /**
   * File to send. Pass a file\_id to send a file that exists on the Telegram servers \(recommended\), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://&lt;file\_attach\_name&gt;” to upload a new one using multipart/form-data under &lt;file\_attach\_name&gt; name. More information on Sending Files »
   * @type { string }
   * @memberof InputMediaAnimation
   * @instance
   * @public
   */
  media!: string;

  /**
   * Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://&lt;file\_attach\_name&gt;” if the thumbnail was uploaded using multipart/form-data under &lt;file\_attach\_name&gt;. More information on Sending Files »
   * @type { string }
   * @memberof InputMediaAnimation
   * @instance
   * @public
   */
  thumbnail?: string;

  /**
   * Optional. Caption of the animation to be sent, 0-1024 characters after entities parsing
   * @type { string }
   * @memberof InputMediaAnimation
   * @instance
   * @public
   */
  caption?: string;

  /**
   * Optional. Mode for parsing entities in the animation caption. See formatting options for more details.
   * @type { string }
   * @memberof InputMediaAnimation
   * @instance
   * @public
   */
  parseMode?: string;

  /**
   * Optional. List of special entities that appear in the caption, which can be specified instead of parse\_mode
   * @type { MessageEntity[] }
   * @memberof InputMediaAnimation
   * @instance
   * @public
   */
  captionEntities?: MessageEntity[];

  /**
   * Optional. Pass True, if the caption must be shown above the message media
   * @type { boolean }
   * @memberof InputMediaAnimation
   * @instance
   * @public
   */
  showCaptionAboveMedia?: boolean;

  /**
   * Optional. Animation width
   * @type { number }
   * @memberof InputMediaAnimation
   * @instance
   * @public
   */
  width?: number;

  /**
   * Optional. Animation height
   * @type { number }
   * @memberof InputMediaAnimation
   * @instance
   * @public
   */
  height?: number;

  /**
   * Optional. Animation duration in seconds
   * @type { number }
   * @memberof InputMediaAnimation
   * @instance
   * @public
   */
  duration?: number;

  /**
   * Optional. Pass True if the animation needs to be covered with a spoiler animation
   * @type { boolean }
   * @memberof InputMediaAnimation
   * @instance
   * @public
   */
  hasSpoiler?: boolean;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InputMediaAnimation
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InputMediaAnimation
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InputMediaAnimation instance from raw Telegram API data
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
