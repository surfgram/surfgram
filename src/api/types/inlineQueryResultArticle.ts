/**
 * InlineQueryResultArticle class for Surfgram Telegram Bot SDK
 * @module types/inlineQueryResultArticle
 * @description Represents a link to an article or web page.
 * @see {@link https://core.telegram.org/bots/api#inlinequeryresultarticle Telegram API Documentation}
 * @class InlineQueryResultArticle
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { InputMessageContent } from './inputMessageContent';
import { InlineKeyboardMarkup } from './inlineKeyboardMarkup';

/**
 * Represents a InlineQueryResultArticle object from the Telegram Bot API
 * @class InlineQueryResultArticle
 */
export class InlineQueryResultArticle {
  /**
   * Type of the result, must be article
   * @type { string }
   * @memberof InlineQueryResultArticle
   * @instance
   * @public
   */
  type!: string;

  /**
   * Unique identifier for this result, 1-64 Bytes
   * @type { string }
   * @memberof InlineQueryResultArticle
   * @instance
   * @public
   */
  id!: string;

  /**
   * Title of the result
   * @type { string }
   * @memberof InlineQueryResultArticle
   * @instance
   * @public
   */
  title!: string;

  /**
   * Content of the message to be sent
   * @type { InputMessageContent }
   * @memberof InlineQueryResultArticle
   * @instance
   * @public
   */
  inputMessageContent!: InputMessageContent;

  /**
   * Optional. Inline keyboard attached to the message
   * @type { InlineKeyboardMarkup }
   * @memberof InlineQueryResultArticle
   * @instance
   * @public
   */
  replyMarkup?: InlineKeyboardMarkup;

  /**
   * Optional. URL of the result
   * @type { string }
   * @memberof InlineQueryResultArticle
   * @instance
   * @public
   */
  url?: string;

  /**
   * Optional. Short description of the result
   * @type { string }
   * @memberof InlineQueryResultArticle
   * @instance
   * @public
   */
  description?: string;

  /**
   * Optional. Url of the thumbnail for the result
   * @type { string }
   * @memberof InlineQueryResultArticle
   * @instance
   * @public
   */
  thumbnailUrl?: string;

  /**
   * Optional. Thumbnail width
   * @type { number }
   * @memberof InlineQueryResultArticle
   * @instance
   * @public
   */
  thumbnailWidth?: number;

  /**
   * Optional. Thumbnail height
   * @type { number }
   * @memberof InlineQueryResultArticle
   * @instance
   * @public
   */
  thumbnailHeight?: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InlineQueryResultArticle
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InlineQueryResultArticle
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InlineQueryResultArticle instance from raw Telegram API data
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
