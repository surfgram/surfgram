/**
 * MenuButton class for Surfgram Telegram Bot SDK
 * @module types/menuButton
 * @description This object describes the bot&#39;s menu button in a private chat. It should be one of
 * @see {@link https://core.telegram.org/bots/api#menubutton Telegram API Documentation}
 * @class MenuButton
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a MenuButton object from the Telegram Bot API
 * @class MenuButton
 */
export class MenuButton {
  /**
   * Type of the button, must be commands
   * @type { string }
   * @memberof MenuButton
   * @instance
   * @public
   */
  type!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof MenuButton
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof MenuButton
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new MenuButton instance from raw Telegram API data
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
