/**
 * Parameters interface for the sendInvoice method
 * @interface SendInvoiceParams
 * @description Use this method to send invoices. On success, the sent Message is returned.
 * @see {@link https://core.telegram.org/bots/api#sendInvoice Telegram API Documentation}
 */

import { LabeledPrice } from "../types/labeledPrice";
import { SuggestedPostParameters } from "../types/suggestedPostParameters";
import { ReplyParameters } from "../types/replyParameters";
import { InlineKeyboardMarkup } from "../types/inlineKeyboardMarkup";

export interface SendInvoiceParams {
	/**
	 * Unique identifier for the target chat or username of the target channel \(in the format @channelusername\)
	 * @type { number | string }
	 * @originalType Integer or String
	 * @required Yes
	 */
	chatId: number | string;

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
	 * Unique identifier for the target message thread \(topic\) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only
	 * @type { number }
	 * @originalType Integer
	 * @required No
	 */
	messageThreadId?: number;

	/**
	 * Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat
	 * @type { number }
	 * @originalType Integer
	 * @required No
	 */
	directMessagesTopicId?: number;

	/**
	 * Payment provider token, obtained via @BotFather. Pass an empty string for payments in Telegram Stars.
	 * @type { string }
	 * @originalType String
	 * @required No
	 */
	providerToken?: string;

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
	 * Unique deep-linking parameter. If left empty, forwarded copies of the sent message will have a Pay button, allowing multiple users to pay directly from the forwarded message, using the same invoice. If non-empty, forwarded copies of the sent message will have a URL button with a deep link to the bot \(instead of a Pay button\), with the value used as the start parameter
	 * @type { string }
	 * @originalType String
	 * @required No
	 */
	startParameter?: string;

	/**
	 * JSON-serialized data about the invoice, which will be shared with the payment provider. A detailed description of required fields should be provided by the payment provider.
	 * @type { string }
	 * @originalType String
	 * @required No
	 */
	providerData?: string;

	/**
	 * URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service. People like it better when they see what they are paying for.
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

	/**
	 * Sends the message silently. Users will receive a notification with no sound.
	 * @type { boolean }
	 * @originalType Boolean
	 * @required No
	 */
	disableNotification?: boolean;

	/**
	 * Protects the contents of the sent message from forwarding and saving
	 * @type { boolean }
	 * @originalType Boolean
	 * @required No
	 */
	protectContent?: boolean;

	/**
	 * Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
	 * @type { boolean }
	 * @originalType Boolean
	 * @required No
	 */
	allowPaidBroadcast?: boolean;

	/**
	 * Unique identifier of the message effect to be added to the message; for private chats only
	 * @type { string }
	 * @originalType String
	 * @required No
	 */
	messageEffectId?: string;

	/**
	 * A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.
	 * @type { SuggestedPostParameters }
	 * @originalType SuggestedPostParameters
	 * @required No
	 */
	suggestedPostParameters?: SuggestedPostParameters;

	/**
	 * Description of the message to reply to
	 * @type { ReplyParameters }
	 * @originalType ReplyParameters
	 * @required No
	 */
	replyParameters?: ReplyParameters;

	/**
	 * A JSON-serialized object for an inline keyboard. If empty, one 'Pay total price' button will be shown. If not empty, the first button must be a Pay button.
	 * @type { InlineKeyboardMarkup }
	 * @originalType InlineKeyboardMarkup
	 * @required No
	 */
	replyMarkup?: InlineKeyboardMarkup;
}
