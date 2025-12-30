/**
 * InlineQueryResultCachedVideo class for Surfgram Telegram Bot SDK
 * @module types/inlineQueryResultCachedVideo
 * @description Represents a link to a video file stored on the Telegram servers. By default, this video file will be sent by the user with an optional caption. Alternatively, you can use input\_message\_content to send a message with the specified content instead of the video.
 * @see {@link https://core.telegram.org/bots/api#inlinequeryresultcachedvideo Telegram API Documentation}
 * @class InlineQueryResultCachedVideo
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { MessageEntity } from './messageEntity';
import { InlineKeyboardMarkup } from './inlineKeyboardMarkup';
import { InputMessageContent } from './inputMessageContent';

/**
 * Represents a InlineQueryResultCachedVideo object from the Telegram Bot API
 * @class InlineQueryResultCachedVideo
 */
export class InlineQueryResultCachedVideo {
  /**
   * Type of the result, must be video
   * @type { string }
   * @memberof InlineQueryResultCachedVideo
   * @instance
   * @public
   */
  type!: string;
  /**
   * Unique identifier for this result, 1-64 bytes
   * @type { string }
   * @memberof InlineQueryResultCachedVideo
   * @instance
   * @public
   */
  id!: string;
  /**
   * A valid file identifier for the video file
   * @type { string }
   * @memberof InlineQueryResultCachedVideo
   * @instance
   * @public
   */
  videoFileId!: string;
  /**
   * Title for the result
   * @type { string }
   * @memberof InlineQueryResultCachedVideo
   * @instance
   * @public
   */
  title!: string;
  /**
   * Optional. Short description of the result
   * @type { string }
   * @memberof InlineQueryResultCachedVideo
   * @instance
   * @public
   */
  description?: string;
  /**
   * Optional. Caption of the video to be sent, 0-1024 characters after entities parsing
   * @type { string }
   * @memberof InlineQueryResultCachedVideo
   * @instance
   * @public
   */
  caption?: string;
  /**
   * Optional. Mode for parsing entities in the video caption. See formatting options for more details.
   * @type { string }
   * @memberof InlineQueryResultCachedVideo
   * @instance
   * @public
   */
  parseMode?: string;
  /**
   * Optional. List of special entities that appear in the caption, which can be specified instead of parse\_mode
   * @type { MessageEntity[] }
   * @memberof InlineQueryResultCachedVideo
   * @instance
   * @public
   */
  captionEntities?: MessageEntity[];
  /**
   * Optional. Pass True, if the caption must be shown above the message media
   * @type { boolean }
   * @memberof InlineQueryResultCachedVideo
   * @instance
   * @public
   */
  showCaptionAboveMedia?: boolean;
  /**
   * Optional. Inline keyboard attached to the message
   * @type { InlineKeyboardMarkup }
   * @memberof InlineQueryResultCachedVideo
   * @instance
   * @public
   */
  replyMarkup?: InlineKeyboardMarkup;
  /**
   * Optional. Content of the message to be sent instead of the video
   * @type { InputMessageContent }
   * @memberof InlineQueryResultCachedVideo
   * @instance
   * @public
   */
  inputMessageContent?: InputMessageContent;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InlineQueryResultCachedVideo
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InlineQueryResultCachedVideo
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InlineQueryResultCachedVideo instance from raw Telegram API data
   * @constructor
   * @param {TelegramObject} raw - Raw data from Telegram API in JSON format
   * @param {Bot} bot - Bot instance for executing methods
   * @example
   * const message = new Message(rawData, botInstance);
   */
  constructor(raw?: TelegramObject, bot?: Bot) {
    this.raw = raw;
    this.bot = bot;

    if (raw) {
      const data = snakeToCamel(raw) as any;

      this.type = data.type;
      this.id = data.id;
      this.videoFileId = data.videoFileId;
      this.title = data.title;
      this.description = data.description;
      this.caption = data.caption;
      this.parseMode = data.parseMode;
      this.captionEntities = data.captionEntities;
      this.showCaptionAboveMedia = data.showCaptionAboveMedia;
      this.replyMarkup = data.replyMarkup;
      this.inputMessageContent = data.inputMessageContent;
    }
  }
}
