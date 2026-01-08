/**
 * ReactionTypePaid class for Surfgram Telegram Bot SDK
 * @module types/reactionTypePaid
 * @description The reaction is paid.
 * @see {@link https://core.telegram.org/bots/api#reactiontypepaid Telegram API Documentation}
 * @class ReactionTypePaid
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a ReactionTypePaid object from the Telegram Bot API
 * @class ReactionTypePaid
 */
export class ReactionTypePaid {
  /**
   * Type of the reaction, always “paid”
   * @type { string }
   * @memberof ReactionTypePaid
   * @instance
   * @public
   */
  type!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof ReactionTypePaid
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof ReactionTypePaid
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new ReactionTypePaid instance from raw Telegram API data
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
