/**
 * InputMedia class for Surfgram Telegram Bot SDK
 * @module types/inputMedia
 * @description This object represents the content of a media message to be sent. It should be one of
 * @see {@link https://core.telegram.org/bots/api#inputmedia Telegram API Documentation}
 * @class InputMedia
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { MessageEntity } from './messageEntity';

/**
 * Represents a InputMedia object from the Telegram Bot API
 * @class InputMedia
 */
export class InputMedia {
  /**
   * Type of the result, must be photo
   * @type { string }
   * @memberof InputMedia
   * @instance
   * @public
   */
  type!: string;

  /**
   * File to send. Pass a file\_id to send a file that exists on the Telegram servers \(recommended\), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://&lt;file\_attach\_name&gt;” to upload a new one using multipart/form-data under &lt;file\_attach\_name&gt; name. More information on Sending Files »
   * @type { string }
   * @memberof InputMedia
   * @instance
   * @public
   */
  media!: string;

  /**
   * Optional. Caption of the photo to be sent, 0-1024 characters after entities parsing
   * @type { string }
   * @memberof InputMedia
   * @instance
   * @public
   */
  caption?: string;

  /**
   * Optional. Mode for parsing entities in the photo caption. See formatting options for more details.
   * @type { string }
   * @memberof InputMedia
   * @instance
   * @public
   */
  parseMode?: string;

  /**
   * Optional. List of special entities that appear in the caption, which can be specified instead of parse\_mode
   * @type { MessageEntity[] }
   * @memberof InputMedia
   * @instance
   * @public
   */
  captionEntities?: MessageEntity[];

  /**
   * Optional. Pass True, if the caption must be shown above the message media
   * @type { boolean }
   * @memberof InputMedia
   * @instance
   * @public
   */
  showCaptionAboveMedia?: boolean;

  /**
   * Optional. Pass True if the photo needs to be covered with a spoiler animation
   * @type { boolean }
   * @memberof InputMedia
   * @instance
   * @public
   */
  hasSpoiler?: boolean;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InputMedia
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InputMedia
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InputMedia instance from raw Telegram API data
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
