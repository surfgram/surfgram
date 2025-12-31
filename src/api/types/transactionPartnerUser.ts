/**
 * TransactionPartnerUser class for Surfgram Telegram Bot SDK
 * @module types/transactionPartnerUser
 * @description Describes a transaction with a user.
 * @see {@link https://core.telegram.org/bots/api#transactionpartneruser Telegram API Documentation}
 * @class TransactionPartnerUser
 * @extends TelegramObject
 */

import { Bot } from "../../core/bot";
import { snakeToCamel } from "../../core/utils";
import { TelegramObject } from "./telegramObject";
import { User } from "./user";
import { AffiliateInfo } from "./affiliateInfo";
import { PaidMedia } from "./paidMedia";
import { Gift } from "./gift";

/**
 * Represents a TransactionPartnerUser object from the Telegram Bot API
 * @class TransactionPartnerUser
 */
export class TransactionPartnerUser {
	/**
	 * Type of the transaction partner, always “user”
	 * @type { string }
	 * @memberof TransactionPartnerUser
	 * @instance
	 * @public
	 */
	type!: string;

	/**
	 * Type of the transaction, currently one of “invoice\_payment” for payments via invoices, “paid\_media\_payment” for payments for paid media, “gift\_purchase” for gifts sent by the bot, “premium\_purchase” for Telegram Premium subscriptions gifted by the bot, “business\_account\_transfer” for direct transfers from managed business accounts
	 * @type { string }
	 * @memberof TransactionPartnerUser
	 * @instance
	 * @public
	 */
	transactionType!: string;

	/**
	 * Information about the user
	 * @type { User }
	 * @memberof TransactionPartnerUser
	 * @instance
	 * @public
	 */
	user!: User;

	/**
	 * Optional. Information about the affiliate that received a commission via this transaction. Can be available only for “invoice\_payment” and “paid\_media\_payment” transactions.
	 * @type { AffiliateInfo }
	 * @memberof TransactionPartnerUser
	 * @instance
	 * @public
	 */
	affiliate?: AffiliateInfo;

	/**
	 * Optional. Bot-specified invoice payload. Can be available only for “invoice\_payment” transactions.
	 * @type { string }
	 * @memberof TransactionPartnerUser
	 * @instance
	 * @public
	 */
	invoicePayload?: string;

	/**
	 * Optional. The duration of the paid subscription. Can be available only for “invoice\_payment” transactions.
	 * @type { number }
	 * @memberof TransactionPartnerUser
	 * @instance
	 * @public
	 */
	subscriptionPeriod?: number;

	/**
	 * Optional. Information about the paid media bought by the user; for “paid\_media\_payment” transactions only
	 * @type { PaidMedia[] }
	 * @memberof TransactionPartnerUser
	 * @instance
	 * @public
	 */
	paidMedia?: PaidMedia[];

	/**
	 * Optional. Bot-specified paid media payload. Can be available only for “paid\_media\_payment” transactions.
	 * @type { string }
	 * @memberof TransactionPartnerUser
	 * @instance
	 * @public
	 */
	paidMediaPayload?: string;

	/**
	 * Optional. The gift sent to the user by the bot; for “gift\_purchase” transactions only
	 * @type { Gift }
	 * @memberof TransactionPartnerUser
	 * @instance
	 * @public
	 */
	gift?: Gift;

	/**
	 * Optional. Number of months the gifted Telegram Premium subscription will be active for; for “premium\_purchase” transactions only
	 * @type { number }
	 * @memberof TransactionPartnerUser
	 * @instance
	 * @public
	 */
	premiumSubscriptionDuration?: number;

	/**
	 * Raw data from Telegram API in snake_case format
	 * @type {TelegramObject}
	 * @memberof TransactionPartnerUser
	 * @instance
	 * @public
	 */
	public raw?: TelegramObject;

	/**
	 * Bot instance associated with this object
	 * @type {Bot}
	 * @memberof TransactionPartnerUser
	 * @instance
	 * @public
	 */
	public bot?: Bot;

	/**
	 * Creates a new TransactionPartnerUser instance from raw Telegram API data
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
