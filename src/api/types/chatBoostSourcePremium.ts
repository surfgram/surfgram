/**
 * ChatBoostSourcePremium class for Surfgram Telegram Bot SDK
 * @module types/chatBoostSourcePremium
 * @description The boost was obtained by subscribing to Telegram Premium or by gifting a Telegram Premium subscription to another user.
 * @see {@link https://core.telegram.org/bots/api#chatboostsourcepremium Telegram API Documentation}
 * @class ChatBoostSourcePremium
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { User } from './user';

/**
 * Represents a ChatBoostSourcePremium object from the Telegram Bot API
 * @class ChatBoostSourcePremium
 */
export class ChatBoostSourcePremium {
  /**
   * Source of the boost, always “premium”
   * @type { string }
   * @memberof ChatBoostSourcePremium
   * @instance
   * @public
   */
  source!: string;

  /**
   * User that boosted the chat
   * @type { User }
   * @memberof ChatBoostSourcePremium
   * @instance
   * @public
   */
  user!: User;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof ChatBoostSourcePremium
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof ChatBoostSourcePremium
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new ChatBoostSourcePremium instance from raw Telegram API data
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
