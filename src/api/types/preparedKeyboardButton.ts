/**
 * PreparedKeyboardButton class for Surfgram Telegram Bot SDK
 * @module types/preparedKeyboardButton
 * @description Describes a keyboard button to be used by a user of a Mini App.
 * @see {@link https://core.telegram.org/bots/api#preparedkeyboardbutton Telegram API Documentation}
 * @class PreparedKeyboardButton
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a PreparedKeyboardButton object from the Telegram Bot API
 * @class PreparedKeyboardButton
 */
export class PreparedKeyboardButton {
  /**
   * Unique identifier of the keyboard button
   * @type { string }
   * @memberof PreparedKeyboardButton
   * @instance
   * @public
   */
  id!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof PreparedKeyboardButton
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof PreparedKeyboardButton
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new PreparedKeyboardButton instance from raw Telegram API data
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
