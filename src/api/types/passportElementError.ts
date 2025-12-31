/**
 * PassportElementError class for Surfgram Telegram Bot SDK
 * @module types/passportElementError
 * @description This object represents an error in the Telegram Passport element which was submitted that should be resolved by the user. It should be one of:
 * @see {@link https://core.telegram.org/bots/api#passportelementerror Telegram API Documentation}
 * @class PassportElementError
 * @extends TelegramObject
 */

import { Bot } from "../../core/bot";
import { snakeToCamel } from "../../core/utils";
import { TelegramObject } from "./telegramObject";

/**
 * Represents a PassportElementError object from the Telegram Bot API
 * @class PassportElementError
 */
export class PassportElementError {
	/**
	 * Error source, must be data
	 * @type { string }
	 * @memberof PassportElementError
	 * @instance
	 * @public
	 */
	source!: string;

	/**
	 * The section of the user's Telegram Passport which has the error, one of “personal\_details”, “passport”, “driver\_license”, “identity\_card”, “internal\_passport”, “address”
	 * @type { string }
	 * @memberof PassportElementError
	 * @instance
	 * @public
	 */
	type!: string;

	/**
	 * Name of the data field which has the error
	 * @type { string }
	 * @memberof PassportElementError
	 * @instance
	 * @public
	 */
	fieldName!: string;

	/**
	 * Base64-encoded data hash
	 * @type { string }
	 * @memberof PassportElementError
	 * @instance
	 * @public
	 */
	dataHash!: string;

	/**
	 * Error message
	 * @type { string }
	 * @memberof PassportElementError
	 * @instance
	 * @public
	 */
	message!: string;

	/**
	 * Raw data from Telegram API in snake_case format
	 * @type {TelegramObject}
	 * @memberof PassportElementError
	 * @instance
	 * @public
	 */
	public raw?: TelegramObject;

	/**
	 * Bot instance associated with this object
	 * @type {Bot}
	 * @memberof PassportElementError
	 * @instance
	 * @public
	 */
	public bot?: Bot;

	/**
	 * Creates a new PassportElementError instance from raw Telegram API data
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
