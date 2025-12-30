/**
 * Location class for Surfgram Telegram Bot SDK
 * @module types/location
 * @description This object represents a point on the map.
 * @see {@link https://core.telegram.org/bots/api#location Telegram API Documentation}
 * @class Location
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a Location object from the Telegram Bot API
 * @class Location
 */
export class Location {
  /**
   * Latitude as defined by the sender
   * @type { number }
   * @memberof Location
   * @instance
   * @public
   */
  latitude!: number;
  /**
   * Longitude as defined by the sender
   * @type { number }
   * @memberof Location
   * @instance
   * @public
   */
  longitude!: number;
  /**
   * Optional. The radius of uncertainty for the location, measured in meters; 0-1500
   * @type { number }
   * @memberof Location
   * @instance
   * @public
   */
  horizontalAccuracy?: number;
  /**
   * Optional. Time relative to the message sending date, during which the location can be updated; in seconds. For active live locations only.
   * @type { number }
   * @memberof Location
   * @instance
   * @public
   */
  livePeriod?: number;
  /**
   * Optional. The direction in which user is moving, in degrees; 1-360. For active live locations only.
   * @type { number }
   * @memberof Location
   * @instance
   * @public
   */
  heading?: number;
  /**
   * Optional. The maximum distance for proximity alerts about approaching another chat member, in meters. For sent live locations only.
   * @type { number }
   * @memberof Location
   * @instance
   * @public
   */
  proximityAlertRadius?: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof Location
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof Location
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new Location instance from raw Telegram API data
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

      this.latitude = data.latitude;
      this.longitude = data.longitude;
      this.horizontalAccuracy = data.horizontalAccuracy;
      this.livePeriod = data.livePeriod;
      this.heading = data.heading;
      this.proximityAlertRadius = data.proximityAlertRadius;
    }
  }
}
