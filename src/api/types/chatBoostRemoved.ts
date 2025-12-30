/**
 * ChatBoostRemoved class for Surfgram Telegram Bot SDK
 * @module types/chatBoostRemoved
 * @description This object represents a boost removed from a chat.
 * @see {@link https://core.telegram.org/bots/api#chatboostremoved Telegram API Documentation}
 * @class ChatBoostRemoved
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { Chat } from './chat';
import { ChatBoostSource } from './chatBoostSource';

/**
 * Represents a ChatBoostRemoved object from the Telegram Bot API
 * @class ChatBoostRemoved
 */
export class ChatBoostRemoved {
  /**
   * Chat which was boosted
   * @type { Chat }
   * @memberof ChatBoostRemoved
   * @instance
   * @public
   */
  chat!: Chat;

  /**
   * Unique identifier of the boost
   * @type { string }
   * @memberof ChatBoostRemoved
   * @instance
   * @public
   */
  boostId!: string;

  /**
   * Point in time \(Unix timestamp\) when the boost was removed
   * @type { number }
   * @memberof ChatBoostRemoved
   * @instance
   * @public
   */
  removeDate!: number;

  /**
   * Source of the removed boost
   * @type { ChatBoostSource }
   * @memberof ChatBoostRemoved
   * @instance
   * @public
   */
  source!: ChatBoostSource;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof ChatBoostRemoved
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof ChatBoostRemoved
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new ChatBoostRemoved instance from raw Telegram API data
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
