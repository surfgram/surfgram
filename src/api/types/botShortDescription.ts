/**
 * BotShortDescription class for Surfgram Telegram Bot SDK
 * @module types/botShortDescription
 * @description This object represents the bot&#39;s short description.
 * @see {@link https://core.telegram.org/bots/api#botshortdescription Telegram API Documentation}
 * @class BotShortDescription
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a BotShortDescription object from the Telegram Bot API
 * @class BotShortDescription
 */
export class BotShortDescription {
  /**
   * The bot's short description
   * @type { string }
   * @memberof BotShortDescription
   * @instance
   * @public
   */
  shortDescription!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof BotShortDescription
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof BotShortDescription
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new BotShortDescription instance from raw Telegram API data
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
