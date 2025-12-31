/**
 * PhotoSize class for Surfgram Telegram Bot SDK
 * @module types/photoSize
 * @description This object represents one size of a photo or a file / sticker thumbnail.
 * @see {@link https://core.telegram.org/bots/api#photosize Telegram API Documentation}
 * @class PhotoSize
 * @extends TelegramObject
 */

import { Bot } from "../../core/bot";
import { snakeToCamel } from "../../core/utils";
import { TelegramObject } from "./telegramObject";

/**
 * Represents a PhotoSize object from the Telegram Bot API
 * @class PhotoSize
 */
export class PhotoSize {
	/**
	 * Identifier for this file, which can be used to download or reuse the file
	 * @type { string }
	 * @memberof PhotoSize
	 * @instance
	 * @public
	 */
	fileId!: string;

	/**
	 * Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
	 * @type { string }
	 * @memberof PhotoSize
	 * @instance
	 * @public
	 */
	fileUniqueId!: string;

	/**
	 * Photo width
	 * @type { number }
	 * @memberof PhotoSize
	 * @instance
	 * @public
	 */
	width!: number;

	/**
	 * Photo height
	 * @type { number }
	 * @memberof PhotoSize
	 * @instance
	 * @public
	 */
	height!: number;

	/**
	 * Optional. File size in bytes
	 * @type { number }
	 * @memberof PhotoSize
	 * @instance
	 * @public
	 */
	fileSize?: number;

	/**
	 * Raw data from Telegram API in snake_case format
	 * @type {TelegramObject}
	 * @memberof PhotoSize
	 * @instance
	 * @public
	 */
	public raw?: TelegramObject;

	/**
	 * Bot instance associated with this object
	 * @type {Bot}
	 * @memberof PhotoSize
	 * @instance
	 * @public
	 */
	public bot?: Bot;

	/**
	 * Creates a new PhotoSize instance from raw Telegram API data
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
