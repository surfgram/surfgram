/**
 * BackgroundFill class for Surfgram Telegram Bot SDK
 * @module types/backgroundFill
 * @description This object describes the way a background is filled based on the selected colors. Currently, it can be one of
 * @see {@link https://core.telegram.org/bots/api#backgroundfill Telegram API Documentation}
 * @class BackgroundFill
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a BackgroundFill object from the Telegram Bot API
 * @class BackgroundFill
 */
export class BackgroundFill {
  /**
   * Type of the background fill, always “solid”
   * @type { string }
   * @memberof BackgroundFill
   * @instance
   * @public
   */
  type!: string;
  /**
   * The color of the background fill in the RGB24 format
   * @type { number }
   * @memberof BackgroundFill
   * @instance
   * @public
   */
  color!: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof BackgroundFill
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof BackgroundFill
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new BackgroundFill instance from raw Telegram API data
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
      this.color = data.color;
    }
  }
}
