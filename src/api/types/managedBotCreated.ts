/**
 * ManagedBotCreated class for Surfgram Telegram Bot SDK
 * @module types/managedBotCreated
 * @description This object contains information about the bot that was created to be managed by the current bot.
 * @see {@link https://core.telegram.org/bots/api#managedbotcreated Telegram API Documentation}
 * @class ManagedBotCreated
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { User } from './user';

/**
 * Represents a ManagedBotCreated object from the Telegram Bot API
 * @class ManagedBotCreated
 */
export class ManagedBotCreated {
  /**
   * Information about the bot. The bot's token can be fetched using the method getManagedBotToken.
   * @type { User }
   * @memberof ManagedBotCreated
   * @instance
   * @public
   */
  managedBot!: User;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof ManagedBotCreated
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof ManagedBotCreated
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new ManagedBotCreated instance from raw Telegram API data
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
