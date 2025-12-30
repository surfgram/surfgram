/**
 * BotName class for Surfgram Telegram Bot SDK
 * @module types/botName
 * @description This object represents the bot&#39;s name.
 * @see {@link https://core.telegram.org/bots/api#botname Telegram API Documentation}
 * @class BotName
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a BotName object from the Telegram Bot API
 * @class BotName
 */
export class BotName {
  /**
   * The bot's name
   * @type { string }
   * @memberof BotName
   * @instance
   * @public
   */
  name!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof BotName
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof BotName
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new BotName instance from raw Telegram API data
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
