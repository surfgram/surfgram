/**
 * UsersShared class for Surfgram Telegram Bot SDK
 * @module types/usersShared
 * @description This object contains information about the users whose identifiers were shared with the bot using a KeyboardButtonRequestUsers button.
 * @see {@link https://core.telegram.org/bots/api#usersshared Telegram API Documentation}
 * @class UsersShared
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { SharedUser } from './sharedUser';

/**
 * Represents a UsersShared object from the Telegram Bot API
 * @class UsersShared
 */
export class UsersShared {
  /**
   * Identifier of the request
   * @type { number }
   * @memberof UsersShared
   * @instance
   * @public
   */
  requestId!: number;
  /**
   * Information about users shared with the bot.
   * @type { SharedUser[] }
   * @memberof UsersShared
   * @instance
   * @public
   */
  users!: SharedUser[];

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof UsersShared
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof UsersShared
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new UsersShared instance from raw Telegram API data
   * @constructor
   * @param {TelegramObject} raw - Raw data from Telegram API in JSON format
   * @param {Bot} bot - Bot instance for executing methods
   * @example
   * const message = new Message(rawData, botInstance);
   */
  constructor(raw?: TelegramObject, bot?: Bot) {
    this.raw = raw;
    this.bot = bot;

    if (raw) {
      const data = snakeToCamel(raw) as any;

      this.requestId = data.requestId;
      this.users = data.users;
    }
  }
}
