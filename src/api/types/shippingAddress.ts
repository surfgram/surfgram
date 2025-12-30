/**
 * ShippingAddress class for Surfgram Telegram Bot SDK
 * @module types/shippingAddress
 * @description This object represents a shipping address.
 * @see {@link https://core.telegram.org/bots/api#shippingaddress Telegram API Documentation}
 * @class ShippingAddress
 * @extends TelegramObject
 */
import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';

/**
 * Represents a ShippingAddress object from the Telegram Bot API
 * @class ShippingAddress
 */
export class ShippingAddress {
  /**
   * Two-letter ISO 3166-1 alpha-2 country code
   * @type { string }
   * @memberof ShippingAddress
   * @instance
   * @public
   */
  countryCode!: string;
  /**
   * State, if applicable
   * @type { string }
   * @memberof ShippingAddress
   * @instance
   * @public
   */
  state!: string;
  /**
   * City
   * @type { string }
   * @memberof ShippingAddress
   * @instance
   * @public
   */
  city!: string;
  /**
   * First line for the address
   * @type { string }
   * @memberof ShippingAddress
   * @instance
   * @public
   */
  streetLine1!: string;
  /**
   * Second line for the address
   * @type { string }
   * @memberof ShippingAddress
   * @instance
   * @public
   */
  streetLine2!: string;
  /**
   * Address post code
   * @type { string }
   * @memberof ShippingAddress
   * @instance
   * @public
   */
  postCode!: string;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof ShippingAddress
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof ShippingAddress
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new ShippingAddress instance from raw Telegram API data
   * @constructor
   * @param {TelegramObject} raw - Raw data from Telegram API in JSON format
   * @param {Bot} bot - Bot instance for executing methods
   * @example
   * const message = new Message(rawData, botInstance);
   */
  constructor(raw?: TelegramObject, bot?: Bot) {
    this.raw = raw;
    this.bot = bot;

    if (raw) {
      const data = snakeToCamel(raw) as any;

      this.countryCode = data.countryCode;
      this.state = data.state;
      this.city = data.city;
      this.streetLine1 = data.streetLine1;
      this.streetLine2 = data.streetLine2;
      this.postCode = data.postCode;
    }
  }
}
