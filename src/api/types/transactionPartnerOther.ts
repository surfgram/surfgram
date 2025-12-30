/**
 * TransactionPartnerOther class for Surfgram Telegram Bot SDK
 * @module types/transactionPartnerOther
 * @description Describes a transaction with an unknown source or recipient.
 * @see {@link https://core.telegram.org/bots/api#transactionpartnerother Telegram API Documentation}
 * @class TransactionPartnerOther
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a TransactionPartnerOther object from the Telegram Bot API
 * @class TransactionPartnerOther
 */
export class TransactionPartnerOther {
  /**
   * Type of the transaction partner, always “other”
   * @type { string }
   * @memberof TransactionPartnerOther
   * @instance
   * @public
   */
  type!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof TransactionPartnerOther
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof TransactionPartnerOther
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new TransactionPartnerOther instance from raw Telegram API data
   * @constructor
   * @param {TelegramObject} raw - Raw data from Telegram API in JSON format
   * @param {Bot} bot - Bot instance for executing methods
   * @example
   * const message = new Message(rawData, botInstance);
   */
  constructor(raw?: TelegramObject, bot?: Bot) {
    this.raw = raw;
    this.bot = bot;

    if (raw) {
      const data = snakeToCamel(raw) as any;

      this.type = data.type;
    }
  }
}
