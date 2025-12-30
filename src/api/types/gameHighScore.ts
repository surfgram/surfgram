/**
 * GameHighScore class for Surfgram Telegram Bot SDK
 * @module types/gameHighScore
 * @description This object represents one row of the high scores table for a game.
 * @see {@link https://core.telegram.org/bots/api#gamehighscore Telegram API Documentation}
 * @class GameHighScore
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { User } from './user';

/**
 * Represents a GameHighScore object from the Telegram Bot API
 * @class GameHighScore
 */
export class GameHighScore {
  /**
   * Position in high score table for the game
   * @type { number }
   * @memberof GameHighScore
   * @instance
   * @public
   */
  position!: number;

  /**
   * User
   * @type { User }
   * @memberof GameHighScore
   * @instance
   * @public
   */
  user!: User;

  /**
   * Score
   * @type { number }
   * @memberof GameHighScore
   * @instance
   * @public
   */
  score!: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof GameHighScore
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof GameHighScore
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new GameHighScore instance from raw Telegram API data
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
