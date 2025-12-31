/**
 * BackgroundType class for Surfgram Telegram Bot SDK
 * @module types/backgroundType
 * @description This object describes the type of a background. Currently, it can be one of
 * @see {@link https://core.telegram.org/bots/api#backgroundtype Telegram API Documentation}
 * @class BackgroundType
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { BackgroundFill } from './backgroundFill';

/**
 * Represents a BackgroundType object from the Telegram Bot API
 * @class BackgroundType
 */
export class BackgroundType {
  /**
   * Type of the background, always “fill”
   * @type { string }
   * @memberof BackgroundType
   * @instance
   * @public
   */
  type!: string;

  /**
   * The background fill
   * @type { BackgroundFill }
   * @memberof BackgroundType
   * @instance
   * @public
   */
  fill!: BackgroundFill;

  /**
   * Dimming of the background in dark themes, as a percentage; 0-100
   * @type { number }
   * @memberof BackgroundType
   * @instance
   * @public
   */
  darkThemeDimming!: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof BackgroundType
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof BackgroundType
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new BackgroundType instance from raw Telegram API data
   * @constructor
   * @param {TelegramObject} raw - Raw data from Telegram API in JSON format
   * @param {Bot} bot - Bot instance for executing methods
   * @example
   * const message = new Message(rawData, botInstance);
   */
  constructor(raw?: TelegramObject, bot?: Bot) {
    this.raw = raw;
    this.bot = bot;
    const converted = snakeToCamel(raw);
    Object.assign(this, converted);
  }
}
