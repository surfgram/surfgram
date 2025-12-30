/**
 * InlineQueryResultCachedPhoto class for Surfgram Telegram Bot SDK
 * @module types/inlineQueryResultCachedPhoto
 * @description Represents a link to a photo stored on the Telegram servers. By default, this photo will be sent by the user with an optional caption. Alternatively, you can use input\_message\_content to send a message with the specified content instead of the photo.
 * @see {@link https://core.telegram.org/bots/api#inlinequeryresultcachedphoto Telegram API Documentation}
 * @class InlineQueryResultCachedPhoto
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { MessageEntity } from './messageEntity';
import { InlineKeyboardMarkup } from './inlineKeyboardMarkup';
import { InputMessageContent } from './inputMessageContent';

/**
 * Represents a InlineQueryResultCachedPhoto object from the Telegram Bot API
 * @class InlineQueryResultCachedPhoto
 */
export class InlineQueryResultCachedPhoto {
  /**
   * Type of the result, must be photo
   * @type { string }
   * @memberof InlineQueryResultCachedPhoto
   * @instance
   * @public
   */
  type!: string;
  /**
   * Unique identifier for this result, 1-64 bytes
   * @type { string }
   * @memberof InlineQueryResultCachedPhoto
   * @instance
   * @public
   */
  id!: string;
  /**
   * A valid file identifier of the photo
   * @type { string }
   * @memberof InlineQueryResultCachedPhoto
   * @instance
   * @public
   */
  photoFileId!: string;
  /**
   * Optional. Title for the result
   * @type { string }
   * @memberof InlineQueryResultCachedPhoto
   * @instance
   * @public
   */
  title?: string;
  /**
   * Optional. Short description of the result
   * @type { string }
   * @memberof InlineQueryResultCachedPhoto
   * @instance
   * @public
   */
  description?: string;
  /**
   * Optional. Caption of the photo to be sent, 0-1024 characters after entities parsing
   * @type { string }
   * @memberof InlineQueryResultCachedPhoto
   * @instance
   * @public
   */
  caption?: string;
  /**
   * Optional. Mode for parsing entities in the photo caption. See formatting options for more details.
   * @type { string }
   * @memberof InlineQueryResultCachedPhoto
   * @instance
   * @public
   */
  parseMode?: string;
  /**
   * Optional. List of special entities that appear in the caption, which can be specified instead of parse\_mode
   * @type { MessageEntity[] }
   * @memberof InlineQueryResultCachedPhoto
   * @instance
   * @public
   */
  captionEntities?: MessageEntity[];
  /**
   * Optional. Pass True, if the caption must be shown above the message media
   * @type { boolean }
   * @memberof InlineQueryResultCachedPhoto
   * @instance
   * @public
   */
  showCaptionAboveMedia?: boolean;
  /**
   * Optional. Inline keyboard attached to the message
   * @type { InlineKeyboardMarkup }
   * @memberof InlineQueryResultCachedPhoto
   * @instance
   * @public
   */
  replyMarkup?: InlineKeyboardMarkup;
  /**
   * Optional. Content of the message to be sent instead of the photo
   * @type { InputMessageContent }
   * @memberof InlineQueryResultCachedPhoto
   * @instance
   * @public
   */
  inputMessageContent?: InputMessageContent;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InlineQueryResultCachedPhoto
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InlineQueryResultCachedPhoto
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InlineQueryResultCachedPhoto instance from raw Telegram API data
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
      this.photoFileId = data.photoFileId;
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
