/**
 * UserChatBoosts class for Surfgram Telegram Bot SDK
 * @module types/userChatBoosts
 * @description This object represents a list of boosts added to a chat by a user.
 * @see {@link https://core.telegram.org/bots/api#userchatboosts Telegram API Documentation}
 * @class UserChatBoosts
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { ChatBoost } from './chatBoost';

/**
 * Represents a UserChatBoosts object from the Telegram Bot API
 * @class UserChatBoosts
 */
export class UserChatBoosts {
  /**
   * The list of boosts added to the chat by the user
   * @type { ChatBoost[] }
   * @memberof UserChatBoosts
   * @instance
   * @public
   */
  boosts!: ChatBoost[];

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof UserChatBoosts
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof UserChatBoosts
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new UserChatBoosts instance from raw Telegram API data
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
