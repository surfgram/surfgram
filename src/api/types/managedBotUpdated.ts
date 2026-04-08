/**
 * ManagedBotUpdated class for Surfgram Telegram Bot SDK
 * @module types/managedBotUpdated
 * @description This object contains information about the creation, token update, or owner update of a bot that is managed by the current bot.
 * @see {@link https://core.telegram.org/bots/api#managedbotupdated Telegram API Documentation}
 * @class ManagedBotUpdated
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { User } from './user';

/**
 * Represents a ManagedBotUpdated object from the Telegram Bot API
 * @class ManagedBotUpdated
 */
export class ManagedBotUpdated {
  /**
   * User that created the bot
   * @type { User }
   * @memberof ManagedBotUpdated
   * @instance
   * @public
   */
  user!: User;

  /**
   * Information about the bot. Token of the bot can be fetched using the method getManagedBotToken.
   * @type { User }
   * @memberof ManagedBotUpdated
   * @instance
   * @public
   */
  managedBot!: User;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof ManagedBotUpdated
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof ManagedBotUpdated
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new ManagedBotUpdated instance from raw Telegram API data
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
