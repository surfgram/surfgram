/**
 * ForumTopicClosed class for Surfgram Telegram Bot SDK
 * @module types/forumTopicClosed
 * @description This object represents a service message about a forum topic closed in the chat. Currently holds no information.
 * @see {@link https://core.telegram.org/bots/api#forumtopicclosed Telegram API Documentation}
 * @class ForumTopicClosed
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a ForumTopicClosed object from the Telegram Bot API
 * @class ForumTopicClosed
 */
export class ForumTopicClosed {
  /**
   * Optional. New name of the topic, if it was edited
   * @type { string }
   * @memberof ForumTopicClosed
   * @instance
   * @public
   */
  name?: string;
  /**
   * Optional. New identifier of the custom emoji shown as the topic icon, if it was edited; an empty string if the icon was removed
   * @type { string }
   * @memberof ForumTopicClosed
   * @instance
   * @public
   */
  iconCustomEmojiId?: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof ForumTopicClosed
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof ForumTopicClosed
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new ForumTopicClosed instance from raw Telegram API data
   * @constructor
   * @param {TelegramObject} raw - Raw data from Telegram API in JSON format
   * @param {Bot} bot - Bot instance for executing methods
   * @example
   * const message = new Message(rawData, botInstance);
   */
  constructor(raw?: TelegramObject, bot?: Bot) {
    this.raw = raw;
    this.bot = bot;

    if (raw) {
      const data = snakeToCamel(raw) as any;

      this.name = data.name;
      this.iconCustomEmojiId = data.iconCustomEmojiId;
    }
  }
}
