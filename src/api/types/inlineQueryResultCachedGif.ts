/**
 * InlineQueryResultCachedGif class for Surfgram Telegram Bot SDK
 * @module types/inlineQueryResultCachedGif
 * @description Represents a link to an animated GIF file stored on the Telegram servers. By default, this animated GIF file will be sent by the user with an optional caption. Alternatively, you can use input\_message\_content to send a message with specified content instead of the animation.
 * @see {@link https://core.telegram.org/bots/api#inlinequeryresultcachedgif Telegram API Documentation}
 * @class InlineQueryResultCachedGif
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { MessageEntity } from './messageEntity';
import { InlineKeyboardMarkup } from './inlineKeyboardMarkup';
import { InputMessageContent } from './inputMessageContent';

/**
 * Represents a InlineQueryResultCachedGif object from the Telegram Bot API
 * @class InlineQueryResultCachedGif
 */
export class InlineQueryResultCachedGif {
  /**
   * Type of the result, must be gif
   * @type { string }
   * @memberof InlineQueryResultCachedGif
   * @instance
   * @public
   */
  type!: string;

  /**
   * Unique identifier for this result, 1-64 bytes
   * @type { string }
   * @memberof InlineQueryResultCachedGif
   * @instance
   * @public
   */
  id!: string;

  /**
   * A valid file identifier for the GIF file
   * @type { string }
   * @memberof InlineQueryResultCachedGif
   * @instance
   * @public
   */
  gifFileId!: string;

  /**
   * Optional. Title for the result
   * @type { string }
   * @memberof InlineQueryResultCachedGif
   * @instance
   * @public
   */
  title?: string;

  /**
   * Optional. Caption of the GIF file to be sent, 0-1024 characters after entities parsing
   * @type { string }
   * @memberof InlineQueryResultCachedGif
   * @instance
   * @public
   */
  caption?: string;

  /**
   * Optional. Mode for parsing entities in the caption. See formatting options for more details.
   * @type { string }
   * @memberof InlineQueryResultCachedGif
   * @instance
   * @public
   */
  parseMode?: string;

  /**
   * Optional. List of special entities that appear in the caption, which can be specified instead of parse\_mode
   * @type { MessageEntity[] }
   * @memberof InlineQueryResultCachedGif
   * @instance
   * @public
   */
  captionEntities?: MessageEntity[];

  /**
   * Optional. Pass True, if the caption must be shown above the message media
   * @type { boolean }
   * @memberof InlineQueryResultCachedGif
   * @instance
   * @public
   */
  showCaptionAboveMedia?: boolean;

  /**
   * Optional. Inline keyboard attached to the message
   * @type { InlineKeyboardMarkup }
   * @memberof InlineQueryResultCachedGif
   * @instance
   * @public
   */
  replyMarkup?: InlineKeyboardMarkup;

  /**
   * Optional. Content of the message to be sent instead of the GIF animation
   * @type { InputMessageContent }
   * @memberof InlineQueryResultCachedGif
   * @instance
   * @public
   */
  inputMessageContent?: InputMessageContent;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InlineQueryResultCachedGif
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InlineQueryResultCachedGif
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InlineQueryResultCachedGif instance from raw Telegram API data
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
