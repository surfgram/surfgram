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
import { LivePhoto } from './livePhoto';

/**
 * Represents a PaidMedia object from the Telegram Bot API
 * @class PaidMedia
 */
export class PaidMedia {
  /**
   * Type of the paid media, always “live\_photo”
   * @type { string }
   * @memberof PaidMedia
   * @instance
   * @public
   */
  type!: string;

  /**
   * The photo
   * @type { LivePhoto }
   * @memberof PaidMedia
   * @instance
   * @public
   */
  livePhoto!: LivePhoto;

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
