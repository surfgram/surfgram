/**
 * Venue class for Surfgram Telegram Bot SDK
 * @module types/venue
 * @description This object represents a venue.
 * @see {@link https://core.telegram.org/bots/api#venue Telegram API Documentation}
 * @class Venue
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { Location } from './location';

/**
 * Represents a Venue object from the Telegram Bot API
 * @class Venue
 */
export class Venue {
  /**
   * Venue location. Can't be a live location
   * @type { Location }
   * @memberof Venue
   * @instance
   * @public
   */
  location!: Location;
  /**
   * Name of the venue
   * @type { string }
   * @memberof Venue
   * @instance
   * @public
   */
  title!: string;
  /**
   * Address of the venue
   * @type { string }
   * @memberof Venue
   * @instance
   * @public
   */
  address!: string;
  /**
   * Optional. Foursquare identifier of the venue
   * @type { string }
   * @memberof Venue
   * @instance
   * @public
   */
  foursquareId?: string;
  /**
   * Optional. Foursquare type of the venue. \(For example, “arts\_entertainment/default”, “arts\_entertainment/aquarium” or “food/icecream”.\)
   * @type { string }
   * @memberof Venue
   * @instance
   * @public
   */
  foursquareType?: string;
  /**
   * Optional. Google Places identifier of the venue
   * @type { string }
   * @memberof Venue
   * @instance
   * @public
   */
  googlePlaceId?: string;
  /**
   * Optional. Google Places type of the venue. \(See supported types.\)
   * @type { string }
   * @memberof Venue
   * @instance
   * @public
   */
  googlePlaceType?: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof Venue
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof Venue
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new Venue instance from raw Telegram API data
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

    if (raw) {
      const data = snakeToCamel(raw) as any;

      this.location = data.location;
      this.title = data.title;
      this.address = data.address;
      this.foursquareId = data.foursquareId;
      this.foursquareType = data.foursquareType;
      this.googlePlaceId = data.googlePlaceId;
      this.googlePlaceType = data.googlePlaceType;
    }
  }
}
