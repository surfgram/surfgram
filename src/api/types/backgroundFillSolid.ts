/**
 * BackgroundFillSolid class for Surfgram Telegram Bot SDK
 * @module types/backgroundFillSolid
 * @description The background is filled using the selected color.
 * @see {@link https://core.telegram.org/bots/api#backgroundfillsolid Telegram API Documentation}
 * @class BackgroundFillSolid
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a BackgroundFillSolid object from the Telegram Bot API
 * @class BackgroundFillSolid
 */
export class BackgroundFillSolid {
  /**
   * Type of the background fill, always “solid”
   * @type { string }
   * @memberof BackgroundFillSolid
   * @instance
   * @public
   */
  type!: string;

  /**
   * The color of the background fill in the RGB24 format
   * @type { number }
   * @memberof BackgroundFillSolid
   * @instance
   * @public
   */
  color!: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof BackgroundFillSolid
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof BackgroundFillSolid
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new BackgroundFillSolid instance from raw Telegram API data
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
