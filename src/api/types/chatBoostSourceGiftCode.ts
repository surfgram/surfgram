/**
 * ChatBoostSourceGiftCode class for Surfgram Telegram Bot SDK
 * @module types/chatBoostSourceGiftCode
 * @description The boost was obtained by the creation of Telegram Premium gift codes to boost a chat. Each such code boosts the chat 4 times for the duration of the corresponding Telegram Premium subscription.
 * @see {@link https://core.telegram.org/bots/api#chatboostsourcegiftcode Telegram API Documentation}
 * @class ChatBoostSourceGiftCode
 * @extends TelegramObject
 */

import { Bot } from "../../core/bot";
import { snakeToCamel } from "../../core/utils";
import { TelegramObject } from "./telegramObject";
import { User } from "./user";

/**
 * Represents a ChatBoostSourceGiftCode object from the Telegram Bot API
 * @class ChatBoostSourceGiftCode
 */
export class ChatBoostSourceGiftCode {
	/**
	 * Source of the boost, always “gift\_code”
	 * @type { string }
	 * @memberof ChatBoostSourceGiftCode
	 * @instance
	 * @public
	 */
	source!: string;

	/**
	 * User for which the gift code was created
	 * @type { User }
	 * @memberof ChatBoostSourceGiftCode
	 * @instance
	 * @public
	 */
	user!: User;

	/**
	 * Raw data from Telegram API in snake_case format
	 * @type {TelegramObject}
	 * @memberof ChatBoostSourceGiftCode
	 * @instance
	 * @public
	 */
	public raw?: TelegramObject;

	/**
	 * Bot instance associated with this object
	 * @type {Bot}
	 * @memberof ChatBoostSourceGiftCode
	 * @instance
	 * @public
	 */
	public bot?: Bot;

	/**
	 * Creates a new ChatBoostSourceGiftCode instance from raw Telegram API data
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
