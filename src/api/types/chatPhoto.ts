/**
 * ChatPhoto class for Surfgram Telegram Bot SDK
 * @module types/chatPhoto
 * @description This object represents a chat photo.
 * @see {@link https://core.telegram.org/bots/api#chatphoto Telegram API Documentation}
 * @class ChatPhoto
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a ChatPhoto object from the Telegram Bot API
 * @class ChatPhoto
 */
export class ChatPhoto {
  /**
   * File identifier of small \(160x160\) chat photo. This file\_id can be used only for photo download and only for as long as the photo is not changed.
   * @type { string }
   * @memberof ChatPhoto
   * @instance
   * @public
   */
  smallFileId!: string;

  /**
   * Unique file identifier of small \(160x160\) chat photo, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
   * @type { string }
   * @memberof ChatPhoto
   * @instance
   * @public
   */
  smallFileUniqueId!: string;

  /**
   * File identifier of big \(640x640\) chat photo. This file\_id can be used only for photo download and only for as long as the photo is not changed.
   * @type { string }
   * @memberof ChatPhoto
   * @instance
   * @public
   */
  bigFileId!: string;

  /**
   * Unique file identifier of big \(640x640\) chat photo, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
   * @type { string }
   * @memberof ChatPhoto
   * @instance
   * @public
   */
  bigFileUniqueId!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof ChatPhoto
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof ChatPhoto
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new ChatPhoto instance from raw Telegram API data
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
