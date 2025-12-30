/**
 * BackgroundFillFreeformGradient class for Surfgram Telegram Bot SDK
 * @module types/backgroundFillFreeformGradient
 * @description The background is a freeform gradient that rotates after every message in the chat.
 * @see {@link https://core.telegram.org/bots/api#backgroundfillfreeformgradient Telegram API Documentation}
 * @class BackgroundFillFreeformGradient
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a BackgroundFillFreeformGradient object from the Telegram Bot API
 * @class BackgroundFillFreeformGradient
 */
export class BackgroundFillFreeformGradient {
  /**
   * Type of the background fill, always “freeform\_gradient”
   * @type { string }
   * @memberof BackgroundFillFreeformGradient
   * @instance
   * @public
   */
  type!: string;
  /**
   * A list of the 3 or 4 base colors that are used to generate the freeform gradient in the RGB24 format
   * @type { number[] }
   * @memberof BackgroundFillFreeformGradient
   * @instance
   * @public
   */
  colors!: number[];

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof BackgroundFillFreeformGradient
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof BackgroundFillFreeformGradient
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new BackgroundFillFreeformGradient instance from raw Telegram API data
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
      this.colors = data.colors;
    }
  }
}
