/**
 * Voice class for Surfgram Telegram Bot SDK
 * @module types/voice
 * @description This object represents a voice note.
 * @see {@link https://core.telegram.org/bots/api#voice Telegram API Documentation}
 * @class Voice
 * @extends TelegramObject
 */

import { Bot } from "../../core/bot";
import { snakeToCamel } from "../../core/utils";
import { TelegramObject } from "./telegramObject";

/**
 * Represents a Voice object from the Telegram Bot API
 * @class Voice
 */
export class Voice {
	/**
	 * Identifier for this file, which can be used to download or reuse the file
	 * @type { string }
	 * @memberof Voice
	 * @instance
	 * @public
	 */
	fileId!: string;

	/**
	 * Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
	 * @type { string }
	 * @memberof Voice
	 * @instance
	 * @public
	 */
	fileUniqueId!: string;

	/**
	 * Duration of the audio in seconds as defined by the sender
	 * @type { number }
	 * @memberof Voice
	 * @instance
	 * @public
	 */
	duration!: number;

	/**
	 * Optional. MIME type of the file as defined by the sender
	 * @type { string }
	 * @memberof Voice
	 * @instance
	 * @public
	 */
	mimeType?: string;

	/**
	 * Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value.
	 * @type { number }
	 * @memberof Voice
	 * @instance
	 * @public
	 */
	fileSize?: number;

	/**
	 * Raw data from Telegram API in snake_case format
	 * @type {TelegramObject}
	 * @memberof Voice
	 * @instance
	 * @public
	 */
	public raw?: TelegramObject;

	/**
	 * Bot instance associated with this object
	 * @type {Bot}
	 * @memberof Voice
	 * @instance
	 * @public
	 */
	public bot?: Bot;

	/**
	 * Creates a new Voice instance from raw Telegram API data
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
