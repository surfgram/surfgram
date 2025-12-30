/**
 * InlineQueryResultGame class for Surfgram Telegram Bot SDK
 * @module types/inlineQueryResultGame
 * @description Represents a Game.
 * @see {@link https://core.telegram.org/bots/api#inlinequeryresultgame Telegram API Documentation}
 * @class InlineQueryResultGame
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { InlineKeyboardMarkup } from './inlineKeyboardMarkup';

/**
 * Represents a InlineQueryResultGame object from the Telegram Bot API
 * @class InlineQueryResultGame
 */
export class InlineQueryResultGame {
  /**
   * Type of the result, must be game
   * @type { string }
   * @memberof InlineQueryResultGame
   * @instance
   * @public
   */
  type!: string;

  /**
   * Unique identifier for this result, 1-64 bytes
   * @type { string }
   * @memberof InlineQueryResultGame
   * @instance
   * @public
   */
  id!: string;

  /**
   * Short name of the game
   * @type { string }
   * @memberof InlineQueryResultGame
   * @instance
   * @public
   */
  gameShortName!: string;

  /**
   * Optional. Inline keyboard attached to the message
   * @type { InlineKeyboardMarkup }
   * @memberof InlineQueryResultGame
   * @instance
   * @public
   */
  replyMarkup?: InlineKeyboardMarkup;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InlineQueryResultGame
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InlineQueryResultGame
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InlineQueryResultGame instance from raw Telegram API data
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
