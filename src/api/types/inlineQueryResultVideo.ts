/**
 * InlineQueryResultVideo class for Surfgram Telegram Bot SDK
 * @module types/inlineQueryResultVideo
 * @description Represents a link to a page containing an embedded video player or a video file. By default, this video file will be sent by the user with an optional caption. Alternatively, you can use input\_message\_content to send a message with the specified content instead of the video.
 * @see {@link https://core.telegram.org/bots/api#inlinequeryresultvideo Telegram API Documentation}
 * @class InlineQueryResultVideo
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { MessageEntity } from './messageEntity';
import { InlineKeyboardMarkup } from './inlineKeyboardMarkup';
import { InputMessageContent } from './inputMessageContent';

/**
 * Represents a InlineQueryResultVideo object from the Telegram Bot API
 * @class InlineQueryResultVideo
 */
export class InlineQueryResultVideo {
  /**
   * Type of the result, must be video
   * @type { string }
   * @memberof InlineQueryResultVideo
   * @instance
   * @public
   */
  type!: string;

  /**
   * Unique identifier for this result, 1-64 bytes
   * @type { string }
   * @memberof InlineQueryResultVideo
   * @instance
   * @public
   */
  id!: string;

  /**
   * A valid URL for the embedded video player or video file
   * @type { string }
   * @memberof InlineQueryResultVideo
   * @instance
   * @public
   */
  videoUrl!: string;

  /**
   * MIME type of the content of the video URL, “text/html” or “video/mp4”
   * @type { string }
   * @memberof InlineQueryResultVideo
   * @instance
   * @public
   */
  mimeType!: string;

  /**
   * URL of the thumbnail \(JPEG only\) for the video
   * @type { string }
   * @memberof InlineQueryResultVideo
   * @instance
   * @public
   */
  thumbnailUrl!: string;

  /**
   * Title for the result
   * @type { string }
   * @memberof InlineQueryResultVideo
   * @instance
   * @public
   */
  title!: string;

  /**
   * Optional. Caption of the video to be sent, 0-1024 characters after entities parsing
   * @type { string }
   * @memberof InlineQueryResultVideo
   * @instance
   * @public
   */
  caption?: string;

  /**
   * Optional. Mode for parsing entities in the video caption. See formatting options for more details.
   * @type { string }
   * @memberof InlineQueryResultVideo
   * @instance
   * @public
   */
  parseMode?: string;

  /**
   * Optional. List of special entities that appear in the caption, which can be specified instead of parse\_mode
   * @type { MessageEntity[] }
   * @memberof InlineQueryResultVideo
   * @instance
   * @public
   */
  captionEntities?: MessageEntity[];

  /**
   * Optional. Pass True, if the caption must be shown above the message media
   * @type { boolean }
   * @memberof InlineQueryResultVideo
   * @instance
   * @public
   */
  showCaptionAboveMedia?: boolean;

  /**
   * Optional. Video width
   * @type { number }
   * @memberof InlineQueryResultVideo
   * @instance
   * @public
   */
  videoWidth?: number;

  /**
   * Optional. Video height
   * @type { number }
   * @memberof InlineQueryResultVideo
   * @instance
   * @public
   */
  videoHeight?: number;

  /**
   * Optional. Video duration in seconds
   * @type { number }
   * @memberof InlineQueryResultVideo
   * @instance
   * @public
   */
  videoDuration?: number;

  /**
   * Optional. Short description of the result
   * @type { string }
   * @memberof InlineQueryResultVideo
   * @instance
   * @public
   */
  description?: string;

  /**
   * Optional. Inline keyboard attached to the message
   * @type { InlineKeyboardMarkup }
   * @memberof InlineQueryResultVideo
   * @instance
   * @public
   */
  replyMarkup?: InlineKeyboardMarkup;

  /**
   * Optional. Content of the message to be sent instead of the video. This field is required if InlineQueryResultVideo is used to send an HTML-page as a result \(e.g., a YouTube video\).
   * @type { InputMessageContent }
   * @memberof InlineQueryResultVideo
   * @instance
   * @public
   */
  inputMessageContent?: InputMessageContent;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InlineQueryResultVideo
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InlineQueryResultVideo
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InlineQueryResultVideo instance from raw Telegram API data
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
