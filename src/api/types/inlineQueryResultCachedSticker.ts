/**
 * InlineQueryResultCachedSticker class for Surfgram Telegram Bot SDK
 * @module types/inlineQueryResultCachedSticker
 * @description Represents a link to a sticker stored on the Telegram servers. By default, this sticker will be sent by the user. Alternatively, you can use input\_message\_content to send a message with the specified content instead of the sticker.
 * @see {@link https://core.telegram.org/bots/api#inlinequeryresultcachedsticker Telegram API Documentation}
 * @class InlineQueryResultCachedSticker
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { InlineKeyboardMarkup } from './inlineKeyboardMarkup';
import { InputMessageContent } from './inputMessageContent';

/**
 * Represents a InlineQueryResultCachedSticker object from the Telegram Bot API
 * @class InlineQueryResultCachedSticker
 */
export class InlineQueryResultCachedSticker {
  /**
   * Type of the result, must be sticker
   * @type { string }
   * @memberof InlineQueryResultCachedSticker
   * @instance
   * @public
   */
  type!: string;
  /**
   * Unique identifier for this result, 1-64 bytes
   * @type { string }
   * @memberof InlineQueryResultCachedSticker
   * @instance
   * @public
   */
  id!: string;
  /**
   * A valid file identifier of the sticker
   * @type { string }
   * @memberof InlineQueryResultCachedSticker
   * @instance
   * @public
   */
  stickerFileId!: string;
  /**
   * Optional. Inline keyboard attached to the message
   * @type { InlineKeyboardMarkup }
   * @memberof InlineQueryResultCachedSticker
   * @instance
   * @public
   */
  replyMarkup?: InlineKeyboardMarkup;
  /**
   * Optional. Content of the message to be sent instead of the sticker
   * @type { InputMessageContent }
   * @memberof InlineQueryResultCachedSticker
   * @instance
   * @public
   */
  inputMessageContent?: InputMessageContent;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InlineQueryResultCachedSticker
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InlineQueryResultCachedSticker
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InlineQueryResultCachedSticker instance from raw Telegram API data
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
      this.stickerFileId = data.stickerFileId;
      this.replyMarkup = data.replyMarkup;
      this.inputMessageContent = data.inputMessageContent;
    }
  }
}
