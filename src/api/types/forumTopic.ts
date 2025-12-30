/**
 * ForumTopic class for Surfgram Telegram Bot SDK
 * @module types/forumTopic
 * @description This object represents a forum topic.
 * @see {@link https://core.telegram.org/bots/api#forumtopic Telegram API Documentation}
 * @class ForumTopic
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a ForumTopic object from the Telegram Bot API
 * @class ForumTopic
 */
export class ForumTopic {
  /**
   * Unique identifier of the forum topic
   * @type { number }
   * @memberof ForumTopic
   * @instance
   * @public
   */
  messageThreadId!: number;

  /**
   * Name of the topic
   * @type { string }
   * @memberof ForumTopic
   * @instance
   * @public
   */
  name!: string;

  /**
   * Color of the topic icon in RGB format
   * @type { number }
   * @memberof ForumTopic
   * @instance
   * @public
   */
  iconColor!: number;

  /**
   * Optional. Unique identifier of the custom emoji shown as the topic icon
   * @type { string }
   * @memberof ForumTopic
   * @instance
   * @public
   */
  iconCustomEmojiId?: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof ForumTopic
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof ForumTopic
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new ForumTopic instance from raw Telegram API data
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
