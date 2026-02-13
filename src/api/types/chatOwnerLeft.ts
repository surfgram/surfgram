/**
 * ChatOwnerLeft class for Surfgram Telegram Bot SDK
 * @module types/chatOwnerLeft
 * @description Describes a service message about the chat owner leaving the chat.
 * @see {@link https://core.telegram.org/bots/api#chatownerleft Telegram API Documentation}
 * @class ChatOwnerLeft
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { User } from './user';

/**
 * Represents a ChatOwnerLeft object from the Telegram Bot API
 * @class ChatOwnerLeft
 */
export class ChatOwnerLeft {
  /**
   * Optional. The user which will be the new owner of the chat if the previous owner does not return to the chat
   * @type { User }
   * @memberof ChatOwnerLeft
   * @instance
   * @public
   */
  newOwner?: User;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof ChatOwnerLeft
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof ChatOwnerLeft
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new ChatOwnerLeft instance from raw Telegram API data
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
