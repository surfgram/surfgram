/**
 * RevenueWithdrawalState class for Surfgram Telegram Bot SDK
 * @module types/revenueWithdrawalState
 * @description This object describes the state of a revenue withdrawal operation. Currently, it can be one of
 * @see {@link https://core.telegram.org/bots/api#revenuewithdrawalstate Telegram API Documentation}
 * @class RevenueWithdrawalState
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a RevenueWithdrawalState object from the Telegram Bot API
 * @class RevenueWithdrawalState
 */
export class RevenueWithdrawalState {
  /**
   * Type of the state, always “pending”
   * @type { string }
   * @memberof RevenueWithdrawalState
   * @instance
   * @public
   */
  type!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof RevenueWithdrawalState
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof RevenueWithdrawalState
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new RevenueWithdrawalState instance from raw Telegram API data
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

    if (raw) {
      const data = snakeToCamel(raw) as any;

      this.type = data.type;
    }
  }
}
