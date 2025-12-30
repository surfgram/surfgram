/**
 * InlineQueryResultCachedAudio class for Surfgram Telegram Bot SDK
 * @module types/inlineQueryResultCachedAudio
 * @description Represents a link to an MP3 audio file stored on the Telegram servers. By default, this audio file will be sent by the user. Alternatively, you can use input\_message\_content to send a message with the specified content instead of the audio.
 * @see {@link https://core.telegram.org/bots/api#inlinequeryresultcachedaudio Telegram API Documentation}
 * @class InlineQueryResultCachedAudio
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { MessageEntity } from './messageEntity';
import { InlineKeyboardMarkup } from './inlineKeyboardMarkup';
import { InputMessageContent } from './inputMessageContent';

/**
 * Represents a InlineQueryResultCachedAudio object from the Telegram Bot API
 * @class InlineQueryResultCachedAudio
 */
export class InlineQueryResultCachedAudio {
  /**
   * Type of the result, must be audio
   * @type { string }
   * @memberof InlineQueryResultCachedAudio
   * @instance
   * @public
   */
  type!: string;

  /**
   * Unique identifier for this result, 1-64 bytes
   * @type { string }
   * @memberof InlineQueryResultCachedAudio
   * @instance
   * @public
   */
  id!: string;

  /**
   * A valid file identifier for the audio file
   * @type { string }
   * @memberof InlineQueryResultCachedAudio
   * @instance
   * @public
   */
  audioFileId!: string;

  /**
   * Optional. Caption, 0-1024 characters after entities parsing
   * @type { string }
   * @memberof InlineQueryResultCachedAudio
   * @instance
   * @public
   */
  caption?: string;

  /**
   * Optional. Mode for parsing entities in the audio caption. See formatting options for more details.
   * @type { string }
   * @memberof InlineQueryResultCachedAudio
   * @instance
   * @public
   */
  parseMode?: string;

  /**
   * Optional. List of special entities that appear in the caption, which can be specified instead of parse\_mode
   * @type { MessageEntity[] }
   * @memberof InlineQueryResultCachedAudio
   * @instance
   * @public
   */
  captionEntities?: MessageEntity[];

  /**
   * Optional. Inline keyboard attached to the message
   * @type { InlineKeyboardMarkup }
   * @memberof InlineQueryResultCachedAudio
   * @instance
   * @public
   */
  replyMarkup?: InlineKeyboardMarkup;

  /**
   * Optional. Content of the message to be sent instead of the audio
   * @type { InputMessageContent }
   * @memberof InlineQueryResultCachedAudio
   * @instance
   * @public
   */
  inputMessageContent?: InputMessageContent;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InlineQueryResultCachedAudio
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InlineQueryResultCachedAudio
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InlineQueryResultCachedAudio instance from raw Telegram API data
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
