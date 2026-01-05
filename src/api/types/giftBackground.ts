/**
 * GiftBackground class for Surfgram Telegram Bot SDK
 * @module types/giftBackground
 * @description This object describes the background of a gift.
 * @see {@link https://core.telegram.org/bots/api#giftbackground Telegram API Documentation}
 * @class GiftBackground
 * @extends TelegramObject
 */

import { Bot } from "../../core/bot";
import { snakeToCamel } from "../../core/utils";
import { TelegramObject } from "./telegramObject";

/**
 * Represents a GiftBackground object from the Telegram Bot API
 * @class GiftBackground
 */
export class GiftBackground {
	/**
	 * Center color of the background in RGB format
	 * @type { number }
	 * @memberof GiftBackground
	 * @instance
	 * @public
	 */
	centerColor!: number;

	/**
	 * Edge color of the background in RGB format
	 * @type { number }
	 * @memberof GiftBackground
	 * @instance
	 * @public
	 */
	edgeColor!: number;

	/**
	 * Text color of the background in RGB format
	 * @type { number }
	 * @memberof GiftBackground
	 * @instance
	 * @public
	 */
	textColor!: number;

	/**
	 * Raw data from Telegram API in snake_case format
	 * @type {TelegramObject}
	 * @memberof GiftBackground
	 * @instance
	 * @public
	 */
	public raw?: TelegramObject;

	/**
	 * Bot instance associated with this object
	 * @type {Bot}
	 * @memberof GiftBackground
	 * @instance
	 * @public
	 */
	public bot?: Bot;

	/**
	 * Creates a new GiftBackground instance from raw Telegram API data
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
