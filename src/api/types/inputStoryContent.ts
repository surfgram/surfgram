/**
 * InputStoryContent class for Surfgram Telegram Bot SDK
 * @module types/inputStoryContent
 * @description This object describes the content of a story to post. Currently, it can be one of
 * @see {@link https://core.telegram.org/bots/api#inputstorycontent Telegram API Documentation}
 * @class InputStoryContent
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a InputStoryContent object from the Telegram Bot API
 * @class InputStoryContent
 */
export class InputStoryContent {
  /**
   * Type of the content, must be photo
   * @type { string }
   * @memberof InputStoryContent
   * @instance
   * @public
   */
  type!: string;

  /**
   * The photo to post as a story. The photo must be of the size 1080x1920 and must not exceed 10 MB. The photo can't be reused and can only be uploaded as a new file, so you can pass “attach://&lt;file\_attach\_name&gt;” if the photo was uploaded using multipart/form-data under &lt;file\_attach\_name&gt;. More information on Sending Files »
   * @type { string }
   * @memberof InputStoryContent
   * @instance
   * @public
   */
  photo!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InputStoryContent
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InputStoryContent
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InputStoryContent instance from raw Telegram API data
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
