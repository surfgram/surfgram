/**
 * ChatBoostSourceGiveaway class for Surfgram Telegram Bot SDK
 * @module types/chatBoostSourceGiveaway
 * @description The boost was obtained by the creation of a Telegram Premium or a Telegram Star giveaway. This boosts the chat 4 times for the duration of the corresponding Telegram Premium subscription for Telegram Premium giveaways and prize\_star\_count / 500 times for one year for Telegram Star giveaways.
 * @see {@link https://core.telegram.org/bots/api#chatboostsourcegiveaway Telegram API Documentation}
 * @class ChatBoostSourceGiveaway
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { User } from './user';

/**
 * Represents a ChatBoostSourceGiveaway object from the Telegram Bot API
 * @class ChatBoostSourceGiveaway
 */
export class ChatBoostSourceGiveaway {
  /**
   * Source of the boost, always “giveaway”
   * @type { string }
   * @memberof ChatBoostSourceGiveaway
   * @instance
   * @public
   */
  source!: string;

  /**
   * Identifier of a message in the chat with the giveaway; the message could have been deleted already. May be 0 if the message isn't sent yet.
   * @type { number }
   * @memberof ChatBoostSourceGiveaway
   * @instance
   * @public
   */
  giveawayMessageId!: number;

  /**
   * Optional. User that won the prize in the giveaway if any; for Telegram Premium giveaways only
   * @type { User }
   * @memberof ChatBoostSourceGiveaway
   * @instance
   * @public
   */
  user?: User;

  /**
   * Optional. The number of Telegram Stars to be split between giveaway winners; for Telegram Star giveaways only
   * @type { number }
   * @memberof ChatBoostSourceGiveaway
   * @instance
   * @public
   */
  prizeStarCount?: number;

  /**
   * Optional. True, if the giveaway was completed, but there was no user to win the prize
   * @type { boolean }
   * @memberof ChatBoostSourceGiveaway
   * @instance
   * @public
   */
  isUnclaimed?: boolean;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof ChatBoostSourceGiveaway
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof ChatBoostSourceGiveaway
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new ChatBoostSourceGiveaway instance from raw Telegram API data
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
    const converted = snakeToCamel(raw);
    Object.assign(this, converted);
  }
}
