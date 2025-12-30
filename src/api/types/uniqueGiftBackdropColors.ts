/**
 * UniqueGiftBackdropColors class for Surfgram Telegram Bot SDK
 * @module types/uniqueGiftBackdropColors
 * @description This object describes the colors of the backdrop of a unique gift.
 * @see {@link https://core.telegram.org/bots/api#uniquegiftbackdropcolors Telegram API Documentation}
 * @class UniqueGiftBackdropColors
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a UniqueGiftBackdropColors object from the Telegram Bot API
 * @class UniqueGiftBackdropColors
 */
export class UniqueGiftBackdropColors {
  /**
   * The color in the center of the backdrop in RGB format
   * @type { number }
   * @memberof UniqueGiftBackdropColors
   * @instance
   * @public
   */
  centerColor!: number;

  /**
   * The color on the edges of the backdrop in RGB format
   * @type { number }
   * @memberof UniqueGiftBackdropColors
   * @instance
   * @public
   */
  edgeColor!: number;

  /**
   * The color to be applied to the symbol in RGB format
   * @type { number }
   * @memberof UniqueGiftBackdropColors
   * @instance
   * @public
   */
  symbolColor!: number;

  /**
   * The color for the text on the backdrop in RGB format
   * @type { number }
   * @memberof UniqueGiftBackdropColors
   * @instance
   * @public
   */
  textColor!: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof UniqueGiftBackdropColors
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof UniqueGiftBackdropColors
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new UniqueGiftBackdropColors instance from raw Telegram API data
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
