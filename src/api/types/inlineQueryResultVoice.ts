/**
 * InlineQueryResultVoice class for Surfgram Telegram Bot SDK
 * @module types/inlineQueryResultVoice
 * @description Represents a link to a voice recording in an .OGG container encoded with OPUS. By default, this voice recording will be sent by the user. Alternatively, you can use input\_message\_content to send a message with the specified content instead of the the voice message.
 * @see {@link https://core.telegram.org/bots/api#inlinequeryresultvoice Telegram API Documentation}
 * @class InlineQueryResultVoice
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { MessageEntity } from './messageEntity';
import { InlineKeyboardMarkup } from './inlineKeyboardMarkup';
import { InputMessageContent } from './inputMessageContent';

/**
 * Represents a InlineQueryResultVoice object from the Telegram Bot API
 * @class InlineQueryResultVoice
 */
export class InlineQueryResultVoice {
  /**
   * Type of the result, must be voice
   * @type { string }
   * @memberof InlineQueryResultVoice
   * @instance
   * @public
   */
  type!: string;
  /**
   * Unique identifier for this result, 1-64 bytes
   * @type { string }
   * @memberof InlineQueryResultVoice
   * @instance
   * @public
   */
  id!: string;
  /**
   * A valid URL for the voice recording
   * @type { string }
   * @memberof InlineQueryResultVoice
   * @instance
   * @public
   */
  voiceUrl!: string;
  /**
   * Recording title
   * @type { string }
   * @memberof InlineQueryResultVoice
   * @instance
   * @public
   */
  title!: string;
  /**
   * Optional. Caption, 0-1024 characters after entities parsing
   * @type { string }
   * @memberof InlineQueryResultVoice
   * @instance
   * @public
   */
  caption?: string;
  /**
   * Optional. Mode for parsing entities in the voice message caption. See formatting options for more details.
   * @type { string }
   * @memberof InlineQueryResultVoice
   * @instance
   * @public
   */
  parseMode?: string;
  /**
   * Optional. List of special entities that appear in the caption, which can be specified instead of parse\_mode
   * @type { MessageEntity[] }
   * @memberof InlineQueryResultVoice
   * @instance
   * @public
   */
  captionEntities?: MessageEntity[];
  /**
   * Optional. Recording duration in seconds
   * @type { number }
   * @memberof InlineQueryResultVoice
   * @instance
   * @public
   */
  voiceDuration?: number;
  /**
   * Optional. Inline keyboard attached to the message
   * @type { InlineKeyboardMarkup }
   * @memberof InlineQueryResultVoice
   * @instance
   * @public
   */
  replyMarkup?: InlineKeyboardMarkup;
  /**
   * Optional. Content of the message to be sent instead of the voice recording
   * @type { InputMessageContent }
   * @memberof InlineQueryResultVoice
   * @instance
   * @public
   */
  inputMessageContent?: InputMessageContent;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InlineQueryResultVoice
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InlineQueryResultVoice
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InlineQueryResultVoice instance from raw Telegram API data
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
      this.voiceUrl = data.voiceUrl;
      this.title = data.title;
      this.caption = data.caption;
      this.parseMode = data.parseMode;
      this.captionEntities = data.captionEntities;
      this.voiceDuration = data.voiceDuration;
      this.replyMarkup = data.replyMarkup;
      this.inputMessageContent = data.inputMessageContent;
    }
  }
}
