/**
 * SuggestedPostApproved class for Surfgram Telegram Bot SDK
 * @module types/suggestedPostApproved
 * @description Describes a service message about the approval of a suggested post.
 * @see {@link https://core.telegram.org/bots/api#suggestedpostapproved Telegram API Documentation}
 * @class SuggestedPostApproved
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { Message } from './message';
import { SuggestedPostPrice } from './suggestedPostPrice';

/**
 * Represents a SuggestedPostApproved object from the Telegram Bot API
 * @class SuggestedPostApproved
 */
export class SuggestedPostApproved {
  /**
   * Optional. Message containing the suggested post. Note that the Message object in this field will not contain the reply\_to\_message field even if it itself is a reply.
   * @type { Message }
   * @memberof SuggestedPostApproved
   * @instance
   * @public
   */
  suggestedPostMessage?: Message;
  /**
   * Optional. Amount paid for the post
   * @type { SuggestedPostPrice }
   * @memberof SuggestedPostApproved
   * @instance
   * @public
   */
  price?: SuggestedPostPrice;
  /**
   * Date when the post will be published
   * @type { number }
   * @memberof SuggestedPostApproved
   * @instance
   * @public
   */
  sendDate!: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof SuggestedPostApproved
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof SuggestedPostApproved
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new SuggestedPostApproved instance from raw Telegram API data
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
      this.sendDate = data.sendDate;
    }
  }
}
