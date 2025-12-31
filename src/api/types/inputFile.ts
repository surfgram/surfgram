/**
 * InputFile class for Surfgram Telegram Bot SDK
 * @module types/inputFile
 * @description This object represents the contents of a file to be uploaded. Must be posted using multipart/form-data in the usual way that files are uploaded via the browser.
 * @see {@link https://core.telegram.org/bots/api#inputfile Telegram API Documentation}
 * @class InputFile
 * @extends TelegramObject
 */

import { Bot } from "../../core/bot";
import { snakeToCamel } from "../../core/utils";
import { TelegramObject } from "./telegramObject";

/**
 * Represents a InputFile object from the Telegram Bot API
 * @class InputFile
 */
export class InputFile {
	/**
	 * Type of the media, must be photo
	 * @type { string }
	 * @memberof InputFile
	 * @instance
	 * @public
	 */
	type!: string;

	/**
	 * File to send. Pass a file\_id to send a file that exists on the Telegram servers \(recommended\), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://&lt;file\_attach\_name&gt;” to upload a new one using multipart/form-data under &lt;file\_attach\_name&gt; name. More information on Sending Files »
	 * @type { string }
	 * @memberof InputFile
	 * @instance
	 * @public
	 */
	media!: string;

	/**
	 * Raw data from Telegram API in snake_case format
	 * @type {TelegramObject}
	 * @memberof InputFile
	 * @instance
	 * @public
	 */
	public raw?: TelegramObject;

	/**
	 * Bot instance associated with this object
	 * @type {Bot}
	 * @memberof InputFile
	 * @instance
	 * @public
	 */
	public bot?: Bot;

	/**
	 * Creates a new InputFile instance from raw Telegram API data
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
