/**
 * Community class for Surfgram Telegram Bot SDK
 * @module types/community
 * @description Represents a community \(a group of chats\).
 * @see {@link https://core.telegram.org/bots/api#community Telegram API Documentation}
 * @class Community
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a Community object from the Telegram Bot API
 * @class Community
 */
export class Community {
  /**
   * Unique identifier for this community. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier.
   * @type { number }
   * @memberof Community
   * @instance
   * @public
   */
  id!: number;

  /**
   * Name of the community
   * @type { string }
   * @memberof Community
   * @instance
   * @public
   */
  name!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof Community
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof Community
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new Community instance from raw Telegram API data
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
    const converted = snakeToCamel(raw);
    Object.assign(this, converted);
    this.bot = bot;
  }
}
