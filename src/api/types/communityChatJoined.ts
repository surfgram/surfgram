/**
 * CommunityChatJoined class for Surfgram Telegram Bot SDK
 * @module types/communityChatJoined
 * @description Describes a service message about a chat being joined by a user from a community.
 * @see {@link https://core.telegram.org/bots/api#communitychatjoined Telegram API Documentation}
 * @class CommunityChatJoined
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { Community } from './community';

/**
 * Represents a CommunityChatJoined object from the Telegram Bot API
 * @class CommunityChatJoined
 */
export class CommunityChatJoined {
  /**
   * The community from which the chat was joined
   * @type { Community }
   * @memberof CommunityChatJoined
   * @instance
   * @public
   */
  community!: Community;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof CommunityChatJoined
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof CommunityChatJoined
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new CommunityChatJoined instance from raw Telegram API data
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
