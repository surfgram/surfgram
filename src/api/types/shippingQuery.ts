/**
 * ShippingQuery class for Surfgram Telegram Bot SDK
 * @module types/shippingQuery
 * @description This object contains information about an incoming shipping query.
 * @see {@link https://core.telegram.org/bots/api#shippingquery Telegram API Documentation}
 * @class ShippingQuery
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { User } from './user';
import { ShippingAddress } from './shippingAddress';

/**
 * Represents a ShippingQuery object from the Telegram Bot API
 * @class ShippingQuery
 */
export class ShippingQuery {
  /**
   * Unique query identifier
   * @type { string }
   * @memberof ShippingQuery
   * @instance
   * @public
   */
  id!: string;
  /**
   * User who sent the query
   * @type { User }
   * @memberof ShippingQuery
   * @instance
   * @public
   */
  from!: User;
  /**
   * Bot-specified invoice payload
   * @type { string }
   * @memberof ShippingQuery
   * @instance
   * @public
   */
  invoicePayload!: string;
  /**
   * User specified shipping address
   * @type { ShippingAddress }
   * @memberof ShippingQuery
   * @instance
   * @public
   */
  shippingAddress!: ShippingAddress;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof ShippingQuery
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof ShippingQuery
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new ShippingQuery instance from raw Telegram API data
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
      this.from = data.from;
      this.invoicePayload = data.invoicePayload;
      this.shippingAddress = data.shippingAddress;
    }
  }
}
