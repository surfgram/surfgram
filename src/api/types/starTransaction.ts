/**
 * StarTransaction class for Surfgram Telegram Bot SDK
 * @module types/starTransaction
 * @description Describes a Telegram Star transaction. Note that if the buyer initiates a chargeback with the payment provider from whom they acquired Stars \(e.g., Apple, Google\) following this transaction, the refunded Stars will be deducted from the bot&#39;s balance. This is outside of Telegram&#39;s control.
 * @see {@link https://core.telegram.org/bots/api#startransaction Telegram API Documentation}
 * @class StarTransaction
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { TransactionPartner } from './transactionPartner';

/**
 * Represents a StarTransaction object from the Telegram Bot API
 * @class StarTransaction
 */
export class StarTransaction {
  /**
   * Unique identifier of the transaction. Coincides with the identifier of the original transaction for refund transactions. Coincides with SuccessfulPayment.telegram\_payment\_charge\_id for successful incoming payments from users.
   * @type { string }
   * @memberof StarTransaction
   * @instance
   * @public
   */
  id!: string;
  /**
   * Integer amount of Telegram Stars transferred by the transaction
   * @type { number }
   * @memberof StarTransaction
   * @instance
   * @public
   */
  amount!: number;
  /**
   * Optional. The number of 1/1000000000 shares of Telegram Stars transferred by the transaction; from 0 to 999999999
   * @type { number }
   * @memberof StarTransaction
   * @instance
   * @public
   */
  nanostarAmount?: number;
  /**
   * Date the transaction was created in Unix time
   * @type { number }
   * @memberof StarTransaction
   * @instance
   * @public
   */
  date!: number;
  /**
   * Optional. Source of an incoming transaction \(e.g., a user purchasing goods or services, Fragment refunding a failed withdrawal\). Only for incoming transactions
   * @type { TransactionPartner }
   * @memberof StarTransaction
   * @instance
   * @public
   */
  source?: TransactionPartner;
  /**
   * Optional. Receiver of an outgoing transaction \(e.g., a user for a purchase refund, Fragment for a withdrawal\). Only for outgoing transactions
   * @type { TransactionPartner }
   * @memberof StarTransaction
   * @instance
   * @public
   */
  receiver?: TransactionPartner;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof StarTransaction
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof StarTransaction
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new StarTransaction instance from raw Telegram API data
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

      this.id = data.id;
      this.amount = data.amount;
      this.nanostarAmount = data.nanostarAmount;
      this.date = data.date;
      this.source = data.source;
      this.receiver = data.receiver;
    }
  }
}
