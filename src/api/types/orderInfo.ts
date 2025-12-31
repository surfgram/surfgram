/**
 * OrderInfo class for Surfgram Telegram Bot SDK
 * @module types/orderInfo
 * @description This object represents information about an order.
 * @see {@link https://core.telegram.org/bots/api#orderinfo Telegram API Documentation}
 * @class OrderInfo
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { ShippingAddress } from './shippingAddress';

/**
 * Represents a OrderInfo object from the Telegram Bot API
 * @class OrderInfo
 */
export class OrderInfo {
  /**
   * Optional. User name
   * @type { string }
   * @memberof OrderInfo
   * @instance
   * @public
   */
  name?: string;

  /**
   * Optional. User's phone number
   * @type { string }
   * @memberof OrderInfo
   * @instance
   * @public
   */
  phoneNumber?: string;

  /**
   * Optional. User email
   * @type { string }
   * @memberof OrderInfo
   * @instance
   * @public
   */
  email?: string;

  /**
   * Optional. User shipping address
   * @type { ShippingAddress }
   * @memberof OrderInfo
   * @instance
   * @public
   */
  shippingAddress?: ShippingAddress;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof OrderInfo
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof OrderInfo
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new OrderInfo instance from raw Telegram API data
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
