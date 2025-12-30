/**
 * WebAppData class for Surfgram Telegram Bot SDK
 * @module types/webAppData
 * @description Describes data sent from a Web App to the bot.
 * @see {@link https://core.telegram.org/bots/api#webappdata Telegram API Documentation}
 * @class WebAppData
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a WebAppData object from the Telegram Bot API
 * @class WebAppData
 */
export class WebAppData {
  /**
   * The data. Be aware that a bad client can send arbitrary data in this field.
   * @type { string }
   * @memberof WebAppData
   * @instance
   * @public
   */
  data!: string;
  /**
   * Text of the web\_app keyboard button from which the Web App was opened. Be aware that a bad client can send arbitrary data in this field.
   * @type { string }
   * @memberof WebAppData
   * @instance
   * @public
   */
  buttonText!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof WebAppData
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof WebAppData
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new WebAppData instance from raw Telegram API data
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

      this.data = data.data;
      this.buttonText = data.buttonText;
    }
  }
}
