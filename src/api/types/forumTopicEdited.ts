/**
 * ForumTopicEdited class for Surfgram Telegram Bot SDK
 * @module types/forumTopicEdited
 * @description This object represents a service message about an edited forum topic.
 * @see {@link https://core.telegram.org/bots/api#forumtopicedited Telegram API Documentation}
 * @class ForumTopicEdited
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a ForumTopicEdited object from the Telegram Bot API
 * @class ForumTopicEdited
 */
export class ForumTopicEdited {
  /**
   * Optional. New name of the topic, if it was edited
   * @type { string }
   * @memberof ForumTopicEdited
   * @instance
   * @public
   */
  name?: string;

  /**
   * Optional. New identifier of the custom emoji shown as the topic icon, if it was edited; an empty string if the icon was removed
   * @type { string }
   * @memberof ForumTopicEdited
   * @instance
   * @public
   */
  iconCustomEmojiId?: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof ForumTopicEdited
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof ForumTopicEdited
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new ForumTopicEdited instance from raw Telegram API data
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
