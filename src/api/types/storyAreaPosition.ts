/**
 * StoryAreaPosition class for Surfgram Telegram Bot SDK
 * @module types/storyAreaPosition
 * @description Describes the position of a clickable area within a story.
 * @see {@link https://core.telegram.org/bots/api#storyareaposition Telegram API Documentation}
 * @class StoryAreaPosition
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a StoryAreaPosition object from the Telegram Bot API
 * @class StoryAreaPosition
 */
export class StoryAreaPosition {
  /**
   * The abscissa of the area's center, as a percentage of the media width
   * @type { number }
   * @memberof StoryAreaPosition
   * @instance
   * @public
   */
  xPercentage!: number;

  /**
   * The ordinate of the area's center, as a percentage of the media height
   * @type { number }
   * @memberof StoryAreaPosition
   * @instance
   * @public
   */
  yPercentage!: number;

  /**
   * The width of the area's rectangle, as a percentage of the media width
   * @type { number }
   * @memberof StoryAreaPosition
   * @instance
   * @public
   */
  widthPercentage!: number;

  /**
   * The height of the area's rectangle, as a percentage of the media height
   * @type { number }
   * @memberof StoryAreaPosition
   * @instance
   * @public
   */
  heightPercentage!: number;

  /**
   * The clockwise rotation angle of the rectangle, in degrees; 0-360
   * @type { number }
   * @memberof StoryAreaPosition
   * @instance
   * @public
   */
  rotationAngle!: number;

  /**
   * The radius of the rectangle corner rounding, as a percentage of the media width
   * @type { number }
   * @memberof StoryAreaPosition
   * @instance
   * @public
   */
  cornerRadiusPercentage!: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof StoryAreaPosition
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof StoryAreaPosition
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new StoryAreaPosition instance from raw Telegram API data
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
