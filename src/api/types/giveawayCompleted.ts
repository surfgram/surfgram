/**
 * GiveawayCompleted class for Surfgram Telegram Bot SDK
 * @module types/giveawayCompleted
 * @description This object represents a service message about the completion of a giveaway without public winners.
 * @see {@link https://core.telegram.org/bots/api#giveawaycompleted Telegram API Documentation}
 * @class GiveawayCompleted
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { Message } from './message';

/**
 * Represents a GiveawayCompleted object from the Telegram Bot API
 * @class GiveawayCompleted
 */
export class GiveawayCompleted {
  /**
   * Number of winners in the giveaway
   * @type { number }
   * @memberof GiveawayCompleted
   * @instance
   * @public
   */
  winnerCount!: number;
  /**
   * Optional. Number of undistributed prizes
   * @type { number }
   * @memberof GiveawayCompleted
   * @instance
   * @public
   */
  unclaimedPrizeCount?: number;
  /**
   * Optional. Message with the giveaway that was completed, if it wasn't deleted
   * @type { Message }
   * @memberof GiveawayCompleted
   * @instance
   * @public
   */
  giveawayMessage?: Message;
  /**
   * Optional. True, if the giveaway is a Telegram Star giveaway. Otherwise, currently, the giveaway is a Telegram Premium giveaway.
   * @type { boolean }
   * @memberof GiveawayCompleted
   * @instance
   * @public
   */
  isStarGiveaway?: boolean;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof GiveawayCompleted
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof GiveawayCompleted
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new GiveawayCompleted instance from raw Telegram API data
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

      this.winnerCount = data.winnerCount;
      this.unclaimedPrizeCount = data.unclaimedPrizeCount;
      this.giveawayMessage = data.giveawayMessage;
      this.isStarGiveaway = data.isStarGiveaway;
    }
  }
}
