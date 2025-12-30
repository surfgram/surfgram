/**
 * PaidMedia class for Surfgram Telegram Bot SDK
 * @module types/paidMedia
 * @description This object describes paid media. Currently, it can be one of
 * @see {@link https://core.telegram.org/bots/api#paidmedia Telegram API Documentation}
 * @class PaidMedia
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a PaidMedia object from the Telegram Bot API
 * @class PaidMedia
 */
export class PaidMedia {
  /**
   * Type of the paid media, always “preview”
   * @type { string }
   * @memberof PaidMedia
   * @instance
   * @public
   */
  type!: string;
  /**
   * Optional. Media width as defined by the sender
   * @type { number }
   * @memberof PaidMedia
   * @instance
   * @public
   */
  width?: number;
  /**
   * Optional. Media height as defined by the sender
   * @type { number }
   * @memberof PaidMedia
   * @instance
   * @public
   */
  height?: number;
  /**
   * Optional. Duration of the media in seconds as defined by the sender
   * @type { number }
   * @memberof PaidMedia
   * @instance
   * @public
   */
  duration?: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof PaidMedia
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof PaidMedia
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new PaidMedia instance from raw Telegram API data
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
      this.width = data.width;
      this.height = data.height;
      this.duration = data.duration;
    }
  }
}
