/**
 * BusinessConnection class for Surfgram Telegram Bot SDK
 * @module types/businessConnection
 * @description Describes the connection of the bot with a business account.
 * @see {@link https://core.telegram.org/bots/api#businessconnection Telegram API Documentation}
 * @class BusinessConnection
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { User } from './user';
import { BusinessBotRights } from './businessBotRights';

/**
 * Represents a BusinessConnection object from the Telegram Bot API
 * @class BusinessConnection
 */
export class BusinessConnection {
  /**
   * Unique identifier of the business connection
   * @type { string }
   * @memberof BusinessConnection
   * @instance
   * @public
   */
  id!: string;

  /**
   * Business account user that created the business connection
   * @type { User }
   * @memberof BusinessConnection
   * @instance
   * @public
   */
  user!: User;

  /**
   * Identifier of a private chat with the user who created the business connection. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier.
   * @type { number }
   * @memberof BusinessConnection
   * @instance
   * @public
   */
  userChatId!: number;

  /**
   * Date the connection was established in Unix time
   * @type { number }
   * @memberof BusinessConnection
   * @instance
   * @public
   */
  date!: number;

  /**
   * Optional. Rights of the business bot
   * @type { BusinessBotRights }
   * @memberof BusinessConnection
   * @instance
   * @public
   */
  rights?: BusinessBotRights;

  /**
   * True, if the connection is active
   * @type { boolean }
   * @memberof BusinessConnection
   * @instance
   * @public
   */
  isEnabled!: boolean;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof BusinessConnection
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof BusinessConnection
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new BusinessConnection instance from raw Telegram API data
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
