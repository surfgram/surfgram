/**
 * InputMediaVenue class for Surfgram Telegram Bot SDK
 * @module types/inputMediaVenue
 * @description Represents a venue to be sent.
 * @see {@link https://core.telegram.org/bots/api#inputmediavenue Telegram API Documentation}
 * @class InputMediaVenue
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a InputMediaVenue object from the Telegram Bot API
 * @class InputMediaVenue
 */
export class InputMediaVenue {
  /**
   * Type of the media, must be venue
   * @type { string }
   * @memberof InputMediaVenue
   * @instance
   * @public
   */
  type!: string;

  /**
   * Latitude of the location
   * @type { number }
   * @memberof InputMediaVenue
   * @instance
   * @public
   */
  latitude!: number;

  /**
   * Longitude of the location
   * @type { number }
   * @memberof InputMediaVenue
   * @instance
   * @public
   */
  longitude!: number;

  /**
   * Name of the venue
   * @type { string }
   * @memberof InputMediaVenue
   * @instance
   * @public
   */
  title!: string;

  /**
   * Address of the venue
   * @type { string }
   * @memberof InputMediaVenue
   * @instance
   * @public
   */
  address!: string;

  /**
   * Optional. Foursquare identifier of the venue
   * @type { string }
   * @memberof InputMediaVenue
   * @instance
   * @public
   */
  foursquareId?: string;

  /**
   * Optional. Foursquare type of the venue, if known. \(For example, “arts\_entertainment/default”, “arts\_entertainment/aquarium” or “food/icecream”.\)
   * @type { string }
   * @memberof InputMediaVenue
   * @instance
   * @public
   */
  foursquareType?: string;

  /**
   * Optional. Google Places identifier of the venue
   * @type { string }
   * @memberof InputMediaVenue
   * @instance
   * @public
   */
  googlePlaceId?: string;

  /**
   * Optional. Google Places type of the venue. \(See supported types.\)
   * @type { string }
   * @memberof InputMediaVenue
   * @instance
   * @public
   */
  googlePlaceType?: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InputMediaVenue
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InputMediaVenue
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InputMediaVenue instance from raw Telegram API data
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
