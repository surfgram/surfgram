/**
 * TransactionPartnerTelegramAds class for Surfgram Telegram Bot SDK
 * @module types/transactionPartnerTelegramAds
 * @description Describes a withdrawal transaction to the Telegram Ads platform.
 * @see {@link https://core.telegram.org/bots/api#transactionpartnertelegramads Telegram API Documentation}
 * @class TransactionPartnerTelegramAds
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a TransactionPartnerTelegramAds object from the Telegram Bot API
 * @class TransactionPartnerTelegramAds
 */
export class TransactionPartnerTelegramAds {
  /**
   * Type of the transaction partner, always “telegram\_ads”
   * @type { string }
   * @memberof TransactionPartnerTelegramAds
   * @instance
   * @public
   */
  type!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof TransactionPartnerTelegramAds
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof TransactionPartnerTelegramAds
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new TransactionPartnerTelegramAds instance from raw Telegram API data
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
