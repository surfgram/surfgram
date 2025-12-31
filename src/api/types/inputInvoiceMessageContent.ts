/**
 * InputInvoiceMessageContent class for Surfgram Telegram Bot SDK
 * @module types/inputInvoiceMessageContent
 * @description Represents the content of an invoice message to be sent as the result of an inline query.
 * @see {@link https://core.telegram.org/bots/api#inputinvoicemessagecontent Telegram API Documentation}
 * @class InputInvoiceMessageContent
 * @extends TelegramObject
 */

import { Bot } from '../../core/bot';
import { snakeToCamel } from '../../core/utils';
import { TelegramObject } from './telegramObject';
import { LabeledPrice } from './labeledPrice';

/**
 * Represents a InputInvoiceMessageContent object from the Telegram Bot API
 * @class InputInvoiceMessageContent
 */
export class InputInvoiceMessageContent {
  /**
   * Product name, 1-32 characters
   * @type { string }
   * @memberof InputInvoiceMessageContent
   * @instance
   * @public
   */
  title!: string;

  /**
   * Product description, 1-255 characters
   * @type { string }
   * @memberof InputInvoiceMessageContent
   * @instance
   * @public
   */
  description!: string;

  /**
   * Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use it for your internal processes.
   * @type { string }
   * @memberof InputInvoiceMessageContent
   * @instance
   * @public
   */
  payload!: string;

  /**
   * Optional. Payment provider token, obtained via @BotFather. Pass an empty string for payments in Telegram Stars.
   * @type { string }
   * @memberof InputInvoiceMessageContent
   * @instance
   * @public
   */
  providerToken?: string;

  /**
   * Three-letter ISO 4217 currency code, see more on currencies. Pass “XTR” for payments in Telegram Stars.
   * @type { string }
   * @memberof InputInvoiceMessageContent
   * @instance
   * @public
   */
  currency!: string;

  /**
   * Price breakdown, a JSON-serialized list of components \(e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.\). Must contain exactly one item for payments in Telegram Stars.
   * @type { LabeledPrice[] }
   * @memberof InputInvoiceMessageContent
   * @instance
   * @public
   */
  prices!: LabeledPrice[];

  /**
   * Optional. The maximum accepted amount for tips in the smallest units of the currency \(integer, not float/double\). For example, for a maximum tip of US$ 1.45 pass max\_tip\_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency \(2 for the majority of currencies\). Defaults to 0. Not supported for payments in Telegram Stars.
   * @type { number }
   * @memberof InputInvoiceMessageContent
   * @instance
   * @public
   */
  maxTipAmount?: number;

  /**
   * Optional. A JSON-serialized array of suggested amounts of tip in the smallest units of the currency \(integer, not float/double\). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed max\_tip\_amount.
   * @type { number[] }
   * @memberof InputInvoiceMessageContent
   * @instance
   * @public
   */
  suggestedTipAmounts?: number[];

  /**
   * Optional. A JSON-serialized object for data about the invoice, which will be shared with the payment provider. A detailed description of the required fields should be provided by the payment provider.
   * @type { string }
   * @memberof InputInvoiceMessageContent
   * @instance
   * @public
   */
  providerData?: string;

  /**
   * Optional. URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service.
   * @type { string }
   * @memberof InputInvoiceMessageContent
   * @instance
   * @public
   */
  photoUrl?: string;

  /**
   * Optional. Photo size in bytes
   * @type { number }
   * @memberof InputInvoiceMessageContent
   * @instance
   * @public
   */
  photoSize?: number;

  /**
   * Optional. Photo width
   * @type { number }
   * @memberof InputInvoiceMessageContent
   * @instance
   * @public
   */
  photoWidth?: number;

  /**
   * Optional. Photo height
   * @type { number }
   * @memberof InputInvoiceMessageContent
   * @instance
   * @public
   */
  photoHeight?: number;

  /**
   * Optional. Pass True if you require the user's full name to complete the order. Ignored for payments in Telegram Stars.
   * @type { boolean }
   * @memberof InputInvoiceMessageContent
   * @instance
   * @public
   */
  needName?: boolean;

  /**
   * Optional. Pass True if you require the user's phone number to complete the order. Ignored for payments in Telegram Stars.
   * @type { boolean }
   * @memberof InputInvoiceMessageContent
   * @instance
   * @public
   */
  needPhoneNumber?: boolean;

  /**
   * Optional. Pass True if you require the user's email address to complete the order. Ignored for payments in Telegram Stars.
   * @type { boolean }
   * @memberof InputInvoiceMessageContent
   * @instance
   * @public
   */
  needEmail?: boolean;

  /**
   * Optional. Pass True if you require the user's shipping address to complete the order. Ignored for payments in Telegram Stars.
   * @type { boolean }
   * @memberof InputInvoiceMessageContent
   * @instance
   * @public
   */
  needShippingAddress?: boolean;

  /**
   * Optional. Pass True if the user's phone number should be sent to the provider. Ignored for payments in Telegram Stars.
   * @type { boolean }
   * @memberof InputInvoiceMessageContent
   * @instance
   * @public
   */
  sendPhoneNumberToProvider?: boolean;

  /**
   * Optional. Pass True if the user's email address should be sent to the provider. Ignored for payments in Telegram Stars.
   * @type { boolean }
   * @memberof InputInvoiceMessageContent
   * @instance
   * @public
   */
  sendEmailToProvider?: boolean;

  /**
   * Optional. Pass True if the final price depends on the shipping method. Ignored for payments in Telegram Stars.
   * @type { boolean }
   * @memberof InputInvoiceMessageContent
   * @instance
   * @public
   */
  isFlexible?: boolean;

  /**
   * Raw data from Telegram API in snake_case format
   * @type {TelegramObject}
   * @memberof InputInvoiceMessageContent
   * @instance
   * @public
   */
  public raw?: TelegramObject;

  /**
   * Bot instance associated with this object
   * @type {Bot}
   * @memberof InputInvoiceMessageContent
   * @instance
   * @public
   */
  public bot?: Bot;

  /**
   * Creates a new InputInvoiceMessageContent instance from raw Telegram API data
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
