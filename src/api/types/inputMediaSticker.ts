/**
 * InputMediaSticker class for Surfgram Telegram Bot SDK
 * @module types/inputMediaSticker
 * @description Represents a sticker file to be sent.
 * @see {@link https://core.telegram.org/bots/api#inputmediasticker Telegram API Documentation}
 * @class InputMediaSticker
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a InputMediaSticker object from the Telegram Bot API
 * @class InputMediaSticker
 */
export class InputMediaSticker {
  /**
   * Type of the media, must be sticker
   * @type { string }
   * @memberof InputMediaSticker
   * @instance
   * @public
   */
  type!: string;

  /**
   * File to send. Pass a file\_id to send a file that exists on the Telegram servers \(recommended\), pass an HTTP URL for Telegram to get a .WEBP sticker from the Internet, or pass “attach://&lt;file\_attach\_name&gt;” to upload a new .WEBP, .TGS, or .WEBM sticker using multipart/form-data under &lt;file\_attach\_name&gt; name. More information on Sending Files »
   * @type { string }
   * @memberof InputMediaSticker
   * @instance
   * @public
   */
  media!: string;

  /**
   * Optional. Emoji associated with the sticker; only for just uploaded stickers
   * @type { string }
   * @memberof InputMediaSticker
   * @instance
   * @public
   */
  emoji?: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InputMediaSticker
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InputMediaSticker
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InputMediaSticker instance from raw Telegram API data
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
