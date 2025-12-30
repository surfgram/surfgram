/**
 * SuggestedPostRefunded class for Surfgram Telegram Bot SDK
 * @module types/suggestedPostRefunded
 * @description Describes a service message about a payment refund for a suggested post.
 * @see {@link https://core.telegram.org/bots/api#suggestedpostrefunded Telegram API Documentation}
 * @class SuggestedPostRefunded
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { Message } from './message';

/**
 * Represents a SuggestedPostRefunded object from the Telegram Bot API
 * @class SuggestedPostRefunded
 */
export class SuggestedPostRefunded {
  /**
   * Optional. Message containing the suggested post. Note that the Message object in this field will not contain the reply\_to\_message field even if it itself is a reply.
   * @type { Message }
   * @memberof SuggestedPostRefunded
   * @instance
   * @public
   */
  suggestedPostMessage?: Message;

  /**
   * Reason for the refund. Currently, one of “post\_deleted” if the post was deleted within 24 hours of being posted or removed from scheduled messages without being posted, or “payment\_refunded” if the payer refunded their payment.
   * @type { string }
   * @memberof SuggestedPostRefunded
   * @instance
   * @public
   */
  reason!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof SuggestedPostRefunded
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof SuggestedPostRefunded
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new SuggestedPostRefunded instance from raw Telegram API data
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
