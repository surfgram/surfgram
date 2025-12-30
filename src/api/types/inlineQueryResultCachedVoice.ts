/**
 * InlineQueryResultCachedVoice class for Surfgram Telegram Bot SDK
 * @module types/inlineQueryResultCachedVoice
 * @description Represents a link to a voice message stored on the Telegram servers. By default, this voice message will be sent by the user. Alternatively, you can use input\_message\_content to send a message with the specified content instead of the voice message.
 * @see {@link https://core.telegram.org/bots/api#inlinequeryresultcachedvoice Telegram API Documentation}
 * @class InlineQueryResultCachedVoice
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { MessageEntity } from './messageEntity';
import { InlineKeyboardMarkup } from './inlineKeyboardMarkup';
import { InputMessageContent } from './inputMessageContent';

/**
 * Represents a InlineQueryResultCachedVoice object from the Telegram Bot API
 * @class InlineQueryResultCachedVoice
 */
export class InlineQueryResultCachedVoice {
  /**
   * Type of the result, must be voice
   * @type { string }
   * @memberof InlineQueryResultCachedVoice
   * @instance
   * @public
   */
  type!: string;
  /**
   * Unique identifier for this result, 1-64 bytes
   * @type { string }
   * @memberof InlineQueryResultCachedVoice
   * @instance
   * @public
   */
  id!: string;
  /**
   * A valid file identifier for the voice message
   * @type { string }
   * @memberof InlineQueryResultCachedVoice
   * @instance
   * @public
   */
  voiceFileId!: string;
  /**
   * Voice message title
   * @type { string }
   * @memberof InlineQueryResultCachedVoice
   * @instance
   * @public
   */
  title!: string;
  /**
   * Optional. Caption, 0-1024 characters after entities parsing
   * @type { string }
   * @memberof InlineQueryResultCachedVoice
   * @instance
   * @public
   */
  caption?: string;
  /**
   * Optional. Mode for parsing entities in the voice message caption. See formatting options for more details.
   * @type { string }
   * @memberof InlineQueryResultCachedVoice
   * @instance
   * @public
   */
  parseMode?: string;
  /**
   * Optional. List of special entities that appear in the caption, which can be specified instead of parse\_mode
   * @type { MessageEntity[] }
   * @memberof InlineQueryResultCachedVoice
   * @instance
   * @public
   */
  captionEntities?: MessageEntity[];
  /**
   * Optional. Inline keyboard attached to the message
   * @type { InlineKeyboardMarkup }
   * @memberof InlineQueryResultCachedVoice
   * @instance
   * @public
   */
  replyMarkup?: InlineKeyboardMarkup;
  /**
   * Optional. Content of the message to be sent instead of the voice message
   * @type { InputMessageContent }
   * @memberof InlineQueryResultCachedVoice
   * @instance
   * @public
   */
  inputMessageContent?: InputMessageContent;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InlineQueryResultCachedVoice
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InlineQueryResultCachedVoice
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InlineQueryResultCachedVoice instance from raw Telegram API data
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
      this.voiceFileId = data.voiceFileId;
      this.title = data.title;
      this.caption = data.caption;
      this.parseMode = data.parseMode;
      this.captionEntities = data.captionEntities;
      this.replyMarkup = data.replyMarkup;
      this.inputMessageContent = data.inputMessageContent;
    }
  }
}
