/**
 * InputMediaLocation class for Surfgram Telegram Bot SDK
 * @module types/inputMediaLocation
 * @description Represents a location to be sent.
 * @see {@link https://core.telegram.org/bots/api#inputmedialocation Telegram API Documentation}
 * @class InputMediaLocation
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a InputMediaLocation object from the Telegram Bot API
 * @class InputMediaLocation
 */
export class InputMediaLocation {
  /**
   * Type of the result, must be location
   * @type { string }
   * @memberof InputMediaLocation
   * @instance
   * @public
   */
  type!: string;

  /**
   * Latitude of the location
   * @type { number }
   * @memberof InputMediaLocation
   * @instance
   * @public
   */
  latitude!: number;

  /**
   * Longitude of the location
   * @type { number }
   * @memberof InputMediaLocation
   * @instance
   * @public
   */
  longitude!: number;

  /**
   * Optional. The radius of uncertainty for the location, measured in meters; 0-1500
   * @type { number }
   * @memberof InputMediaLocation
   * @instance
   * @public
   */
  horizontalAccuracy?: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InputMediaLocation
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InputMediaLocation
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InputMediaLocation instance from raw Telegram API data
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
