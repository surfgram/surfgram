/**
 * Dice class for Surfgram Telegram Bot SDK
 * @module types/dice
 * @description This object represents an animated emoji that displays a random value.
 * @see {@link https://core.telegram.org/bots/api#dice Telegram API Documentation}
 * @class Dice
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a Dice object from the Telegram Bot API
 * @class Dice
 */
export class Dice {
  /**
   * Emoji on which the dice throw animation is based
   * @type { string }
   * @memberof Dice
   * @instance
   * @public
   */
  emoji!: string;

  /**
   * Value of the dice, 1-6 for “”, “” and “” base emoji, 1-5 for “” and “” base emoji, 1-64 for “” base emoji
   * @type { number }
   * @memberof Dice
   * @instance
   * @public
   */
  value!: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof Dice
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof Dice
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new Dice instance from raw Telegram API data
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
