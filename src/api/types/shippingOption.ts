/**
 * ShippingOption class for Surfgram Telegram Bot SDK
 * @module types/shippingOption
 * @description This object represents one shipping option.
 * @see {@link https://core.telegram.org/bots/api#shippingoption Telegram API Documentation}
 * @class ShippingOption
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { LabeledPrice } from './labeledPrice';

/**
 * Represents a ShippingOption object from the Telegram Bot API
 * @class ShippingOption
 */
export class ShippingOption {
  /**
   * Shipping option identifier
   * @type { string }
   * @memberof ShippingOption
   * @instance
   * @public
   */
  id!: string;
  /**
   * Option title
   * @type { string }
   * @memberof ShippingOption
   * @instance
   * @public
   */
  title!: string;
  /**
   * List of price portions
   * @type { LabeledPrice[] }
   * @memberof ShippingOption
   * @instance
   * @public
   */
  prices!: LabeledPrice[];

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof ShippingOption
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof ShippingOption
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new ShippingOption instance from raw Telegram API data
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

      this.id = data.id;
      this.title = data.title;
      this.prices = data.prices;
    }
  }
}
