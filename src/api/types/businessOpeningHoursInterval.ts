/**
 * BusinessOpeningHoursInterval class for Surfgram Telegram Bot SDK
 * @module types/businessOpeningHoursInterval
 * @description Describes an interval of time during which a business is open.
 * @see {@link https://core.telegram.org/bots/api#businessopeninghoursinterval Telegram API Documentation}
 * @class BusinessOpeningHoursInterval
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a BusinessOpeningHoursInterval object from the Telegram Bot API
 * @class BusinessOpeningHoursInterval
 */
export class BusinessOpeningHoursInterval {
  /**
   * The minute's sequence number in a week, starting on Monday, marking the start of the time interval during which the business is open; 0 - 7 \* 24 \* 60
   * @type { number }
   * @memberof BusinessOpeningHoursInterval
   * @instance
   * @public
   */
  openingMinute!: number;

  /**
   * The minute's sequence number in a week, starting on Monday, marking the end of the time interval during which the business is open; 0 - 8 \* 24 \* 60
   * @type { number }
   * @memberof BusinessOpeningHoursInterval
   * @instance
   * @public
   */
  closingMinute!: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof BusinessOpeningHoursInterval
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof BusinessOpeningHoursInterval
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new BusinessOpeningHoursInterval instance from raw Telegram API data
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
