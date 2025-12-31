/**
 * AffiliateInfo class for Surfgram Telegram Bot SDK
 * @module types/affiliateInfo
 * @description Contains information about the affiliate that received a commission via this transaction.
 * @see {@link https://core.telegram.org/bots/api#affiliateinfo Telegram API Documentation}
 * @class AffiliateInfo
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { User } from './user';
import { Chat } from './chat';

/**
 * Represents a AffiliateInfo object from the Telegram Bot API
 * @class AffiliateInfo
 */
export class AffiliateInfo {
  /**
   * Optional. The bot or the user that received an affiliate commission if it was received by a bot or a user
   * @type { User }
   * @memberof AffiliateInfo
   * @instance
   * @public
   */
  affiliateUser?: User;

  /**
   * Optional. The chat that received an affiliate commission if it was received by a chat
   * @type { Chat }
   * @memberof AffiliateInfo
   * @instance
   * @public
   */
  affiliateChat?: Chat;

  /**
   * The number of Telegram Stars received by the affiliate for each 1000 Telegram Stars received by the bot from referred users
   * @type { number }
   * @memberof AffiliateInfo
   * @instance
   * @public
   */
  commissionPerMille!: number;

  /**
   * Integer amount of Telegram Stars received by the affiliate from the transaction, rounded to 0; can be negative for refunds
   * @type { number }
   * @memberof AffiliateInfo
   * @instance
   * @public
   */
  amount!: number;

  /**
   * Optional. The number of 1/1000000000 shares of Telegram Stars received by the affiliate; from -999999999 to 999999999; can be negative for refunds
   * @type { number }
   * @memberof AffiliateInfo
   * @instance
   * @public
   */
  nanostarAmount?: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof AffiliateInfo
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof AffiliateInfo
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new AffiliateInfo instance from raw Telegram API data
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
