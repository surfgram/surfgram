/**
 * VideoNote class for Surfgram Telegram Bot SDK
 * @module types/videoNote
 * @description This object represents a video message \(available in Telegram apps as of v.4.0\).
 * @see {@link https://core.telegram.org/bots/api#videonote Telegram API Documentation}
 * @class VideoNote
 * @extends TelegramObject
 */

import { Bot } from "../../core/bot";
import { snakeToCamel } from "../../core/utils";
import { TelegramObject } from "./telegramObject";
import { PhotoSize } from "./photoSize";

/**
 * Represents a VideoNote object from the Telegram Bot API
 * @class VideoNote
 */
export class VideoNote {
	/**
	 * Identifier for this file, which can be used to download or reuse the file
	 * @type { string }
	 * @memberof VideoNote
	 * @instance
	 * @public
	 */
	fileId!: string;

	/**
	 * Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
	 * @type { string }
	 * @memberof VideoNote
	 * @instance
	 * @public
	 */
	fileUniqueId!: string;

	/**
	 * Video width and height \(diameter of the video message\) as defined by the sender
	 * @type { number }
	 * @memberof VideoNote
	 * @instance
	 * @public
	 */
	length!: number;

	/**
	 * Duration of the video in seconds as defined by the sender
	 * @type { number }
	 * @memberof VideoNote
	 * @instance
	 * @public
	 */
	duration!: number;

	/**
	 * Optional. Video thumbnail
	 * @type { PhotoSize }
	 * @memberof VideoNote
	 * @instance
	 * @public
	 */
	thumbnail?: PhotoSize;

	/**
	 * Optional. File size in bytes
	 * @type { number }
	 * @memberof VideoNote
	 * @instance
	 * @public
	 */
	fileSize?: number;

	/**
	 * Raw data from Telegram API in snake_case format
	 * @type {TelegramObject}
	 * @memberof VideoNote
	 * @instance
	 * @public
	 */
	public raw?: TelegramObject;

	/**
	 * Bot instance associated with this object
	 * @type {Bot}
	 * @memberof VideoNote
	 * @instance
	 * @public
	 */
	public bot?: Bot;

	/**
	 * Creates a new VideoNote instance from raw Telegram API data
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
