/**
 * StoryArea class for Surfgram Telegram Bot SDK
 * @module types/storyArea
 * @description Describes a clickable area on a story media.
 * @see {@link https://core.telegram.org/bots/api#storyarea Telegram API Documentation}
 * @class StoryArea
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { StoryAreaPosition } from './storyAreaPosition';
import { StoryAreaType } from './storyAreaType';

/**
 * Represents a StoryArea object from the Telegram Bot API
 * @class StoryArea
 */
export class StoryArea {
  /**
   * Position of the area
   * @type { StoryAreaPosition }
   * @memberof StoryArea
   * @instance
   * @public
   */
  position!: StoryAreaPosition;
  /**
   * Type of the area
   * @type { StoryAreaType }
   * @memberof StoryArea
   * @instance
   * @public
   */
  type!: StoryAreaType;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof StoryArea
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof StoryArea
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new StoryArea instance from raw Telegram API data
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

      this.position = data.position;
      this.type = data.type;
    }
  }
}
