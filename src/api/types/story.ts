/**
 * Story class for Surfgram Telegram Bot SDK
 * @module types/story
 * @description This object represents a story.
 * @see {@link https://core.telegram.org/bots/api#story Telegram API Documentation}
 * @class Story
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { Chat } from './chat';

/**
 * Represents a Story object from the Telegram Bot API
 * @class Story
 */
export class Story {
  /**
   * Chat that posted the story
   * @type { Chat }
   * @memberof Story
   * @instance
   * @public
   */
  chat!: Chat;

  /**
   * Unique identifier for the story in the chat
   * @type { number }
   * @memberof Story
   * @instance
   * @public
   */
  id!: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof Story
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof Story
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new Story instance from raw Telegram API data
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
