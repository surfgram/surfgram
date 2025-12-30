/**
 * ReactionTypeEmoji class for Surfgram Telegram Bot SDK
 * @module types/reactionTypeEmoji
 * @description The reaction is based on an emoji.
 * @see {@link https://core.telegram.org/bots/api#reactiontypeemoji Telegram API Documentation}
 * @class ReactionTypeEmoji
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a ReactionTypeEmoji object from the Telegram Bot API
 * @class ReactionTypeEmoji
 */
export class ReactionTypeEmoji {
  /**
   * Type of the reaction, always “emoji”
   * @type { string }
   * @memberof ReactionTypeEmoji
   * @instance
   * @public
   */
  type!: string;

  /**
   * Reaction emoji. Currently, it can be one of "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""
   * @type { string }
   * @memberof ReactionTypeEmoji
   * @instance
   * @public
   */
  emoji!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof ReactionTypeEmoji
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof ReactionTypeEmoji
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new ReactionTypeEmoji instance from raw Telegram API data
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
