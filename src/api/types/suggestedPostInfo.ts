/**
 * SuggestedPostInfo class for Surfgram Telegram Bot SDK
 * @module types/suggestedPostInfo
 * @description Contains information about a suggested post.
 * @see {@link https://core.telegram.org/bots/api#suggestedpostinfo Telegram API Documentation}
 * @class SuggestedPostInfo
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { SuggestedPostPrice } from './suggestedPostPrice';

/**
 * Represents a SuggestedPostInfo object from the Telegram Bot API
 * @class SuggestedPostInfo
 */
export class SuggestedPostInfo {
  /**
   * State of the suggested post. Currently, it can be one of “pending”, “approved”, “declined”.
   * @type { string }
   * @memberof SuggestedPostInfo
   * @instance
   * @public
   */
  state!: string;
  /**
   * Optional. Proposed price of the post. If the field is omitted, then the post is unpaid.
   * @type { SuggestedPostPrice }
   * @memberof SuggestedPostInfo
   * @instance
   * @public
   */
  price?: SuggestedPostPrice;
  /**
   * Optional. Proposed send date of the post. If the field is omitted, then the post can be published at any time within 30 days at the sole discretion of the user or administrator who approves it.
   * @type { number }
   * @memberof SuggestedPostInfo
   * @instance
   * @public
   */
  sendDate?: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof SuggestedPostInfo
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof SuggestedPostInfo
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new SuggestedPostInfo instance from raw Telegram API data
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

      this.state = data.state;
      this.price = data.price;
      this.sendDate = data.sendDate;
    }
  }
}
