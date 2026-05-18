/**
 * PaidMediaLivePhoto class for Surfgram Telegram Bot SDK
 * @module types/paidMediaLivePhoto
 * @description The paid media is a live photo.
 * @see {@link https://core.telegram.org/bots/api#paidmedialivephoto Telegram API Documentation}
 * @class PaidMediaLivePhoto
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { LivePhoto } from './livePhoto';

/**
 * Represents a PaidMediaLivePhoto object from the Telegram Bot API
 * @class PaidMediaLivePhoto
 */
export class PaidMediaLivePhoto {
  /**
   * Type of the paid media, always “live\_photo”
   * @type { string }
   * @memberof PaidMediaLivePhoto
   * @instance
   * @public
   */
  type!: string;

  /**
   * The photo
   * @type { LivePhoto }
   * @memberof PaidMediaLivePhoto
   * @instance
   * @public
   */
  livePhoto!: LivePhoto;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof PaidMediaLivePhoto
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof PaidMediaLivePhoto
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new PaidMediaLivePhoto instance from raw Telegram API data
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
