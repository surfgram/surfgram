/**
 * StarTransactions class for Surfgram Telegram Bot SDK
 * @module types/starTransactions
 * @description Contains a list of Telegram Star transactions.
 * @see {@link https://core.telegram.org/bots/api#startransactions Telegram API Documentation}
 * @class StarTransactions
 * @extends TelegramObject
 */

import { Bot } from "../../core/bot";
import { snakeToCamel } from "../../core/utils";
import { TelegramObject } from "./telegramObject";
import { StarTransaction } from "./starTransaction";

/**
 * Represents a StarTransactions object from the Telegram Bot API
 * @class StarTransactions
 */
export class StarTransactions {
	/**
	 * The list of transactions
	 * @type { StarTransaction[] }
	 * @memberof StarTransactions
	 * @instance
	 * @public
	 */
	transactions!: StarTransaction[];

	/**
	 * Raw data from Telegram API in snake_case format
	 * @type {TelegramObject}
	 * @memberof StarTransactions
	 * @instance
	 * @public
	 */
	public raw?: TelegramObject;

	/**
	 * Bot instance associated with this object
	 * @type {Bot}
	 * @memberof StarTransactions
	 * @instance
	 * @public
	 */
	public bot?: Bot;

	/**
	 * Creates a new StarTransactions instance from raw Telegram API data
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
