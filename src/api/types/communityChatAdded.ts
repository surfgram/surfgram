/**
 * CommunityChatAdded class for Surfgram Telegram Bot SDK
 * @module types/communityChatAdded
 * @description Describes a service message about a chat being added to a community.
 * @see {@link https://core.telegram.org/bots/api#communitychatadded Telegram API Documentation}
 * @class CommunityChatAdded
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { Community } from './community';

/**
 * Represents a CommunityChatAdded object from the Telegram Bot API
 * @class CommunityChatAdded
 */
export class CommunityChatAdded {
  /**
   * The new community to which the chat belongs
   * @type { Community }
   * @memberof CommunityChatAdded
   * @instance
   * @public
   */
  community!: Community;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof CommunityChatAdded
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof CommunityChatAdded
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new CommunityChatAdded instance from raw Telegram API data
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
