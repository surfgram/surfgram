/**
 * DirectMessagesTopic class for Surfgram Telegram Bot SDK
 * @module types/directMessagesTopic
 * @description Describes a topic of a direct messages chat.
 * @see {@link https://core.telegram.org/bots/api#directmessagestopic Telegram API Documentation}
 * @class DirectMessagesTopic
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { User } from './user';

/**
 * Represents a DirectMessagesTopic object from the Telegram Bot API
 * @class DirectMessagesTopic
 */
export class DirectMessagesTopic {
  /**
   * Unique identifier of the topic. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier.
   * @type { number }
   * @memberof DirectMessagesTopic
   * @instance
   * @public
   */
  topicId!: number;

  /**
   * Optional. Information about the user that created the topic. Currently, it is always present
   * @type { User }
   * @memberof DirectMessagesTopic
   * @instance
   * @public
   */
  user?: User;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof DirectMessagesTopic
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof DirectMessagesTopic
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new DirectMessagesTopic instance from raw Telegram API data
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
