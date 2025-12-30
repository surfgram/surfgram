/**
 * TransactionPartnerTelegramApi class for Surfgram Telegram Bot SDK
 * @module types/transactionPartnerTelegramApi
 * @description Describes a transaction with payment for paid broadcasting.
 * @see {@link https://core.telegram.org/bots/api#transactionpartnertelegramapi Telegram API Documentation}
 * @class TransactionPartnerTelegramApi
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a TransactionPartnerTelegramApi object from the Telegram Bot API
 * @class TransactionPartnerTelegramApi
 */
export class TransactionPartnerTelegramApi {
  /**
   * Type of the transaction partner, always “telegram\_api”
   * @type { string }
   * @memberof TransactionPartnerTelegramApi
   * @instance
   * @public
   */
  type!: string;
  /**
   * The number of successful requests that exceeded regular limits and were therefore billed
   * @type { number }
   * @memberof TransactionPartnerTelegramApi
   * @instance
   * @public
   */
  requestCount!: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof TransactionPartnerTelegramApi
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof TransactionPartnerTelegramApi
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new TransactionPartnerTelegramApi instance from raw Telegram API data
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
      this.requestCount = data.requestCount;
    }
  }
}
