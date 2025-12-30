/**
 * PaidMediaInfo class for Surfgram Telegram Bot SDK
 * @module types/paidMediaInfo
 * @description Describes the paid media added to a message.
 * @see {@link https://core.telegram.org/bots/api#paidmediainfo Telegram API Documentation}
 * @class PaidMediaInfo
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { PaidMedia } from './paidMedia';

/**
 * Represents a PaidMediaInfo object from the Telegram Bot API
 * @class PaidMediaInfo
 */
export class PaidMediaInfo {
  /**
   * The number of Telegram Stars that must be paid to buy access to the media
   * @type { number }
   * @memberof PaidMediaInfo
   * @instance
   * @public
   */
  starCount!: number;

  /**
   * Information about the paid media
   * @type { PaidMedia[] }
   * @memberof PaidMediaInfo
   * @instance
   * @public
   */
  paidMedia!: PaidMedia[];

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof PaidMediaInfo
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof PaidMediaInfo
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new PaidMediaInfo instance from raw Telegram API data
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
