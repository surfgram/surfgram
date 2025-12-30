/**
 * StoryAreaTypeUniqueGift class for Surfgram Telegram Bot SDK
 * @module types/storyAreaTypeUniqueGift
 * @description Describes a story area pointing to a unique gift. Currently, a story can have at most 1 unique gift area.
 * @see {@link https://core.telegram.org/bots/api#storyareatypeuniquegift Telegram API Documentation}
 * @class StoryAreaTypeUniqueGift
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a StoryAreaTypeUniqueGift object from the Telegram Bot API
 * @class StoryAreaTypeUniqueGift
 */
export class StoryAreaTypeUniqueGift {
  /**
   * Type of the area, always “unique\_gift”
   * @type { string }
   * @memberof StoryAreaTypeUniqueGift
   * @instance
   * @public
   */
  type!: string;

  /**
   * Unique name of the gift
   * @type { string }
   * @memberof StoryAreaTypeUniqueGift
   * @instance
   * @public
   */
  name!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof StoryAreaTypeUniqueGift
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof StoryAreaTypeUniqueGift
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new StoryAreaTypeUniqueGift instance from raw Telegram API data
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
