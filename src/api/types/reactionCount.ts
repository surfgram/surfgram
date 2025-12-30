/**
 * ReactionCount class for Surfgram Telegram Bot SDK
 * @module types/reactionCount
 * @description Represents a reaction added to a message along with the number of times it was added.
 * @see {@link https://core.telegram.org/bots/api#reactioncount Telegram API Documentation}
 * @class ReactionCount
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { ReactionType } from './reactionType';

/**
 * Represents a ReactionCount object from the Telegram Bot API
 * @class ReactionCount
 */
export class ReactionCount {
  /**
   * Type of the reaction
   * @type { ReactionType }
   * @memberof ReactionCount
   * @instance
   * @public
   */
  type!: ReactionType;

  /**
   * Number of times the reaction was added
   * @type { number }
   * @memberof ReactionCount
   * @instance
   * @public
   */
  totalCount!: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof ReactionCount
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof ReactionCount
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new ReactionCount instance from raw Telegram API data
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
