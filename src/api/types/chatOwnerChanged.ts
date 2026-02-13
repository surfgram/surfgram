/**
 * ChatOwnerChanged class for Surfgram Telegram Bot SDK
 * @module types/chatOwnerChanged
 * @description Describes a service message about an ownership change in the chat.
 * @see {@link https://core.telegram.org/bots/api#chatownerchanged Telegram API Documentation}
 * @class ChatOwnerChanged
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { User } from './user';

/**
 * Represents a ChatOwnerChanged object from the Telegram Bot API
 * @class ChatOwnerChanged
 */
export class ChatOwnerChanged {
  /**
   * The new owner of the chat
   * @type { User }
   * @memberof ChatOwnerChanged
   * @instance
   * @public
   */
  newOwner!: User;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof ChatOwnerChanged
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof ChatOwnerChanged
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new ChatOwnerChanged instance from raw Telegram API data
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
