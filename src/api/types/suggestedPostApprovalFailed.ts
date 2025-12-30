/**
 * SuggestedPostApprovalFailed class for Surfgram Telegram Bot SDK
 * @module types/suggestedPostApprovalFailed
 * @description Describes a service message about the failed approval of a suggested post. Currently, only caused by insufficient user funds at the time of approval.
 * @see {@link https://core.telegram.org/bots/api#suggestedpostapprovalfailed Telegram API Documentation}
 * @class SuggestedPostApprovalFailed
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { Message } from './message';
import { SuggestedPostPrice } from './suggestedPostPrice';

/**
 * Represents a SuggestedPostApprovalFailed object from the Telegram Bot API
 * @class SuggestedPostApprovalFailed
 */
export class SuggestedPostApprovalFailed {
  /**
   * Optional. Message containing the suggested post whose approval has failed. Note that the Message object in this field will not contain the reply\_to\_message field even if it itself is a reply.
   * @type { Message }
   * @memberof SuggestedPostApprovalFailed
   * @instance
   * @public
   */
  suggestedPostMessage?: Message;
  /**
   * Expected price of the post
   * @type { SuggestedPostPrice }
   * @memberof SuggestedPostApprovalFailed
   * @instance
   * @public
   */
  price!: SuggestedPostPrice;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof SuggestedPostApprovalFailed
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof SuggestedPostApprovalFailed
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new SuggestedPostApprovalFailed instance from raw Telegram API data
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

      this.suggestedPostMessage = data.suggestedPostMessage;
      this.price = data.price;
    }
  }
}
