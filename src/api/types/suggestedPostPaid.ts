/**
 * SuggestedPostPaid class for Surfgram Telegram Bot SDK
 * @module types/suggestedPostPaid
 * @description Describes a service message about a successful payment for a suggested post.
 * @see {@link https://core.telegram.org/bots/api#suggestedpostpaid Telegram API Documentation}
 * @class SuggestedPostPaid
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { Message } from './message';
import { StarAmount } from './starAmount';

/**
 * Represents a SuggestedPostPaid object from the Telegram Bot API
 * @class SuggestedPostPaid
 */
export class SuggestedPostPaid {
  /**
   * Optional. Message containing the suggested post. Note that the Message object in this field will not contain the reply\_to\_message field even if it itself is a reply.
   * @type { Message }
   * @memberof SuggestedPostPaid
   * @instance
   * @public
   */
  suggestedPostMessage?: Message;

  /**
   * Currency in which the payment was made. Currently, one of “XTR” for Telegram Stars or “TON” for toncoins
   * @type { string }
   * @memberof SuggestedPostPaid
   * @instance
   * @public
   */
  currency!: string;

  /**
   * Optional. The amount of the currency that was received by the channel in nanotoncoins; for payments in toncoins only
   * @type { number }
   * @memberof SuggestedPostPaid
   * @instance
   * @public
   */
  amount?: number;

  /**
   * Optional. The amount of Telegram Stars that was received by the channel; for payments in Telegram Stars only
   * @type { StarAmount }
   * @memberof SuggestedPostPaid
   * @instance
   * @public
   */
  starAmount?: StarAmount;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof SuggestedPostPaid
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof SuggestedPostPaid
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new SuggestedPostPaid instance from raw Telegram API data
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
