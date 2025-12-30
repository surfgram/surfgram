/**
 * RevenueWithdrawalStatePending class for Surfgram Telegram Bot SDK
 * @module types/revenueWithdrawalStatePending
 * @description The withdrawal is in progress.
 * @see {@link https://core.telegram.org/bots/api#revenuewithdrawalstatepending Telegram API Documentation}
 * @class RevenueWithdrawalStatePending
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a RevenueWithdrawalStatePending object from the Telegram Bot API
 * @class RevenueWithdrawalStatePending
 */
export class RevenueWithdrawalStatePending {
  /**
   * Type of the state, always “pending”
   * @type { string }
   * @memberof RevenueWithdrawalStatePending
   * @instance
   * @public
   */
  type!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof RevenueWithdrawalStatePending
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof RevenueWithdrawalStatePending
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new RevenueWithdrawalStatePending instance from raw Telegram API data
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
