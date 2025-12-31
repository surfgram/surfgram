/**
 * PassportElementErrorFiles class for Surfgram Telegram Bot SDK
 * @module types/passportElementErrorFiles
 * @description Represents an issue with a list of scans. The error is considered resolved when the list of files containing the scans changes.
 * @see {@link https://core.telegram.org/bots/api#passportelementerrorfiles Telegram API Documentation}
 * @class PassportElementErrorFiles
 * @extends TelegramObject
 */

import { Bot } from "../../core/bot";
import { snakeToCamel } from "../../core/utils";
import { TelegramObject } from "./telegramObject";

/**
 * Represents a PassportElementErrorFiles object from the Telegram Bot API
 * @class PassportElementErrorFiles
 */
export class PassportElementErrorFiles {
	/**
	 * Error source, must be files
	 * @type { string }
	 * @memberof PassportElementErrorFiles
	 * @instance
	 * @public
	 */
	source!: string;

	/**
	 * The section of the user's Telegram Passport which has the issue, one of “utility\_bill”, “bank\_statement”, “rental\_agreement”, “passport\_registration”, “temporary\_registration”
	 * @type { string }
	 * @memberof PassportElementErrorFiles
	 * @instance
	 * @public
	 */
	type!: string;

	/**
	 * List of base64-encoded file hashes
	 * @type { string[] }
	 * @memberof PassportElementErrorFiles
	 * @instance
	 * @public
	 */
	fileHashes!: string[];

	/**
	 * Error message
	 * @type { string }
	 * @memberof PassportElementErrorFiles
	 * @instance
	 * @public
	 */
	message!: string;

	/**
	 * Raw data from Telegram API in snake_case format
	 * @type {TelegramObject}
	 * @memberof PassportElementErrorFiles
	 * @instance
	 * @public
	 */
	public raw?: TelegramObject;

	/**
	 * Bot instance associated with this object
	 * @type {Bot}
	 * @memberof PassportElementErrorFiles
	 * @instance
	 * @public
	 */
	public bot?: Bot;

	/**
	 * Creates a new PassportElementErrorFiles instance from raw Telegram API data
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
