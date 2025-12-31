/**
 * BackgroundFillGradient class for Surfgram Telegram Bot SDK
 * @module types/backgroundFillGradient
 * @description The background is a gradient fill.
 * @see {@link https://core.telegram.org/bots/api#backgroundfillgradient Telegram API Documentation}
 * @class BackgroundFillGradient
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a BackgroundFillGradient object from the Telegram Bot API
 * @class BackgroundFillGradient
 */
export class BackgroundFillGradient {
  /**
   * Type of the background fill, always “gradient”
   * @type { string }
   * @memberof BackgroundFillGradient
   * @instance
   * @public
   */
  type!: string;

  /**
   * Top color of the gradient in the RGB24 format
   * @type { number }
   * @memberof BackgroundFillGradient
   * @instance
   * @public
   */
  topColor!: number;

  /**
   * Bottom color of the gradient in the RGB24 format
   * @type { number }
   * @memberof BackgroundFillGradient
   * @instance
   * @public
   */
  bottomColor!: number;

  /**
   * Clockwise rotation angle of the background fill in degrees; 0-359
   * @type { number }
   * @memberof BackgroundFillGradient
   * @instance
   * @public
   */
  rotationAngle!: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof BackgroundFillGradient
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof BackgroundFillGradient
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new BackgroundFillGradient instance from raw Telegram API data
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
