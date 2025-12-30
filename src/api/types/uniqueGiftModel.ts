/**
 * UniqueGiftModel class for Surfgram Telegram Bot SDK
 * @module types/uniqueGiftModel
 * @description This object describes the model of a unique gift.
 * @see {@link https://core.telegram.org/bots/api#uniquegiftmodel Telegram API Documentation}
 * @class UniqueGiftModel
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { Sticker } from './sticker';

/**
 * Represents a UniqueGiftModel object from the Telegram Bot API
 * @class UniqueGiftModel
 */
export class UniqueGiftModel {
  /**
   * Name of the model
   * @type { string }
   * @memberof UniqueGiftModel
   * @instance
   * @public
   */
  name!: string;
  /**
   * The sticker that represents the unique gift
   * @type { Sticker }
   * @memberof UniqueGiftModel
   * @instance
   * @public
   */
  sticker!: Sticker;
  /**
   * The number of unique gifts that receive this model for every 1000 gifts upgraded
   * @type { number }
   * @memberof UniqueGiftModel
   * @instance
   * @public
   */
  rarityPerMille!: number;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof UniqueGiftModel
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof UniqueGiftModel
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new UniqueGiftModel instance from raw Telegram API data
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

      this.name = data.name;
      this.sticker = data.sticker;
      this.rarityPerMille = data.rarityPerMille;
    }
  }
}
