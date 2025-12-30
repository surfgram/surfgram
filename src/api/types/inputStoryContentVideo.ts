/**
 * InputStoryContentVideo class for Surfgram Telegram Bot SDK
 * @module types/inputStoryContentVideo
 * @description Describes a video to post as a story.
 * @see {@link https://core.telegram.org/bots/api#inputstorycontentvideo Telegram API Documentation}
 * @class InputStoryContentVideo
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a InputStoryContentVideo object from the Telegram Bot API
 * @class InputStoryContentVideo
 */
export class InputStoryContentVideo {
  /**
   * Type of the content, must be video
   * @type { string }
   * @memberof InputStoryContentVideo
   * @instance
   * @public
   */
  type!: string;

  /**
   * The video to post as a story. The video must be of the size 720x1280, streamable, encoded with H.265 codec, with key frames added each second in the MPEG4 format, and must not exceed 30 MB. The video can't be reused and can only be uploaded as a new file, so you can pass “attach://&lt;file\_attach\_name&gt;” if the video was uploaded using multipart/form-data under &lt;file\_attach\_name&gt;. More information on Sending Files »
   * @type { string }
   * @memberof InputStoryContentVideo
   * @instance
   * @public
   */
  video!: string;

  /**
   * Optional. Precise duration of the video in seconds; 0-60
   * @type { number }
   * @memberof InputStoryContentVideo
   * @instance
   * @public
   */
  duration?: number;

  /**
   * Optional. Timestamp in seconds of the frame that will be used as the static cover for the story. Defaults to 0.0.
   * @type { number }
   * @memberof InputStoryContentVideo
   * @instance
   * @public
   */
  coverFrameTimestamp?: number;

  /**
   * Optional. Pass True if the video has no sound
   * @type { boolean }
   * @memberof InputStoryContentVideo
   * @instance
   * @public
   */
  isAnimation?: boolean;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InputStoryContentVideo
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InputStoryContentVideo
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InputStoryContentVideo instance from raw Telegram API data
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
