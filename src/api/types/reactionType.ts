/**
 * ReactionType class for Surfgram Telegram Bot SDK
 * @module types/reactionType
 * @description This object describes the type of a reaction. Currently, it can be one of
 * @see {@link https://core.telegram.org/bots/api#reactiontype Telegram API Documentation}
 * @class ReactionType
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a ReactionType object from the Telegram Bot API
 * @class ReactionType
 */
export class ReactionType {
  /**
   * Type of the reaction, always “emoji”
   * @type { string }
   * @memberof ReactionType
   * @instance
   * @public
   */
  type!: string;

  /**
   * Reaction emoji. Currently, it can be one of "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""
   * @type { string }
   * @memberof ReactionType
   * @instance
   * @public
   */
  emoji!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof ReactionType
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof ReactionType
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new ReactionType instance from raw Telegram API data
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
