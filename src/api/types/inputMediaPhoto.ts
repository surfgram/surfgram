/**
 * InputMediaPhoto class for Surfgram Telegram Bot SDK
 * @module types/inputMediaPhoto
 * @description Represents a photo to be sent.
 * @see {@link https://core.telegram.org/bots/api#inputmediaphoto Telegram API Documentation}
 * @class InputMediaPhoto
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { MessageEntity } from './messageEntity';

/**
 * Represents a InputMediaPhoto object from the Telegram Bot API
 * @class InputMediaPhoto
 */
export class InputMediaPhoto {
  /**
   * Type of the result, must be photo
   * @type { string }
   * @memberof InputMediaPhoto
   * @instance
   * @public
   */
  type!: string;

  /**
   * File to send. Pass a file\_id to send a file that exists on the Telegram servers \(recommended\), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://&lt;file\_attach\_name&gt;” to upload a new one using multipart/form-data under &lt;file\_attach\_name&gt; name. More information on Sending Files »
   * @type { string }
   * @memberof InputMediaPhoto
   * @instance
   * @public
   */
  media!: string;

  /**
   * Optional. Caption of the photo to be sent, 0-1024 characters after entities parsing
   * @type { string }
   * @memberof InputMediaPhoto
   * @instance
   * @public
   */
  caption?: string;

  /**
   * Optional. Mode for parsing entities in the photo caption. See formatting options for more details.
   * @type { string }
   * @memberof InputMediaPhoto
   * @instance
   * @public
   */
  parseMode?: string;

  /**
   * Optional. List of special entities that appear in the caption, which can be specified instead of parse\_mode
   * @type { MessageEntity[] }
   * @memberof InputMediaPhoto
   * @instance
   * @public
   */
  captionEntities?: MessageEntity[];

  /**
   * Optional. Pass True, if the caption must be shown above the message media
   * @type { boolean }
   * @memberof InputMediaPhoto
   * @instance
   * @public
   */
  showCaptionAboveMedia?: boolean;

  /**
   * Optional. Pass True if the photo needs to be covered with a spoiler animation
   * @type { boolean }
   * @memberof InputMediaPhoto
   * @instance
   * @public
   */
  hasSpoiler?: boolean;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InputMediaPhoto
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InputMediaPhoto
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InputMediaPhoto instance from raw Telegram API data
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
