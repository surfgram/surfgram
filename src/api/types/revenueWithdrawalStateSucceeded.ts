/**
 * RevenueWithdrawalStateSucceeded class for Surfgram Telegram Bot SDK
 * @module types/revenueWithdrawalStateSucceeded
 * @description The withdrawal succeeded.
 * @see {@link https://core.telegram.org/bots/api#revenuewithdrawalstatesucceeded Telegram API Documentation}
 * @class RevenueWithdrawalStateSucceeded
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a RevenueWithdrawalStateSucceeded object from the Telegram Bot API
 * @class RevenueWithdrawalStateSucceeded
 */
export class RevenueWithdrawalStateSucceeded {
  /**
   * Type of the state, always “succeeded”
   * @type { string }
   * @memberof RevenueWithdrawalStateSucceeded
   * @instance
   * @public
   */
  type!: string;

  /**
   * Date the withdrawal was completed in Unix time
   * @type { number }
   * @memberof RevenueWithdrawalStateSucceeded
   * @instance
   * @public
   */
  date!: number;

  /**
   * An HTTPS URL that can be used to see transaction details
   * @type { string }
   * @memberof RevenueWithdrawalStateSucceeded
   * @instance
   * @public
   */
  url!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof RevenueWithdrawalStateSucceeded
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof RevenueWithdrawalStateSucceeded
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new RevenueWithdrawalStateSucceeded instance from raw Telegram API data
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
