/**
 * ChatBoost class for Surfgram Telegram Bot SDK
 * @module types/chatBoost
 * @description This object contains information about a chat boost.
 * @see {@link https://core.telegram.org/bots/api#chatboost Telegram API Documentation}
 * @class ChatBoost
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { ChatBoostSource } from './chatBoostSource';

/**
 * Represents a ChatBoost object from the Telegram Bot API
 * @class ChatBoost
 */
export class ChatBoost {
  /**
   * Unique identifier of the boost
   * @type { string }
   * @memberof ChatBoost
   * @instance
   * @public
   */
  boostId!: string;

  /**
   * Point in time \(Unix timestamp\) when the chat was boosted
   * @type { number }
   * @memberof ChatBoost
   * @instance
   * @public
   */
  addDate!: number;

  /**
   * Point in time \(Unix timestamp\) when the boost will automatically expire, unless the booster's Telegram Premium subscription is prolonged
   * @type { number }
   * @memberof ChatBoost
   * @instance
   * @public
   */
  expirationDate!: number;

  /**
   * Source of the added boost
   * @type { ChatBoostSource }
   * @memberof ChatBoost
   * @instance
   * @public
   */
  source!: ChatBoostSource;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof ChatBoost
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof ChatBoost
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new ChatBoost instance from raw Telegram API data
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
