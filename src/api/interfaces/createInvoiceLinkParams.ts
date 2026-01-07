/**
 * Parameters interface for the createInvoiceLink method
 * @interface CreateInvoiceLinkParams
 * @description Use this method to create a link for an invoice. Returns the created invoice link as String on success.
 * @see {@link https://core.telegram.org/bots/api#createInvoiceLink Telegram API Documentation}
 */

import { LabeledPrice } from '../types/labeledPrice';

export interface CreateInvoiceLinkParams {
  /**
   * Product name, 1-32 characters
   * @type { string }
   * @originalType String
   * @required Yes
   */
  title: string;

  /**
   * Product description, 1-255 characters
   * @type { string }
   * @originalType String
   * @required Yes
   */
  description: string;

  /**
   * Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use it for your internal processes.
   * @type { string }
   * @originalType String
   * @required Yes
   */
  payload: string;

  /**
   * Three-letter ISO 4217 currency code, see more on currencies. Pass “XTR” for payments in Telegram Stars.
   * @type { string }
   * @originalType String
   * @required Yes
   */
  currency: string;

  /**
   * Price breakdown, a JSON-serialized list of components \(e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.\). Must contain exactly one item for payments in Telegram Stars.
   * @type { LabeledPrice[] }
   * @originalType Array of LabeledPrice
   * @required Yes
   */
  prices: LabeledPrice[];

  /**
   * Unique identifier of the business connection on behalf of which the link will be created. For payments in Telegram Stars only.
   * @type { string }
   * @originalType String
   * @required No
   */
  businessConnectionId?: string;

  /**
   * Payment provider token, obtained via @BotFather. Pass an empty string for payments in Telegram Stars.
   * @type { string }
   * @originalType String
   * @required No
   */
  providerToken?: string;

  /**
   * The number of seconds the subscription will be active for before the next payment. The currency must be set to “XTR” \(Telegram Stars\) if the parameter is used. Currently, it must always be 2592000 \(30 days\) if specified. Any number of subscriptions can be active for a given bot at the same time, including multiple concurrent subscriptions from the same user. Subscription price must no exceed 10000 Telegram Stars.
   * @type { number }
   * @originalType Integer
   * @required No
   */
  subscriptionPeriod?: number;

  /**
   * The maximum accepted amount for tips in the smallest units of the currency \(integer, not float/double\). For example, for a maximum tip of US$ 1.45 pass max\_tip\_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency \(2 for the majority of currencies\). Defaults to 0. Not supported for payments in Telegram Stars.
   * @type { number }
   * @originalType Integer
   * @required No
   */
  maxTipAmount?: number;

  /**
   * A JSON-serialized array of suggested amounts of tips in the smallest units of the currency \(integer, not float/double\). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed max\_tip\_amount.
   * @type { number[] }
   * @originalType Array of Integer
   * @required No
   */
  suggestedTipAmounts?: number[];

  /**
   * JSON-serialized data about the invoice, which will be shared with the payment provider. A detailed description of required fields should be provided by the payment provider.
   * @type { string }
   * @originalType String
   * @required No
   */
  providerData?: string;

  /**
   * URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service.
   * @type { string }
   * @originalType String
   * @required No
   */
  photoUrl?: string;

  /**
   * Photo size in bytes
   * @type { number }
   * @originalType Integer
   * @required No
   */
  photoSize?: number;

  /**
   * Photo width
   * @type { number }
   * @originalType Integer
   * @required No
   */
  photoWidth?: number;

  /**
   * Photo height
   * @type { number }
   * @originalType Integer
   * @required No
   */
  photoHeight?: number;

  /**
   * Pass True if you require the user's full name to complete the order. Ignored for payments in Telegram Stars.
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  needName?: boolean;

  /**
   * Pass True if you require the user's phone number to complete the order. Ignored for payments in Telegram Stars.
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  needPhoneNumber?: boolean;

  /**
   * Pass True if you require the user's email address to complete the order. Ignored for payments in Telegram Stars.
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  needEmail?: boolean;

  /**
   * Pass True if you require the user's shipping address to complete the order. Ignored for payments in Telegram Stars.
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  needShippingAddress?: boolean;

  /**
   * Pass True if the user's phone number should be sent to the provider. Ignored for payments in Telegram Stars.
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  sendPhoneNumberToProvider?: boolean;

  /**
   * Pass True if the user's email address should be sent to the provider. Ignored for payments in Telegram Stars.
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  sendEmailToProvider?: boolean;

  /**
   * Pass True if the final price depends on the shipping method. Ignored for payments in Telegram Stars.
   * @type { boolean }
   * @originalType Boolean
   * @required No
   */
  isFlexible?: boolean;

}
