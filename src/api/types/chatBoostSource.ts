/**
 * ChatBoostSource class for Surfgram Telegram Bot SDK
 * @module types/chatBoostSource
 * @description This object describes the source of a chat boost. It can be one of
 * @see {@link https://core.telegram.org/bots/api#chatboostsource Telegram API Documentation}
 * @class ChatBoostSource
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { User } from './user';

/**
 * Represents a ChatBoostSource object from the Telegram Bot API
 * @class ChatBoostSource
 */
export class ChatBoostSource {
  /**
   * Source of the boost, always “premium”
   * @type { string }
   * @memberof ChatBoostSource
   * @instance
   * @public
   */
  source!: string;
  /**
   * User that boosted the chat
   * @type { User }
   * @memberof ChatBoostSource
   * @instance
   * @public
   */
  user!: User;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof ChatBoostSource
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof ChatBoostSource
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new ChatBoostSource instance from raw Telegram API data
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

    if (raw) {
      const data = snakeToCamel(raw) as any;

      this.source = data.source;
      this.user = data.user;
    }
  }
}
