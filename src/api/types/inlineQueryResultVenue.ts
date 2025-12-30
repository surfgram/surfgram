/**
 * InlineQueryResultVenue class for Surfgram Telegram Bot SDK
 * @module types/inlineQueryResultVenue
 * @description Represents a venue. By default, the venue will be sent by the user. Alternatively, you can use input\_message\_content to send a message with the specified content instead of the venue.
 * @see {@link https://core.telegram.org/bots/api#inlinequeryresultvenue Telegram API Documentation}
 * @class InlineQueryResultVenue
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { InlineKeyboardMarkup } from './inlineKeyboardMarkup';
import { InputMessageContent } from './inputMessageContent';

/**
 * Represents a InlineQueryResultVenue object from the Telegram Bot API
 * @class InlineQueryResultVenue
 */
export class InlineQueryResultVenue {
  /**
   * Type of the result, must be venue
   * @type { string }
   * @memberof InlineQueryResultVenue
   * @instance
   * @public
   */
  type!: string;
  /**
   * Unique identifier for this result, 1-64 Bytes
   * @type { string }
   * @memberof InlineQueryResultVenue
   * @instance
   * @public
   */
  id!: string;
  /**
   * Latitude of the venue location in degrees
   * @type { number }
   * @memberof InlineQueryResultVenue
   * @instance
   * @public
   */
  latitude!: number;
  /**
   * Longitude of the venue location in degrees
   * @type { number }
   * @memberof InlineQueryResultVenue
   * @instance
   * @public
   */
  longitude!: number;
  /**
   * Title of the venue
   * @type { string }
   * @memberof InlineQueryResultVenue
   * @instance
   * @public
   */
  title!: string;
  /**
   * Address of the venue
   * @type { string }
   * @memberof InlineQueryResultVenue
   * @instance
   * @public
   */
  address!: string;
  /**
   * Optional. Foursquare identifier of the venue if known
   * @type { string }
   * @memberof InlineQueryResultVenue
   * @instance
   * @public
   */
  foursquareId?: string;
  /**
   * Optional. Foursquare type of the venue, if known. \(For example, “arts\_entertainment/default”, “arts\_entertainment/aquarium” or “food/icecream”.\)
   * @type { string }
   * @memberof InlineQueryResultVenue
   * @instance
   * @public
   */
  foursquareType?: string;
  /**
   * Optional. Google Places identifier of the venue
   * @type { string }
   * @memberof InlineQueryResultVenue
   * @instance
   * @public
   */
  googlePlaceId?: string;
  /**
   * Optional. Google Places type of the venue. \(See supported types.\)
   * @type { string }
   * @memberof InlineQueryResultVenue
   * @instance
   * @public
   */
  googlePlaceType?: string;
  /**
   * Optional. Inline keyboard attached to the message
   * @type { InlineKeyboardMarkup }
   * @memberof InlineQueryResultVenue
   * @instance
   * @public
   */
  replyMarkup?: InlineKeyboardMarkup;
  /**
   * Optional. Content of the message to be sent instead of the venue
   * @type { InputMessageContent }
   * @memberof InlineQueryResultVenue
   * @instance
   * @public
   */
  inputMessageContent?: InputMessageContent;
  /**
   * Optional. Url of the thumbnail for the result
   * @type { string }
   * @memberof InlineQueryResultVenue
   * @instance
   * @public
   */
  thumbnailUrl?: string;
  /**
   * Optional. Thumbnail width
   * @type { number }
   * @memberof InlineQueryResultVenue
   * @instance
   * @public
   */
  thumbnailWidth?: number;
  /**
   * Optional. Thumbnail height
   * @type { number }
   * @memberof InlineQueryResultVenue
   * @instance
   * @public
   */
  thumbnailHeight?: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InlineQueryResultVenue
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InlineQueryResultVenue
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InlineQueryResultVenue instance from raw Telegram API data
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
      this.id = data.id;
      this.latitude = data.latitude;
      this.longitude = data.longitude;
      this.title = data.title;
      this.address = data.address;
      this.foursquareId = data.foursquareId;
      this.foursquareType = data.foursquareType;
      this.googlePlaceId = data.googlePlaceId;
      this.googlePlaceType = data.googlePlaceType;
      this.replyMarkup = data.replyMarkup;
      this.inputMessageContent = data.inputMessageContent;
      this.thumbnailUrl = data.thumbnailUrl;
      this.thumbnailWidth = data.thumbnailWidth;
      this.thumbnailHeight = data.thumbnailHeight;
    }
  }
}
