/**
 * StoryAreaTypeLocation class for Surfgram Telegram Bot SDK
 * @module types/storyAreaTypeLocation
 * @description Describes a story area pointing to a location. Currently, a story can have up to 10 location areas.
 * @see {@link https://core.telegram.org/bots/api#storyareatypelocation Telegram API Documentation}
 * @class StoryAreaTypeLocation
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { LocationAddress } from './locationAddress';

/**
 * Represents a StoryAreaTypeLocation object from the Telegram Bot API
 * @class StoryAreaTypeLocation
 */
export class StoryAreaTypeLocation {
  /**
   * Type of the area, always “location”
   * @type { string }
   * @memberof StoryAreaTypeLocation
   * @instance
   * @public
   */
  type!: string;

  /**
   * Location latitude in degrees
   * @type { number }
   * @memberof StoryAreaTypeLocation
   * @instance
   * @public
   */
  latitude!: number;

  /**
   * Location longitude in degrees
   * @type { number }
   * @memberof StoryAreaTypeLocation
   * @instance
   * @public
   */
  longitude!: number;

  /**
   * Optional. Address of the location
   * @type { LocationAddress }
   * @memberof StoryAreaTypeLocation
   * @instance
   * @public
   */
  address?: LocationAddress;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof StoryAreaTypeLocation
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof StoryAreaTypeLocation
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new StoryAreaTypeLocation instance from raw Telegram API data
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
