/**
 * BackgroundTypeFill class for Surfgram Telegram Bot SDK
 * @module types/backgroundTypeFill
 * @description The background is automatically filled based on the selected colors.
 * @see {@link https://core.telegram.org/bots/api#backgroundtypefill Telegram API Documentation}
 * @class BackgroundTypeFill
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { BackgroundFill } from './backgroundFill';

/**
 * Represents a BackgroundTypeFill object from the Telegram Bot API
 * @class BackgroundTypeFill
 */
export class BackgroundTypeFill {
  /**
   * Type of the background, always “fill”
   * @type { string }
   * @memberof BackgroundTypeFill
   * @instance
   * @public
   */
  type!: string;

  /**
   * The background fill
   * @type { BackgroundFill }
   * @memberof BackgroundTypeFill
   * @instance
   * @public
   */
  fill!: BackgroundFill;

  /**
   * Dimming of the background in dark themes, as a percentage; 0-100
   * @type { number }
   * @memberof BackgroundTypeFill
   * @instance
   * @public
   */
  darkThemeDimming!: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof BackgroundTypeFill
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof BackgroundTypeFill
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new BackgroundTypeFill instance from raw Telegram API data
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
