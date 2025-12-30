/**
 * TransactionPartnerFragment class for Surfgram Telegram Bot SDK
 * @module types/transactionPartnerFragment
 * @description Describes a withdrawal transaction with Fragment.
 * @see {@link https://core.telegram.org/bots/api#transactionpartnerfragment Telegram API Documentation}
 * @class TransactionPartnerFragment
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { RevenueWithdrawalState } from './revenueWithdrawalState';

/**
 * Represents a TransactionPartnerFragment object from the Telegram Bot API
 * @class TransactionPartnerFragment
 */
export class TransactionPartnerFragment {
  /**
   * Type of the transaction partner, always “fragment”
   * @type { string }
   * @memberof TransactionPartnerFragment
   * @instance
   * @public
   */
  type!: string;
  /**
   * Optional. State of the transaction if the transaction is outgoing
   * @type { RevenueWithdrawalState }
   * @memberof TransactionPartnerFragment
   * @instance
   * @public
   */
  withdrawalState?: RevenueWithdrawalState;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof TransactionPartnerFragment
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof TransactionPartnerFragment
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new TransactionPartnerFragment instance from raw Telegram API data
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
      this.withdrawalState = data.withdrawalState;
    }
  }
}
