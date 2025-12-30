/**
 * InputPaidMediaVideo class for Surfgram Telegram Bot SDK
 * @module types/inputPaidMediaVideo
 * @description The paid media to send is a video.
 * @see {@link https://core.telegram.org/bots/api#inputpaidmediavideo Telegram API Documentation}
 * @class InputPaidMediaVideo
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a InputPaidMediaVideo object from the Telegram Bot API
 * @class InputPaidMediaVideo
 */
export class InputPaidMediaVideo {
  /**
   * Type of the media, must be video
   * @type { string }
   * @memberof InputPaidMediaVideo
   * @instance
   * @public
   */
  type!: string;
  /**
   * File to send. Pass a file\_id to send a file that exists on the Telegram servers \(recommended\), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://&lt;file\_attach\_name&gt;” to upload a new one using multipart/form-data under &lt;file\_attach\_name&gt; name. More information on Sending Files »
   * @type { string }
   * @memberof InputPaidMediaVideo
   * @instance
   * @public
   */
  media!: string;
  /**
   * Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://&lt;file\_attach\_name&gt;” if the thumbnail was uploaded using multipart/form-data under &lt;file\_attach\_name&gt;. More information on Sending Files »
   * @type { string }
   * @memberof InputPaidMediaVideo
   * @instance
   * @public
   */
  thumbnail?: string;
  /**
   * Optional. Cover for the video in the message. Pass a file\_id to send a file that exists on the Telegram servers \(recommended\), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://&lt;file\_attach\_name&gt;” to upload a new one using multipart/form-data under &lt;file\_attach\_name&gt; name. More information on Sending Files »
   * @type { string }
   * @memberof InputPaidMediaVideo
   * @instance
   * @public
   */
  cover?: string;
  /**
   * Optional. Start timestamp for the video in the message
   * @type { number }
   * @memberof InputPaidMediaVideo
   * @instance
   * @public
   */
  startTimestamp?: number;
  /**
   * Optional. Video width
   * @type { number }
   * @memberof InputPaidMediaVideo
   * @instance
   * @public
   */
  width?: number;
  /**
   * Optional. Video height
   * @type { number }
   * @memberof InputPaidMediaVideo
   * @instance
   * @public
   */
  height?: number;
  /**
   * Optional. Video duration in seconds
   * @type { number }
   * @memberof InputPaidMediaVideo
   * @instance
   * @public
   */
  duration?: number;
  /**
   * Optional. Pass True if the uploaded video is suitable for streaming
   * @type { boolean }
   * @memberof InputPaidMediaVideo
   * @instance
   * @public
   */
  supportsStreaming?: boolean;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InputPaidMediaVideo
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InputPaidMediaVideo
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InputPaidMediaVideo instance from raw Telegram API data
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

    if (raw) {
      const data = snakeToCamel(raw) as any;

      this.type = data.type;
      this.media = data.media;
      this.thumbnail = data.thumbnail;
      this.cover = data.cover;
      this.startTimestamp = data.startTimestamp;
      this.width = data.width;
      this.height = data.height;
      this.duration = data.duration;
      this.supportsStreaming = data.supportsStreaming;
    }
  }
}
