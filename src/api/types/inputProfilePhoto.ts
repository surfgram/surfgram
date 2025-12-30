/**
 * InputProfilePhoto class for Surfgram Telegram Bot SDK
 * @module types/inputProfilePhoto
 * @description This object describes a profile photo to set. Currently, it can be one of
 * @see {@link https://core.telegram.org/bots/api#inputprofilephoto Telegram API Documentation}
 * @class InputProfilePhoto
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a InputProfilePhoto object from the Telegram Bot API
 * @class InputProfilePhoto
 */
export class InputProfilePhoto {
  /**
   * Type of the profile photo, must be static
   * @type { string }
   * @memberof InputProfilePhoto
   * @instance
   * @public
   */
  type!: string;
  /**
   * The static profile photo. Profile photos can't be reused and can only be uploaded as a new file, so you can pass “attach://&lt;file\_attach\_name&gt;” if the photo was uploaded using multipart/form-data under &lt;file\_attach\_name&gt;. More information on Sending Files »
   * @type { string }
   * @memberof InputProfilePhoto
   * @instance
   * @public
   */
  photo!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InputProfilePhoto
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InputProfilePhoto
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InputProfilePhoto instance from raw Telegram API data
   * @constructor
   * @param {TelegramObject} raw - Raw data from Telegram API in JSON format
   * @param {Bot} bot - Bot instance for executing methods
   * @example
   * const message = new Message(rawData, botInstance);
   */
  constructor(raw?: TelegramObject, bot?: Bot) {
    this.raw = raw;
    this.bot = bot;

    if (raw) {
      const data = snakeToCamel(raw) as any;

      this.type = data.type;
      this.photo = data.photo;
    }
  }
}
