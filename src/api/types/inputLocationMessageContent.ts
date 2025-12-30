/**
 * InputLocationMessageContent class for Surfgram Telegram Bot SDK
 * @module types/inputLocationMessageContent
 * @description Represents the content of a location message to be sent as the result of an inline query.
 * @see {@link https://core.telegram.org/bots/api#inputlocationmessagecontent Telegram API Documentation}
 * @class InputLocationMessageContent
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a InputLocationMessageContent object from the Telegram Bot API
 * @class InputLocationMessageContent
 */
export class InputLocationMessageContent {
  /**
   * Latitude of the location in degrees
   * @type { number }
   * @memberof InputLocationMessageContent
   * @instance
   * @public
   */
  latitude!: number;

  /**
   * Longitude of the location in degrees
   * @type { number }
   * @memberof InputLocationMessageContent
   * @instance
   * @public
   */
  longitude!: number;

  /**
   * Optional. The radius of uncertainty for the location, measured in meters; 0-1500
   * @type { number }
   * @memberof InputLocationMessageContent
   * @instance
   * @public
   */
  horizontalAccuracy?: number;

  /**
   * Optional. Period in seconds during which the location can be updated, should be between 60 and 86400, or 0x7FFFFFFF for live locations that can be edited indefinitely.
   * @type { number }
   * @memberof InputLocationMessageContent
   * @instance
   * @public
   */
  livePeriod?: number;

  /**
   * Optional. For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.
   * @type { number }
   * @memberof InputLocationMessageContent
   * @instance
   * @public
   */
  heading?: number;

  /**
   * Optional. For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.
   * @type { number }
   * @memberof InputLocationMessageContent
   * @instance
   * @public
   */
  proximityAlertRadius?: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InputLocationMessageContent
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InputLocationMessageContent
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InputLocationMessageContent instance from raw Telegram API data
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
