/**
 * Giveaway class for Surfgram Telegram Bot SDK
 * @module types/giveaway
 * @description This object represents a message about a scheduled giveaway.
 * @see {@link https://core.telegram.org/bots/api#giveaway Telegram API Documentation}
 * @class Giveaway
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { Chat } from './chat';

/**
 * Represents a Giveaway object from the Telegram Bot API
 * @class Giveaway
 */
export class Giveaway {
  /**
   * The list of chats which the user must join to participate in the giveaway
   * @type { Chat[] }
   * @memberof Giveaway
   * @instance
   * @public
   */
  chats!: Chat[];

  /**
   * Point in time \(Unix timestamp\) when winners of the giveaway will be selected
   * @type { number }
   * @memberof Giveaway
   * @instance
   * @public
   */
  winnersSelectionDate!: number;

  /**
   * The number of users which are supposed to be selected as winners of the giveaway
   * @type { number }
   * @memberof Giveaway
   * @instance
   * @public
   */
  winnerCount!: number;

  /**
   * Optional. True, if only users who join the chats after the giveaway started should be eligible to win
   * @type { boolean }
   * @memberof Giveaway
   * @instance
   * @public
   */
  onlyNewMembers?: boolean;

  /**
   * Optional. True, if the list of giveaway winners will be visible to everyone
   * @type { boolean }
   * @memberof Giveaway
   * @instance
   * @public
   */
  hasPublicWinners?: boolean;

  /**
   * Optional. Description of additional giveaway prize
   * @type { string }
   * @memberof Giveaway
   * @instance
   * @public
   */
  prizeDescription?: string;

  /**
   * Optional. A list of two-letter ISO 3166-1 alpha-2 country codes indicating the countries from which eligible users for the giveaway must come. If empty, then all users can participate in the giveaway. Users with a phone number that was bought on Fragment can always participate in giveaways.
   * @type { string[] }
   * @memberof Giveaway
   * @instance
   * @public
   */
  countryCodes?: string[];

  /**
   * Optional. The number of Telegram Stars to be split between giveaway winners; for Telegram Star giveaways only
   * @type { number }
   * @memberof Giveaway
   * @instance
   * @public
   */
  prizeStarCount?: number;

  /**
   * Optional. The number of months the Telegram Premium subscription won from the giveaway will be active for; for Telegram Premium giveaways only
   * @type { number }
   * @memberof Giveaway
   * @instance
   * @public
   */
  premiumSubscriptionMonthCount?: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof Giveaway
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof Giveaway
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new Giveaway instance from raw Telegram API data
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
