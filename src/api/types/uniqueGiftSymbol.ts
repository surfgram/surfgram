/**
 * UniqueGiftSymbol class for Surfgram Telegram Bot SDK
 * @module types/uniqueGiftSymbol
 * @description This object describes the symbol shown on the pattern of a unique gift.
 * @see {@link https://core.telegram.org/bots/api#uniquegiftsymbol Telegram API Documentation}
 * @class UniqueGiftSymbol
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { Sticker } from './sticker';

/**
 * Represents a UniqueGiftSymbol object from the Telegram Bot API
 * @class UniqueGiftSymbol
 */
export class UniqueGiftSymbol {
  /**
   * Name of the symbol
   * @type { string }
   * @memberof UniqueGiftSymbol
   * @instance
   * @public
   */
  name!: string;

  /**
   * The sticker that represents the unique gift
   * @type { Sticker }
   * @memberof UniqueGiftSymbol
   * @instance
   * @public
   */
  sticker!: Sticker;

  /**
   * The number of unique gifts that receive this model for every 1000 gifts upgraded
   * @type { number }
   * @memberof UniqueGiftSymbol
   * @instance
   * @public
   */
  rarityPerMille!: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof UniqueGiftSymbol
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof UniqueGiftSymbol
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new UniqueGiftSymbol instance from raw Telegram API data
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
