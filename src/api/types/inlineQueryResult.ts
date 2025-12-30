/**
 * InlineQueryResult class for Surfgram Telegram Bot SDK
 * @module types/inlineQueryResult
 * @description This object represents one result of an inline query. Telegram clients currently support results of the following 20 types:
 * @see {@link https://core.telegram.org/bots/api#inlinequeryresult Telegram API Documentation}
 * @class InlineQueryResult
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { InputMessageContent } from './inputMessageContent';
import { InlineKeyboardMarkup } from './inlineKeyboardMarkup';

/**
 * Represents a InlineQueryResult object from the Telegram Bot API
 * @class InlineQueryResult
 */
export class InlineQueryResult {
  /**
   * Type of the result, must be article
   * @type { string }
   * @memberof InlineQueryResult
   * @instance
   * @public
   */
  type!: string;
  /**
   * Unique identifier for this result, 1-64 Bytes
   * @type { string }
   * @memberof InlineQueryResult
   * @instance
   * @public
   */
  id!: string;
  /**
   * Title of the result
   * @type { string }
   * @memberof InlineQueryResult
   * @instance
   * @public
   */
  title!: string;
  /**
   * Content of the message to be sent
   * @type { InputMessageContent }
   * @memberof InlineQueryResult
   * @instance
   * @public
   */
  inputMessageContent!: InputMessageContent;
  /**
   * Optional. Inline keyboard attached to the message
   * @type { InlineKeyboardMarkup }
   * @memberof InlineQueryResult
   * @instance
   * @public
   */
  replyMarkup?: InlineKeyboardMarkup;
  /**
   * Optional. URL of the result
   * @type { string }
   * @memberof InlineQueryResult
   * @instance
   * @public
   */
  url?: string;
  /**
   * Optional. Short description of the result
   * @type { string }
   * @memberof InlineQueryResult
   * @instance
   * @public
   */
  description?: string;
  /**
   * Optional. Url of the thumbnail for the result
   * @type { string }
   * @memberof InlineQueryResult
   * @instance
   * @public
   */
  thumbnailUrl?: string;
  /**
   * Optional. Thumbnail width
   * @type { number }
   * @memberof InlineQueryResult
   * @instance
   * @public
   */
  thumbnailWidth?: number;
  /**
   * Optional. Thumbnail height
   * @type { number }
   * @memberof InlineQueryResult
   * @instance
   * @public
   */
  thumbnailHeight?: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InlineQueryResult
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InlineQueryResult
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InlineQueryResult instance from raw Telegram API data
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
      this.inputMessageContent = data.inputMessageContent;
      this.replyMarkup = data.replyMarkup;
      this.url = data.url;
      this.description = data.description;
      this.thumbnailUrl = data.thumbnailUrl;
      this.thumbnailWidth = data.thumbnailWidth;
      this.thumbnailHeight = data.thumbnailHeight;
    }
  }
}
