/**
 * PaidMediaPreview class for Surfgram Telegram Bot SDK
 * @module types/paidMediaPreview
 * @description The paid media isn&#39;t available before the payment.
 * @see {@link https://core.telegram.org/bots/api#paidmediapreview Telegram API Documentation}
 * @class PaidMediaPreview
 * @extends TelegramObject
 */

import { Bot } from "../../core/bot";
import { snakeToCamel } from "../../core/utils";
import { TelegramObject } from "./telegramObject";

/**
 * Represents a PaidMediaPreview object from the Telegram Bot API
 * @class PaidMediaPreview
 */
export class PaidMediaPreview {
	/**
	 * Type of the paid media, always “preview”
	 * @type { string }
	 * @memberof PaidMediaPreview
	 * @instance
	 * @public
	 */
	type!: string;

	/**
	 * Optional. Media width as defined by the sender
	 * @type { number }
	 * @memberof PaidMediaPreview
	 * @instance
	 * @public
	 */
	width?: number;

	/**
	 * Optional. Media height as defined by the sender
	 * @type { number }
	 * @memberof PaidMediaPreview
	 * @instance
	 * @public
	 */
	height?: number;

	/**
	 * Optional. Duration of the media in seconds as defined by the sender
	 * @type { number }
	 * @memberof PaidMediaPreview
	 * @instance
	 * @public
	 */
	duration?: number;

	/**
	 * Raw data from Telegram API in snake_case format
	 * @type {TelegramObject}
	 * @memberof PaidMediaPreview
	 * @instance
	 * @public
	 */
	public raw?: TelegramObject;

	/**
	 * Bot instance associated with this object
	 * @type {Bot}
	 * @memberof PaidMediaPreview
	 * @instance
	 * @public
	 */
	public bot?: Bot;

	/**
	 * Creates a new PaidMediaPreview instance from raw Telegram API data
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
