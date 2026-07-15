/**
 * InputMediaVoiceNote class for Surfgram Telegram Bot SDK
 * @module types/inputMediaVoiceNote
 * @description Represents a voice message file to be sent.
 * @see {@link https://core.telegram.org/bots/api#inputmediavoicenote Telegram API Documentation}
 * @class InputMediaVoiceNote
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { MessageEntity } from './messageEntity';

/**
 * Represents a InputMediaVoiceNote object from the Telegram Bot API
 * @class InputMediaVoiceNote
 */
export class InputMediaVoiceNote {
  /**
   * Type of the media, must be voice\_note
   * @type { string }
   * @memberof InputMediaVoiceNote
   * @instance
   * @public
   */
  type!: string;

  /**
   * File to send. Pass a file\_id to send a file that exists on the Telegram servers \(recommended\), pass an HTTP URL for Telegram to get a file from the Internet, or pass "attach://&lt;file\_attach\_name&gt;" to upload a new one using multipart/form-data under &lt;file\_attach\_name&gt; name. More information on Sending Files »
   * @type { string }
   * @memberof InputMediaVoiceNote
   * @instance
   * @public
   */
  media!: string;

  /**
   * Optional. Caption of the voice message to be sent, 0-1024 characters after entities parsing
   * @type { string }
   * @memberof InputMediaVoiceNote
   * @instance
   * @public
   */
  caption?: string;

  /**
   * Optional. Mode for parsing entities in the voice message caption. See formatting options for more details.
   * @type { string }
   * @memberof InputMediaVoiceNote
   * @instance
   * @public
   */
  parseMode?: string;

  /**
   * Optional. List of special entities that appear in the caption, which can be specified instead of parse\_mode
   * @type { MessageEntity[] }
   * @memberof InputMediaVoiceNote
   * @instance
   * @public
   */
  captionEntities?: MessageEntity[];

  /**
   * Optional. Duration of the voice message in seconds
   * @type { number }
   * @memberof InputMediaVoiceNote
   * @instance
   * @public
   */
  duration?: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InputMediaVoiceNote
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InputMediaVoiceNote
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InputMediaVoiceNote instance from raw Telegram API data
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
    const converted = snakeToCamel(raw);
    Object.assign(this, converted);
    this.bot = bot;
  }
}
