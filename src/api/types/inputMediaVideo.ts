/**
 * InputMediaVideo class for Surfgram Telegram Bot SDK
 * @module types/inputMediaVideo
 * @description Represents a video to be sent.
 * @see {@link https://core.telegram.org/bots/api#inputmediavideo Telegram API Documentation}
 * @class InputMediaVideo
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { MessageEntity } from './messageEntity';

/**
 * Represents a InputMediaVideo object from the Telegram Bot API
 * @class InputMediaVideo
 */
export class InputMediaVideo {
  /**
   * Type of the result, must be video
   * @type { string }
   * @memberof InputMediaVideo
   * @instance
   * @public
   */
  type!: string;

  /**
   * File to send. Pass a file\_id to send a file that exists on the Telegram servers \(recommended\), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://&lt;file\_attach\_name&gt;” to upload a new one using multipart/form-data under &lt;file\_attach\_name&gt; name. More information on Sending Files »
   * @type { string }
   * @memberof InputMediaVideo
   * @instance
   * @public
   */
  media!: string;

  /**
   * Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://&lt;file\_attach\_name&gt;” if the thumbnail was uploaded using multipart/form-data under &lt;file\_attach\_name&gt;. More information on Sending Files »
   * @type { string }
   * @memberof InputMediaVideo
   * @instance
   * @public
   */
  thumbnail?: string;

  /**
   * Optional. Cover for the video in the message. Pass a file\_id to send a file that exists on the Telegram servers \(recommended\), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://&lt;file\_attach\_name&gt;” to upload a new one using multipart/form-data under &lt;file\_attach\_name&gt; name. More information on Sending Files »
   * @type { string }
   * @memberof InputMediaVideo
   * @instance
   * @public
   */
  cover?: string;

  /**
   * Optional. Start timestamp for the video in the message
   * @type { number }
   * @memberof InputMediaVideo
   * @instance
   * @public
   */
  startTimestamp?: number;

  /**
   * Optional. Caption of the video to be sent, 0-1024 characters after entities parsing
   * @type { string }
   * @memberof InputMediaVideo
   * @instance
   * @public
   */
  caption?: string;

  /**
   * Optional. Mode for parsing entities in the video caption. See formatting options for more details.
   * @type { string }
   * @memberof InputMediaVideo
   * @instance
   * @public
   */
  parseMode?: string;

  /**
   * Optional. List of special entities that appear in the caption, which can be specified instead of parse\_mode
   * @type { MessageEntity[] }
   * @memberof InputMediaVideo
   * @instance
   * @public
   */
  captionEntities?: MessageEntity[];

  /**
   * Optional. Pass True, if the caption must be shown above the message media
   * @type { boolean }
   * @memberof InputMediaVideo
   * @instance
   * @public
   */
  showCaptionAboveMedia?: boolean;

  /**
   * Optional. Video width
   * @type { number }
   * @memberof InputMediaVideo
   * @instance
   * @public
   */
  width?: number;

  /**
   * Optional. Video height
   * @type { number }
   * @memberof InputMediaVideo
   * @instance
   * @public
   */
  height?: number;

  /**
   * Optional. Video duration in seconds
   * @type { number }
   * @memberof InputMediaVideo
   * @instance
   * @public
   */
  duration?: number;

  /**
   * Optional. Pass True if the uploaded video is suitable for streaming
   * @type { boolean }
   * @memberof InputMediaVideo
   * @instance
   * @public
   */
  supportsStreaming?: boolean;

  /**
   * Optional. Pass True if the video needs to be covered with a spoiler animation
   * @type { boolean }
   * @memberof InputMediaVideo
   * @instance
   * @public
   */
  hasSpoiler?: boolean;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InputMediaVideo
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InputMediaVideo
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InputMediaVideo instance from raw Telegram API data
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
