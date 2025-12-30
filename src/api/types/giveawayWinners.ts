/**
 * GiveawayWinners class for Surfgram Telegram Bot SDK
 * @module types/giveawayWinners
 * @description This object represents a message about the completion of a giveaway with public winners.
 * @see {@link https://core.telegram.org/bots/api#giveawaywinners Telegram API Documentation}
 * @class GiveawayWinners
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { Chat } from './chat';
import { User } from './user';

/**
 * Represents a GiveawayWinners object from the Telegram Bot API
 * @class GiveawayWinners
 */
export class GiveawayWinners {
  /**
   * The chat that created the giveaway
   * @type { Chat }
   * @memberof GiveawayWinners
   * @instance
   * @public
   */
  chat!: Chat;

  /**
   * Identifier of the message with the giveaway in the chat
   * @type { number }
   * @memberof GiveawayWinners
   * @instance
   * @public
   */
  giveawayMessageId!: number;

  /**
   * Point in time \(Unix timestamp\) when winners of the giveaway were selected
   * @type { number }
   * @memberof GiveawayWinners
   * @instance
   * @public
   */
  winnersSelectionDate!: number;

  /**
   * Total number of winners in the giveaway
   * @type { number }
   * @memberof GiveawayWinners
   * @instance
   * @public
   */
  winnerCount!: number;

  /**
   * List of up to 100 winners of the giveaway
   * @type { User[] }
   * @memberof GiveawayWinners
   * @instance
   * @public
   */
  winners!: User[];

  /**
   * Optional. The number of other chats the user had to join in order to be eligible for the giveaway
   * @type { number }
   * @memberof GiveawayWinners
   * @instance
   * @public
   */
  additionalChatCount?: number;

  /**
   * Optional. The number of Telegram Stars that were split between giveaway winners; for Telegram Star giveaways only
   * @type { number }
   * @memberof GiveawayWinners
   * @instance
   * @public
   */
  prizeStarCount?: number;

  /**
   * Optional. The number of months the Telegram Premium subscription won from the giveaway will be active for; for Telegram Premium giveaways only
   * @type { number }
   * @memberof GiveawayWinners
   * @instance
   * @public
   */
  premiumSubscriptionMonthCount?: number;

  /**
   * Optional. Number of undistributed prizes
   * @type { number }
   * @memberof GiveawayWinners
   * @instance
   * @public
   */
  unclaimedPrizeCount?: number;

  /**
   * Optional. True, if only users who had joined the chats after the giveaway started were eligible to win
   * @type { boolean }
   * @memberof GiveawayWinners
   * @instance
   * @public
   */
  onlyNewMembers?: boolean;

  /**
   * Optional. True, if the giveaway was canceled because the payment for it was refunded
   * @type { boolean }
   * @memberof GiveawayWinners
   * @instance
   * @public
   */
  wasRefunded?: boolean;

  /**
   * Optional. Description of additional giveaway prize
   * @type { string }
   * @memberof GiveawayWinners
   * @instance
   * @public
   */
  prizeDescription?: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof GiveawayWinners
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof GiveawayWinners
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new GiveawayWinners instance from raw Telegram API data
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
