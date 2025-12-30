/**
 * InlineQueryResultGif class for Surfgram Telegram Bot SDK
 * @module types/inlineQueryResultGif
 * @description Represents a link to an animated GIF file. By default, this animated GIF file will be sent by the user with optional caption. Alternatively, you can use input\_message\_content to send a message with the specified content instead of the animation.
 * @see {@link https://core.telegram.org/bots/api#inlinequeryresultgif Telegram API Documentation}
 * @class InlineQueryResultGif
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { MessageEntity } from './messageEntity';
import { InlineKeyboardMarkup } from './inlineKeyboardMarkup';
import { InputMessageContent } from './inputMessageContent';

/**
 * Represents a InlineQueryResultGif object from the Telegram Bot API
 * @class InlineQueryResultGif
 */
export class InlineQueryResultGif {
  /**
   * Type of the result, must be gif
   * @type { string }
   * @memberof InlineQueryResultGif
   * @instance
   * @public
   */
  type!: string;
  /**
   * Unique identifier for this result, 1-64 bytes
   * @type { string }
   * @memberof InlineQueryResultGif
   * @instance
   * @public
   */
  id!: string;
  /**
   * A valid URL for the GIF file
   * @type { string }
   * @memberof InlineQueryResultGif
   * @instance
   * @public
   */
  gifUrl!: string;
  /**
   * Optional. Width of the GIF
   * @type { number }
   * @memberof InlineQueryResultGif
   * @instance
   * @public
   */
  gifWidth?: number;
  /**
   * Optional. Height of the GIF
   * @type { number }
   * @memberof InlineQueryResultGif
   * @instance
   * @public
   */
  gifHeight?: number;
  /**
   * Optional. Duration of the GIF in seconds
   * @type { number }
   * @memberof InlineQueryResultGif
   * @instance
   * @public
   */
  gifDuration?: number;
  /**
   * URL of the static \(JPEG or GIF\) or animated \(MPEG4\) thumbnail for the result
   * @type { string }
   * @memberof InlineQueryResultGif
   * @instance
   * @public
   */
  thumbnailUrl!: string;
  /**
   * Optional. MIME type of the thumbnail, must be one of “image/jpeg”, “image/gif”, or “video/mp4”. Defaults to “image/jpeg”
   * @type { string }
   * @memberof InlineQueryResultGif
   * @instance
   * @public
   */
  thumbnailMimeType?: string;
  /**
   * Optional. Title for the result
   * @type { string }
   * @memberof InlineQueryResultGif
   * @instance
   * @public
   */
  title?: string;
  /**
   * Optional. Caption of the GIF file to be sent, 0-1024 characters after entities parsing
   * @type { string }
   * @memberof InlineQueryResultGif
   * @instance
   * @public
   */
  caption?: string;
  /**
   * Optional. Mode for parsing entities in the caption. See formatting options for more details.
   * @type { string }
   * @memberof InlineQueryResultGif
   * @instance
   * @public
   */
  parseMode?: string;
  /**
   * Optional. List of special entities that appear in the caption, which can be specified instead of parse\_mode
   * @type { MessageEntity[] }
   * @memberof InlineQueryResultGif
   * @instance
   * @public
   */
  captionEntities?: MessageEntity[];
  /**
   * Optional. Pass True, if the caption must be shown above the message media
   * @type { boolean }
   * @memberof InlineQueryResultGif
   * @instance
   * @public
   */
  showCaptionAboveMedia?: boolean;
  /**
   * Optional. Inline keyboard attached to the message
   * @type { InlineKeyboardMarkup }
   * @memberof InlineQueryResultGif
   * @instance
   * @public
   */
  replyMarkup?: InlineKeyboardMarkup;
  /**
   * Optional. Content of the message to be sent instead of the GIF animation
   * @type { InputMessageContent }
   * @memberof InlineQueryResultGif
   * @instance
   * @public
   */
  inputMessageContent?: InputMessageContent;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InlineQueryResultGif
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InlineQueryResultGif
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InlineQueryResultGif instance from raw Telegram API data
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
      this.gifUrl = data.gifUrl;
      this.gifWidth = data.gifWidth;
      this.gifHeight = data.gifHeight;
      this.gifDuration = data.gifDuration;
      this.thumbnailUrl = data.thumbnailUrl;
      this.thumbnailMimeType = data.thumbnailMimeType;
      this.title = data.title;
      this.caption = data.caption;
      this.parseMode = data.parseMode;
      this.captionEntities = data.captionEntities;
      this.showCaptionAboveMedia = data.showCaptionAboveMedia;
      this.replyMarkup = data.replyMarkup;
      this.inputMessageContent = data.inputMessageContent;
    }
  }
}
