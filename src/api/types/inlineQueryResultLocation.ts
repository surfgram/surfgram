/**
 * InlineQueryResultLocation class for Surfgram Telegram Bot SDK
 * @module types/inlineQueryResultLocation
 * @description Represents a location on a map. By default, the location will be sent by the user. Alternatively, you can use input\_message\_content to send a message with the specified content instead of the location.
 * @see {@link https://core.telegram.org/bots/api#inlinequeryresultlocation Telegram API Documentation}
 * @class InlineQueryResultLocation
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { InlineKeyboardMarkup } from './inlineKeyboardMarkup';
import { InputMessageContent } from './inputMessageContent';

/**
 * Represents a InlineQueryResultLocation object from the Telegram Bot API
 * @class InlineQueryResultLocation
 */
export class InlineQueryResultLocation {
  /**
   * Type of the result, must be location
   * @type { string }
   * @memberof InlineQueryResultLocation
   * @instance
   * @public
   */
  type!: string;
  /**
   * Unique identifier for this result, 1-64 Bytes
   * @type { string }
   * @memberof InlineQueryResultLocation
   * @instance
   * @public
   */
  id!: string;
  /**
   * Location latitude in degrees
   * @type { number }
   * @memberof InlineQueryResultLocation
   * @instance
   * @public
   */
  latitude!: number;
  /**
   * Location longitude in degrees
   * @type { number }
   * @memberof InlineQueryResultLocation
   * @instance
   * @public
   */
  longitude!: number;
  /**
   * Location title
   * @type { string }
   * @memberof InlineQueryResultLocation
   * @instance
   * @public
   */
  title!: string;
  /**
   * Optional. The radius of uncertainty for the location, measured in meters; 0-1500
   * @type { number }
   * @memberof InlineQueryResultLocation
   * @instance
   * @public
   */
  horizontalAccuracy?: number;
  /**
   * Optional. Period in seconds during which the location can be updated, should be between 60 and 86400, or 0x7FFFFFFF for live locations that can be edited indefinitely.
   * @type { number }
   * @memberof InlineQueryResultLocation
   * @instance
   * @public
   */
  livePeriod?: number;
  /**
   * Optional. For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.
   * @type { number }
   * @memberof InlineQueryResultLocation
   * @instance
   * @public
   */
  heading?: number;
  /**
   * Optional. For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.
   * @type { number }
   * @memberof InlineQueryResultLocation
   * @instance
   * @public
   */
  proximityAlertRadius?: number;
  /**
   * Optional. Inline keyboard attached to the message
   * @type { InlineKeyboardMarkup }
   * @memberof InlineQueryResultLocation
   * @instance
   * @public
   */
  replyMarkup?: InlineKeyboardMarkup;
  /**
   * Optional. Content of the message to be sent instead of the location
   * @type { InputMessageContent }
   * @memberof InlineQueryResultLocation
   * @instance
   * @public
   */
  inputMessageContent?: InputMessageContent;
  /**
   * Optional. Url of the thumbnail for the result
   * @type { string }
   * @memberof InlineQueryResultLocation
   * @instance
   * @public
   */
  thumbnailUrl?: string;
  /**
   * Optional. Thumbnail width
   * @type { number }
   * @memberof InlineQueryResultLocation
   * @instance
   * @public
   */
  thumbnailWidth?: number;
  /**
   * Optional. Thumbnail height
   * @type { number }
   * @memberof InlineQueryResultLocation
   * @instance
   * @public
   */
  thumbnailHeight?: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InlineQueryResultLocation
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InlineQueryResultLocation
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InlineQueryResultLocation instance from raw Telegram API data
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

      this.type = data.type;
      this.id = data.id;
      this.latitude = data.latitude;
      this.longitude = data.longitude;
      this.title = data.title;
      this.horizontalAccuracy = data.horizontalAccuracy;
      this.livePeriod = data.livePeriod;
      this.heading = data.heading;
      this.proximityAlertRadius = data.proximityAlertRadius;
      this.replyMarkup = data.replyMarkup;
      this.inputMessageContent = data.inputMessageContent;
      this.thumbnailUrl = data.thumbnailUrl;
      this.thumbnailWidth = data.thumbnailWidth;
      this.thumbnailHeight = data.thumbnailHeight;
    }
  }
}
