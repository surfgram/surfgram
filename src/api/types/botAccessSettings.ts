/**
 * BotAccessSettings class for Surfgram Telegram Bot SDK
 * @module types/botAccessSettings
 * @description This object describes the access settings of a bot.
 * @see {@link https://core.telegram.org/bots/api#botaccesssettings Telegram API Documentation}
 * @class BotAccessSettings
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { User } from './user';

/**
 * Represents a BotAccessSettings object from the Telegram Bot API
 * @class BotAccessSettings
 */
export class BotAccessSettings {
  /**
   * True, if only selected users can access the bot. The bot's owner can always access it.
   * @type { boolean }
   * @memberof BotAccessSettings
   * @instance
   * @public
   */
  isAccessRestricted!: boolean;

  /**
   * Optional. The list of other users who have access to the bot if the access is restricted
   * @type { User[] }
   * @memberof BotAccessSettings
   * @instance
   * @public
   */
  addedUsers?: User[];

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof BotAccessSettings
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof BotAccessSettings
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new BotAccessSettings instance from raw Telegram API data
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
