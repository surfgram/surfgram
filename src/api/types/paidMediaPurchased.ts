/**
 * PaidMediaPurchased class for Surfgram Telegram Bot SDK
 * @module types/paidMediaPurchased
 * @description This object contains information about a paid media purchase.
 * @see {@link https://core.telegram.org/bots/api#paidmediapurchased Telegram API Documentation}
 * @class PaidMediaPurchased
 * @extends TelegramObject
 */

import { Bot } from "../../core/bot";
import { snakeToCamel } from "../../core/utils";
import { TelegramObject } from "./telegramObject";
import { User } from "./user";

/**
 * Represents a PaidMediaPurchased object from the Telegram Bot API
 * @class PaidMediaPurchased
 */
export class PaidMediaPurchased {
	/**
	 * User who purchased the media
	 * @type { User }
	 * @memberof PaidMediaPurchased
	 * @instance
	 * @public
	 */
	from!: User;

	/**
	 * Bot-specified paid media payload
	 * @type { string }
	 * @memberof PaidMediaPurchased
	 * @instance
	 * @public
	 */
	paidMediaPayload!: string;

	/**
	 * Raw data from Telegram API in snake_case format
	 * @type {TelegramObject}
	 * @memberof PaidMediaPurchased
	 * @instance
	 * @public
	 */
	public raw?: TelegramObject;

	/**
	 * Bot instance associated with this object
	 * @type {Bot}
	 * @memberof PaidMediaPurchased
	 * @instance
	 * @public
	 */
	public bot?: Bot;

	/**
	 * Creates a new PaidMediaPurchased instance from raw Telegram API data
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
