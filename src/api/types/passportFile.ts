/**
 * PassportFile class for Surfgram Telegram Bot SDK
 * @module types/passportFile
 * @description This object represents a file uploaded to Telegram Passport. Currently all Telegram Passport files are in JPEG format when decrypted and don&#39;t exceed 10MB.
 * @see {@link https://core.telegram.org/bots/api#passportfile Telegram API Documentation}
 * @class PassportFile
 * @extends TelegramObject
 */

import { Bot } from "../../core/bot";
import { snakeToCamel } from "../../core/utils";
import { TelegramObject } from "./telegramObject";

/**
 * Represents a PassportFile object from the Telegram Bot API
 * @class PassportFile
 */
export class PassportFile {
	/**
	 * Identifier for this file, which can be used to download or reuse the file
	 * @type { string }
	 * @memberof PassportFile
	 * @instance
	 * @public
	 */
	fileId!: string;

	/**
	 * Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
	 * @type { string }
	 * @memberof PassportFile
	 * @instance
	 * @public
	 */
	fileUniqueId!: string;

	/**
	 * File size in bytes
	 * @type { number }
	 * @memberof PassportFile
	 * @instance
	 * @public
	 */
	fileSize!: number;

	/**
	 * Unix time when the file was uploaded
	 * @type { number }
	 * @memberof PassportFile
	 * @instance
	 * @public
	 */
	fileDate!: number;

	/**
	 * Raw data from Telegram API in snake_case format
	 * @type {TelegramObject}
	 * @memberof PassportFile
	 * @instance
	 * @public
	 */
	public raw?: TelegramObject;

	/**
	 * Bot instance associated with this object
	 * @type {Bot}
	 * @memberof PassportFile
	 * @instance
	 * @public
	 */
	public bot?: Bot;

	/**
	 * Creates a new PassportFile instance from raw Telegram API data
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
