/**
 * StoryAreaTypeWeather class for Surfgram Telegram Bot SDK
 * @module types/storyAreaTypeWeather
 * @description Describes a story area containing weather information. Currently, a story can have up to 3 weather areas.
 * @see {@link https://core.telegram.org/bots/api#storyareatypeweather Telegram API Documentation}
 * @class StoryAreaTypeWeather
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a StoryAreaTypeWeather object from the Telegram Bot API
 * @class StoryAreaTypeWeather
 */
export class StoryAreaTypeWeather {
  /**
   * Type of the area, always “weather”
   * @type { string }
   * @memberof StoryAreaTypeWeather
   * @instance
   * @public
   */
  type!: string;
  /**
   * Temperature, in degree Celsius
   * @type { number }
   * @memberof StoryAreaTypeWeather
   * @instance
   * @public
   */
  temperature!: number;
  /**
   * Emoji representing the weather
   * @type { string }
   * @memberof StoryAreaTypeWeather
   * @instance
   * @public
   */
  emoji!: string;
  /**
   * A color of the area background in the ARGB format
   * @type { number }
   * @memberof StoryAreaTypeWeather
   * @instance
   * @public
   */
  backgroundColor!: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof StoryAreaTypeWeather
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof StoryAreaTypeWeather
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new StoryAreaTypeWeather instance from raw Telegram API data
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

      this.type = data.type;
      this.temperature = data.temperature;
      this.emoji = data.emoji;
      this.backgroundColor = data.backgroundColor;
    }
  }
}
