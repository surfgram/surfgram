/**
 * ForumTopicCreated class for Surfgram Telegram Bot SDK
 * @module types/forumTopicCreated
 * @description This object represents a service message about a new forum topic created in the chat.
 * @see {@link https://core.telegram.org/bots/api#forumtopiccreated Telegram API Documentation}
 * @class ForumTopicCreated
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a ForumTopicCreated object from the Telegram Bot API
 * @class ForumTopicCreated
 */
export class ForumTopicCreated {
  /**
   * Name of the topic
   * @type { string }
   * @memberof ForumTopicCreated
   * @instance
   * @public
   */
  name!: string;
  /**
   * Color of the topic icon in RGB format
   * @type { number }
   * @memberof ForumTopicCreated
   * @instance
   * @public
   */
  iconColor!: number;
  /**
   * Optional. Unique identifier of the custom emoji shown as the topic icon
   * @type { string }
   * @memberof ForumTopicCreated
   * @instance
   * @public
   */
  iconCustomEmojiId?: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof ForumTopicCreated
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof ForumTopicCreated
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new ForumTopicCreated instance from raw Telegram API data
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

      this.name = data.name;
      this.iconColor = data.iconColor;
      this.iconCustomEmojiId = data.iconCustomEmojiId;
    }
  }
}
