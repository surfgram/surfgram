/**
 * InlineQueryResultAudio class for Surfgram Telegram Bot SDK
 * @module types/inlineQueryResultAudio
 * @description Represents a link to an MP3 audio file. By default, this audio file will be sent by the user. Alternatively, you can use input\_message\_content to send a message with the specified content instead of the audio.
 * @see {@link https://core.telegram.org/bots/api#inlinequeryresultaudio Telegram API Documentation}
 * @class InlineQueryResultAudio
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { MessageEntity } from './messageEntity';
import { InlineKeyboardMarkup } from './inlineKeyboardMarkup';
import { InputMessageContent } from './inputMessageContent';

/**
 * Represents a InlineQueryResultAudio object from the Telegram Bot API
 * @class InlineQueryResultAudio
 */
export class InlineQueryResultAudio {
  /**
   * Type of the result, must be audio
   * @type { string }
   * @memberof InlineQueryResultAudio
   * @instance
   * @public
   */
  type!: string;
  /**
   * Unique identifier for this result, 1-64 bytes
   * @type { string }
   * @memberof InlineQueryResultAudio
   * @instance
   * @public
   */
  id!: string;
  /**
   * A valid URL for the audio file
   * @type { string }
   * @memberof InlineQueryResultAudio
   * @instance
   * @public
   */
  audioUrl!: string;
  /**
   * Title
   * @type { string }
   * @memberof InlineQueryResultAudio
   * @instance
   * @public
   */
  title!: string;
  /**
   * Optional. Caption, 0-1024 characters after entities parsing
   * @type { string }
   * @memberof InlineQueryResultAudio
   * @instance
   * @public
   */
  caption?: string;
  /**
   * Optional. Mode for parsing entities in the audio caption. See formatting options for more details.
   * @type { string }
   * @memberof InlineQueryResultAudio
   * @instance
   * @public
   */
  parseMode?: string;
  /**
   * Optional. List of special entities that appear in the caption, which can be specified instead of parse\_mode
   * @type { MessageEntity[] }
   * @memberof InlineQueryResultAudio
   * @instance
   * @public
   */
  captionEntities?: MessageEntity[];
  /**
   * Optional. Performer
   * @type { string }
   * @memberof InlineQueryResultAudio
   * @instance
   * @public
   */
  performer?: string;
  /**
   * Optional. Audio duration in seconds
   * @type { number }
   * @memberof InlineQueryResultAudio
   * @instance
   * @public
   */
  audioDuration?: number;
  /**
   * Optional. Inline keyboard attached to the message
   * @type { InlineKeyboardMarkup }
   * @memberof InlineQueryResultAudio
   * @instance
   * @public
   */
  replyMarkup?: InlineKeyboardMarkup;
  /**
   * Optional. Content of the message to be sent instead of the audio
   * @type { InputMessageContent }
   * @memberof InlineQueryResultAudio
   * @instance
   * @public
   */
  inputMessageContent?: InputMessageContent;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InlineQueryResultAudio
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InlineQueryResultAudio
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InlineQueryResultAudio instance from raw Telegram API data
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
      this.audioUrl = data.audioUrl;
      this.title = data.title;
      this.caption = data.caption;
      this.parseMode = data.parseMode;
      this.captionEntities = data.captionEntities;
      this.performer = data.performer;
      this.audioDuration = data.audioDuration;
      this.replyMarkup = data.replyMarkup;
      this.inputMessageContent = data.inputMessageContent;
    }
  }
}
