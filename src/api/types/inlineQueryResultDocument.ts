/**
 * InlineQueryResultDocument class for Surfgram Telegram Bot SDK
 * @module types/inlineQueryResultDocument
 * @description Represents a link to a file. By default, this file will be sent by the user with an optional caption. Alternatively, you can use input\_message\_content to send a message with the specified content instead of the file. Currently, only .PDF and .ZIP files can be sent using this method.
 * @see {@link https://core.telegram.org/bots/api#inlinequeryresultdocument Telegram API Documentation}
 * @class InlineQueryResultDocument
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { MessageEntity } from './messageEntity';
import { InlineKeyboardMarkup } from './inlineKeyboardMarkup';
import { InputMessageContent } from './inputMessageContent';

/**
 * Represents a InlineQueryResultDocument object from the Telegram Bot API
 * @class InlineQueryResultDocument
 */
export class InlineQueryResultDocument {
  /**
   * Type of the result, must be document
   * @type { string }
   * @memberof InlineQueryResultDocument
   * @instance
   * @public
   */
  type!: string;
  /**
   * Unique identifier for this result, 1-64 bytes
   * @type { string }
   * @memberof InlineQueryResultDocument
   * @instance
   * @public
   */
  id!: string;
  /**
   * Title for the result
   * @type { string }
   * @memberof InlineQueryResultDocument
   * @instance
   * @public
   */
  title!: string;
  /**
   * Optional. Caption of the document to be sent, 0-1024 characters after entities parsing
   * @type { string }
   * @memberof InlineQueryResultDocument
   * @instance
   * @public
   */
  caption?: string;
  /**
   * Optional. Mode for parsing entities in the document caption. See formatting options for more details.
   * @type { string }
   * @memberof InlineQueryResultDocument
   * @instance
   * @public
   */
  parseMode?: string;
  /**
   * Optional. List of special entities that appear in the caption, which can be specified instead of parse\_mode
   * @type { MessageEntity[] }
   * @memberof InlineQueryResultDocument
   * @instance
   * @public
   */
  captionEntities?: MessageEntity[];
  /**
   * A valid URL for the file
   * @type { string }
   * @memberof InlineQueryResultDocument
   * @instance
   * @public
   */
  documentUrl!: string;
  /**
   * MIME type of the content of the file, either “application/pdf” or “application/zip”
   * @type { string }
   * @memberof InlineQueryResultDocument
   * @instance
   * @public
   */
  mimeType!: string;
  /**
   * Optional. Short description of the result
   * @type { string }
   * @memberof InlineQueryResultDocument
   * @instance
   * @public
   */
  description?: string;
  /**
   * Optional. Inline keyboard attached to the message
   * @type { InlineKeyboardMarkup }
   * @memberof InlineQueryResultDocument
   * @instance
   * @public
   */
  replyMarkup?: InlineKeyboardMarkup;
  /**
   * Optional. Content of the message to be sent instead of the file
   * @type { InputMessageContent }
   * @memberof InlineQueryResultDocument
   * @instance
   * @public
   */
  inputMessageContent?: InputMessageContent;
  /**
   * Optional. URL of the thumbnail \(JPEG only\) for the file
   * @type { string }
   * @memberof InlineQueryResultDocument
   * @instance
   * @public
   */
  thumbnailUrl?: string;
  /**
   * Optional. Thumbnail width
   * @type { number }
   * @memberof InlineQueryResultDocument
   * @instance
   * @public
   */
  thumbnailWidth?: number;
  /**
   * Optional. Thumbnail height
   * @type { number }
   * @memberof InlineQueryResultDocument
   * @instance
   * @public
   */
  thumbnailHeight?: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InlineQueryResultDocument
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InlineQueryResultDocument
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InlineQueryResultDocument instance from raw Telegram API data
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
      this.id = data.id;
      this.title = data.title;
      this.caption = data.caption;
      this.parseMode = data.parseMode;
      this.captionEntities = data.captionEntities;
      this.documentUrl = data.documentUrl;
      this.mimeType = data.mimeType;
      this.description = data.description;
      this.replyMarkup = data.replyMarkup;
      this.inputMessageContent = data.inputMessageContent;
      this.thumbnailUrl = data.thumbnailUrl;
      this.thumbnailWidth = data.thumbnailWidth;
      this.thumbnailHeight = data.thumbnailHeight;
    }
  }
}
