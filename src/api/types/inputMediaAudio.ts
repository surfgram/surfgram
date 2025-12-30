/**
 * InputMediaAudio class for Surfgram Telegram Bot SDK
 * @module types/inputMediaAudio
 * @description Represents an audio file to be treated as music to be sent.
 * @see {@link https://core.telegram.org/bots/api#inputmediaaudio Telegram API Documentation}
 * @class InputMediaAudio
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { MessageEntity } from './messageEntity';

/**
 * Represents a InputMediaAudio object from the Telegram Bot API
 * @class InputMediaAudio
 */
export class InputMediaAudio {
  /**
   * Type of the result, must be audio
   * @type { string }
   * @memberof InputMediaAudio
   * @instance
   * @public
   */
  type!: string;
  /**
   * File to send. Pass a file\_id to send a file that exists on the Telegram servers \(recommended\), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://&lt;file\_attach\_name&gt;” to upload a new one using multipart/form-data under &lt;file\_attach\_name&gt; name. More information on Sending Files »
   * @type { string }
   * @memberof InputMediaAudio
   * @instance
   * @public
   */
  media!: string;
  /**
   * Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://&lt;file\_attach\_name&gt;” if the thumbnail was uploaded using multipart/form-data under &lt;file\_attach\_name&gt;. More information on Sending Files »
   * @type { string }
   * @memberof InputMediaAudio
   * @instance
   * @public
   */
  thumbnail?: string;
  /**
   * Optional. Caption of the audio to be sent, 0-1024 characters after entities parsing
   * @type { string }
   * @memberof InputMediaAudio
   * @instance
   * @public
   */
  caption?: string;
  /**
   * Optional. Mode for parsing entities in the audio caption. See formatting options for more details.
   * @type { string }
   * @memberof InputMediaAudio
   * @instance
   * @public
   */
  parseMode?: string;
  /**
   * Optional. List of special entities that appear in the caption, which can be specified instead of parse\_mode
   * @type { MessageEntity[] }
   * @memberof InputMediaAudio
   * @instance
   * @public
   */
  captionEntities?: MessageEntity[];
  /**
   * Optional. Duration of the audio in seconds
   * @type { number }
   * @memberof InputMediaAudio
   * @instance
   * @public
   */
  duration?: number;
  /**
   * Optional. Performer of the audio
   * @type { string }
   * @memberof InputMediaAudio
   * @instance
   * @public
   */
  performer?: string;
  /**
   * Optional. Title of the audio
   * @type { string }
   * @memberof InputMediaAudio
   * @instance
   * @public
   */
  title?: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InputMediaAudio
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InputMediaAudio
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InputMediaAudio instance from raw Telegram API data
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
      this.media = data.media;
      this.thumbnail = data.thumbnail;
      this.caption = data.caption;
      this.parseMode = data.parseMode;
      this.captionEntities = data.captionEntities;
      this.duration = data.duration;
      this.performer = data.performer;
      this.title = data.title;
    }
  }
}
