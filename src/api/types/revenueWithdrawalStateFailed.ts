/**
 * RevenueWithdrawalStateFailed class for Surfgram Telegram Bot SDK
 * @module types/revenueWithdrawalStateFailed
 * @description The withdrawal failed and the transaction was refunded.
 * @see {@link https://core.telegram.org/bots/api#revenuewithdrawalstatefailed Telegram API Documentation}
 * @class RevenueWithdrawalStateFailed
 * @extends TelegramObject
 */

import { Bot } from "../../core/bot";
import { snakeToCamel } from "../../core/utils";
import { TelegramObject } from "./telegramObject";

/**
 * Represents a RevenueWithdrawalStateFailed object from the Telegram Bot API
 * @class RevenueWithdrawalStateFailed
 */
export class RevenueWithdrawalStateFailed {
	/**
	 * Type of the state, always “failed”
	 * @type { string }
	 * @memberof RevenueWithdrawalStateFailed
	 * @instance
	 * @public
	 */
	type!: string;

	/**
	 * Raw data from Telegram API in snake_case format
	 * @type {TelegramObject}
	 * @memberof RevenueWithdrawalStateFailed
	 * @instance
	 * @public
	 */
	public raw?: TelegramObject;

	/**
	 * Bot instance associated with this object
	 * @type {Bot}
	 * @memberof RevenueWithdrawalStateFailed
	 * @instance
	 * @public
	 */
	public bot?: Bot;

	/**
	 * Creates a new RevenueWithdrawalStateFailed instance from raw Telegram API data
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
