/**
 * TransactionPartnerAffiliateProgram class for Surfgram Telegram Bot SDK
 * @module types/transactionPartnerAffiliateProgram
 * @description Describes the affiliate program that issued the affiliate commission received via this transaction.
 * @see {@link https://core.telegram.org/bots/api#transactionpartneraffiliateprogram Telegram API Documentation}
 * @class TransactionPartnerAffiliateProgram
 * @extends TelegramObject
 */

import { Bot } from "../../core/bot";
import { snakeToCamel } from "../../core/utils";
import { TelegramObject } from "./telegramObject";
import { User } from "./user";

/**
 * Represents a TransactionPartnerAffiliateProgram object from the Telegram Bot API
 * @class TransactionPartnerAffiliateProgram
 */
export class TransactionPartnerAffiliateProgram {
	/**
	 * Type of the transaction partner, always “affiliate\_program”
	 * @type { string }
	 * @memberof TransactionPartnerAffiliateProgram
	 * @instance
	 * @public
	 */
	type!: string;

	/**
	 * Optional. Information about the bot that sponsored the affiliate program
	 * @type { User }
	 * @memberof TransactionPartnerAffiliateProgram
	 * @instance
	 * @public
	 */
	sponsorUser?: User;

	/**
	 * The number of Telegram Stars received by the bot for each 1000 Telegram Stars received by the affiliate program sponsor from referred users
	 * @type { number }
	 * @memberof TransactionPartnerAffiliateProgram
	 * @instance
	 * @public
	 */
	commissionPerMille!: number;

	/**
	 * Raw data from Telegram API in snake_case format
	 * @type {TelegramObject}
	 * @memberof TransactionPartnerAffiliateProgram
	 * @instance
	 * @public
	 */
	public raw?: TelegramObject;

	/**
	 * Bot instance associated with this object
	 * @type {Bot}
	 * @memberof TransactionPartnerAffiliateProgram
	 * @instance
	 * @public
	 */
	public bot?: Bot;

	/**
	 * Creates a new TransactionPartnerAffiliateProgram instance from raw Telegram API data
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
