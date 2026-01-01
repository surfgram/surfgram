/**
 * InputMediaDocument class for Surfgram Telegram Bot SDK
 * @module types/inputMediaDocument
 * @description Represents a general file to be sent.
 * @see {@link https://core.telegram.org/bots/api#inputmediadocument Telegram API Documentation}
 * @class InputMediaDocument
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { MessageEntity } from './messageEntity';

/**
 * Represents a InputMediaDocument object from the Telegram Bot API
 * @class InputMediaDocument
 */
export class InputMediaDocument {
  /**
   * Type of the result, must be document
   * @type { string }
   * @memberof InputMediaDocument
   * @instance
   * @public
   */
  type!: string;

  /**
   * File to send. Pass a file\_id to send a file that exists on the Telegram servers \(recommended\), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://&lt;file\_attach\_name&gt;” to upload a new one using multipart/form-data under &lt;file\_attach\_name&gt; name. More information on Sending Files »
   * @type { string }
   * @memberof InputMediaDocument
   * @instance
   * @public
   */
  media!: string;

  /**
   * Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://&lt;file\_attach\_name&gt;” if the thumbnail was uploaded using multipart/form-data under &lt;file\_attach\_name&gt;. More information on Sending Files »
   * @type { string }
   * @memberof InputMediaDocument
   * @instance
   * @public
   */
  thumbnail?: string;

  /**
   * Optional. Caption of the document to be sent, 0-1024 characters after entities parsing
   * @type { string }
   * @memberof InputMediaDocument
   * @instance
   * @public
   */
  caption?: string;

  /**
   * Optional. Mode for parsing entities in the document caption. See formatting options for more details.
   * @type { string }
   * @memberof InputMediaDocument
   * @instance
   * @public
   */
  parseMode?: string;

  /**
   * Optional. List of special entities that appear in the caption, which can be specified instead of parse\_mode
   * @type { MessageEntity[] }
   * @memberof InputMediaDocument
   * @instance
   * @public
   */
  captionEntities?: MessageEntity[];

  /**
   * Optional. Disables automatic server-side content type detection for files uploaded using multipart/form-data. Always True, if the document is sent as part of an album.
   * @type { boolean }
   * @memberof InputMediaDocument
   * @instance
   * @public
   */
  disableContentTypeDetection?: boolean;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InputMediaDocument
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InputMediaDocument
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InputMediaDocument instance from raw Telegram API data
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
