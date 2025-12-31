/**
 * MaskPosition class for Surfgram Telegram Bot SDK
 * @module types/maskPosition
 * @description This object describes the position on faces where a mask should be placed by default.
 * @see {@link https://core.telegram.org/bots/api#maskposition Telegram API Documentation}
 * @class MaskPosition
 * @extends TelegramObject
 */

import { Bot } from "../../core/bot";
import { snakeToCamel } from "../../core/utils";
import { TelegramObject } from "./telegramObject";

/**
 * Represents a MaskPosition object from the Telegram Bot API
 * @class MaskPosition
 */
export class MaskPosition {
	/**
	 * The part of the face relative to which the mask should be placed. One of “forehead”, “eyes”, “mouth”, or “chin”.
	 * @type { string }
	 * @memberof MaskPosition
	 * @instance
	 * @public
	 */
	point!: string;

	/**
	 * Shift by X-axis measured in widths of the mask scaled to the face size, from left to right. For example, choosing -1.0 will place mask just to the left of the default mask position.
	 * @type { number }
	 * @memberof MaskPosition
	 * @instance
	 * @public
	 */
	xShift!: number;

	/**
	 * Shift by Y-axis measured in heights of the mask scaled to the face size, from top to bottom. For example, 1.0 will place the mask just below the default mask position.
	 * @type { number }
	 * @memberof MaskPosition
	 * @instance
	 * @public
	 */
	yShift!: number;

	/**
	 * Mask scaling coefficient. For example, 2.0 means double size.
	 * @type { number }
	 * @memberof MaskPosition
	 * @instance
	 * @public
	 */
	scale!: number;

	/**
	 * Raw data from Telegram API in snake_case format
	 * @type {TelegramObject}
	 * @memberof MaskPosition
	 * @instance
	 * @public
	 */
	public raw?: TelegramObject;

	/**
	 * Bot instance associated with this object
	 * @type {Bot}
	 * @memberof MaskPosition
	 * @instance
	 * @public
	 */
	public bot?: Bot;

	/**
	 * Creates a new MaskPosition instance from raw Telegram API data
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
