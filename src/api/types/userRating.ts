/**
 * UserRating class for Surfgram Telegram Bot SDK
 * @module types/userRating
 * @description This object describes the rating of a user based on their Telegram Star spendings.
 * @see {@link https://core.telegram.org/bots/api#userrating Telegram API Documentation}
 * @class UserRating
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a UserRating object from the Telegram Bot API
 * @class UserRating
 */
export class UserRating {
  /**
   * Current level of the user, indicating their reliability when purchasing digital goods and services. A higher level suggests a more trustworthy customer; a negative level is likely reason for concern.
   * @type { number }
   * @memberof UserRating
   * @instance
   * @public
   */
  level!: number;

  /**
   * Numerical value of the user's rating; the higher the rating, the better
   * @type { number }
   * @memberof UserRating
   * @instance
   * @public
   */
  rating!: number;

  /**
   * The rating value required to get the current level
   * @type { number }
   * @memberof UserRating
   * @instance
   * @public
   */
  currentLevelRating!: number;

  /**
   * Optional. The rating value required to get to the next level; omitted if the maximum level was reached
   * @type { number }
   * @memberof UserRating
   * @instance
   * @public
   */
  nextLevelRating?: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof UserRating
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof UserRating
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new UserRating instance from raw Telegram API data
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
