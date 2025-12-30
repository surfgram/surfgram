/**
 * MessageAutoDeleteTimerChanged class for Surfgram Telegram Bot SDK
 * @module types/messageAutoDeleteTimerChanged
 * @description This object represents a service message about a change in auto-delete timer settings.
 * @see {@link https://core.telegram.org/bots/api#messageautodeletetimerchanged Telegram API Documentation}
 * @class MessageAutoDeleteTimerChanged
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a MessageAutoDeleteTimerChanged object from the Telegram Bot API
 * @class MessageAutoDeleteTimerChanged
 */
export class MessageAutoDeleteTimerChanged {
  /**
   * New auto-delete time for messages in the chat; in seconds
   * @type { number }
   * @memberof MessageAutoDeleteTimerChanged
   * @instance
   * @public
   */
  messageAutoDeleteTime!: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof MessageAutoDeleteTimerChanged
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof MessageAutoDeleteTimerChanged
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new MessageAutoDeleteTimerChanged instance from raw Telegram API data
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
