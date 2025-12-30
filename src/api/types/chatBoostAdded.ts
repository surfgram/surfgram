/**
 * ChatBoostAdded class for Surfgram Telegram Bot SDK
 * @module types/chatBoostAdded
 * @description This object represents a service message about a user boosting a chat.
 * @see {@link https://core.telegram.org/bots/api#chatboostadded Telegram API Documentation}
 * @class ChatBoostAdded
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a ChatBoostAdded object from the Telegram Bot API
 * @class ChatBoostAdded
 */
export class ChatBoostAdded {
  /**
   * Number of boosts added by the user
   * @type { number }
   * @memberof ChatBoostAdded
   * @instance
   * @public
   */
  boostCount!: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof ChatBoostAdded
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof ChatBoostAdded
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new ChatBoostAdded instance from raw Telegram API data
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
