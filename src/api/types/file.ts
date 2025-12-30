/**
 * File class for Surfgram Telegram Bot SDK
 * @module types/file
 * @description This object represents a file ready to be downloaded. The file can be downloaded via the link https://api.telegram.org/file/bot&lt;token&gt;/&lt;file\_path&gt;. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling getFile.
 * @see {@link https://core.telegram.org/bots/api#file Telegram API Documentation}
 * @class File
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a File object from the Telegram Bot API
 * @class File
 */
export class File {
  /**
   * Identifier for this file, which can be used to download or reuse the file
   * @type { string }
   * @memberof File
   * @instance
   * @public
   */
  fileId!: string;

  /**
   * Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
   * @type { string }
   * @memberof File
   * @instance
   * @public
   */
  fileUniqueId!: string;

  /**
   * Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value.
   * @type { number }
   * @memberof File
   * @instance
   * @public
   */
  fileSize?: number;

  /**
   * Optional. File path. Use https://api.telegram.org/file/bot&lt;token&gt;/&lt;file\_path&gt; to get the file.
   * @type { string }
   * @memberof File
   * @instance
   * @public
   */
  filePath?: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof File
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof File
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new File instance from raw Telegram API data
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
