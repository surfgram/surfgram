/**
 * ChatBoostUpdated class for Surfgram Telegram Bot SDK
 * @module types/chatBoostUpdated
 * @description This object represents a boost added to a chat or changed.
 * @see {@link https://core.telegram.org/bots/api#chatboostupdated Telegram API Documentation}
 * @class ChatBoostUpdated
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { Chat } from './chat';
import { ChatBoost } from './chatBoost';

/**
 * Represents a ChatBoostUpdated object from the Telegram Bot API
 * @class ChatBoostUpdated
 */
export class ChatBoostUpdated {
  /**
   * Chat which was boosted
   * @type { Chat }
   * @memberof ChatBoostUpdated
   * @instance
   * @public
   */
  chat!: Chat;

  /**
   * Information about the chat boost
   * @type { ChatBoost }
   * @memberof ChatBoostUpdated
   * @instance
   * @public
   */
  boost!: ChatBoost;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof ChatBoostUpdated
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof ChatBoostUpdated
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new ChatBoostUpdated instance from raw Telegram API data
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
