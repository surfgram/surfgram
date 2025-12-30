/**
 * BotDescription class for Surfgram Telegram Bot SDK
 * @module types/botDescription
 * @description This object represents the bot&#39;s description.
 * @see {@link https://core.telegram.org/bots/api#botdescription Telegram API Documentation}
 * @class BotDescription
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a BotDescription object from the Telegram Bot API
 * @class BotDescription
 */
export class BotDescription {
  /**
   * The bot's description
   * @type { string }
   * @memberof BotDescription
   * @instance
   * @public
   */
  description!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof BotDescription
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof BotDescription
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new BotDescription instance from raw Telegram API data
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

    if (raw) {
      const data = snakeToCamel(raw) as any;

      this.description = data.description;
    }
  }
}
