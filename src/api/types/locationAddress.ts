/**
 * LocationAddress class for Surfgram Telegram Bot SDK
 * @module types/locationAddress
 * @description Describes the physical address of a location.
 * @see {@link https://core.telegram.org/bots/api#locationaddress Telegram API Documentation}
 * @class LocationAddress
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a LocationAddress object from the Telegram Bot API
 * @class LocationAddress
 */
export class LocationAddress {
  /**
   * The two-letter ISO 3166-1 alpha-2 country code of the country where the location is located
   * @type { string }
   * @memberof LocationAddress
   * @instance
   * @public
   */
  countryCode!: string;

  /**
   * Optional. State of the location
   * @type { string }
   * @memberof LocationAddress
   * @instance
   * @public
   */
  state?: string;

  /**
   * Optional. City of the location
   * @type { string }
   * @memberof LocationAddress
   * @instance
   * @public
   */
  city?: string;

  /**
   * Optional. Street address of the location
   * @type { string }
   * @memberof LocationAddress
   * @instance
   * @public
   */
  street?: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof LocationAddress
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof LocationAddress
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new LocationAddress instance from raw Telegram API data
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
