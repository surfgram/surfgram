/**
 * Birthdate class for Surfgram Telegram Bot SDK
 * @module types/birthdate
 * @description Describes the birthdate of a user.
 * @see {@link https://core.telegram.org/bots/api#birthdate Telegram API Documentation}
 * @class Birthdate
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a Birthdate object from the Telegram Bot API
 * @class Birthdate
 */
export class Birthdate {
  /**
   * Day of the user's birth; 1-31
   * @type { number }
   * @memberof Birthdate
   * @instance
   * @public
   */
  day!: number;
  /**
   * Month of the user's birth; 1-12
   * @type { number }
   * @memberof Birthdate
   * @instance
   * @public
   */
  month!: number;
  /**
   * Optional. Year of the user's birth
   * @type { number }
   * @memberof Birthdate
   * @instance
   * @public
   */
  year?: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof Birthdate
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof Birthdate
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new Birthdate instance from raw Telegram API data
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

      this.day = data.day;
      this.month = data.month;
      this.year = data.year;
    }
  }
}
