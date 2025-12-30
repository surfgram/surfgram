/**
 * WebAppInfo class for Surfgram Telegram Bot SDK
 * @module types/webAppInfo
 * @description Describes a Web App.
 * @see {@link https://core.telegram.org/bots/api#webappinfo Telegram API Documentation}
 * @class WebAppInfo
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a WebAppInfo object from the Telegram Bot API
 * @class WebAppInfo
 */
export class WebAppInfo {
  /**
   * An HTTPS URL of a Web App to be opened with additional data as specified in Initializing Web Apps
   * @type { string }
   * @memberof WebAppInfo
   * @instance
   * @public
   */
  url!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof WebAppInfo
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof WebAppInfo
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new WebAppInfo instance from raw Telegram API data
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
