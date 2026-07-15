/**
 * BotSubscriptionUpdated class for Surfgram Telegram Bot SDK
 * @module types/botSubscriptionUpdated
 * @description This object contains information about changes to a user payment subscription toward the current bot.
 * @see {@link https://core.telegram.org/bots/api#botsubscriptionupdated Telegram API Documentation}
 * @class BotSubscriptionUpdated
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { User } from './user';

/**
 * Represents a BotSubscriptionUpdated object from the Telegram Bot API
 * @class BotSubscriptionUpdated
 */
export class BotSubscriptionUpdated {
  /**
   * User who subscribed for payments toward the bot
   * @type { User }
   * @memberof BotSubscriptionUpdated
   * @instance
   * @public
   */
  user!: User;

  /**
   * Bot-specified invoice payload
   * @type { string }
   * @memberof BotSubscriptionUpdated
   * @instance
   * @public
   */
  invoicePayload!: string;

  /**
   * The new state of the subscription. Currently, it can be one of “canceled” if the user canceled the subscription, “active” if the user re-enabled a previously canceled subscription, or “failed” if payment for the subscription failed.
   * @type { string }
   * @memberof BotSubscriptionUpdated
   * @instance
   * @public
   */
  state!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof BotSubscriptionUpdated
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof BotSubscriptionUpdated
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new BotSubscriptionUpdated instance from raw Telegram API data
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
    const converted = snakeToCamel(raw);
    Object.assign(this, converted);
    this.bot = bot;
  }
}
