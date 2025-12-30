/**
 * InputStoryContentPhoto class for Surfgram Telegram Bot SDK
 * @module types/inputStoryContentPhoto
 * @description Describes a photo to post as a story.
 * @see {@link https://core.telegram.org/bots/api#inputstorycontentphoto Telegram API Documentation}
 * @class InputStoryContentPhoto
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a InputStoryContentPhoto object from the Telegram Bot API
 * @class InputStoryContentPhoto
 */
export class InputStoryContentPhoto {
  /**
   * Type of the content, must be photo
   * @type { string }
   * @memberof InputStoryContentPhoto
   * @instance
   * @public
   */
  type!: string;

  /**
   * The photo to post as a story. The photo must be of the size 1080x1920 and must not exceed 10 MB. The photo can't be reused and can only be uploaded as a new file, so you can pass “attach://&lt;file\_attach\_name&gt;” if the photo was uploaded using multipart/form-data under &lt;file\_attach\_name&gt;. More information on Sending Files »
   * @type { string }
   * @memberof InputStoryContentPhoto
   * @instance
   * @public
   */
  photo!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InputStoryContentPhoto
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InputStoryContentPhoto
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InputStoryContentPhoto instance from raw Telegram API data
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
