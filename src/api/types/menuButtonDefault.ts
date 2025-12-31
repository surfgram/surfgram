/**
 * MenuButtonDefault class for Surfgram Telegram Bot SDK
 * @module types/menuButtonDefault
 * @description Describes that no specific value for the menu button was set.
 * @see {@link https://core.telegram.org/bots/api#menubuttondefault Telegram API Documentation}
 * @class MenuButtonDefault
 * @extends TelegramObject
 */

import { Bot } from "../../core/bot";
import { snakeToCamel } from "../../core/utils";
import { TelegramObject } from "./telegramObject";

/**
 * Represents a MenuButtonDefault object from the Telegram Bot API
 * @class MenuButtonDefault
 */
export class MenuButtonDefault {
	/**
	 * Type of the button, must be default
	 * @type { string }
	 * @memberof MenuButtonDefault
	 * @instance
	 * @public
	 */
	type!: string;

	/**
	 * Raw data from Telegram API in snake_case format
	 * @type {TelegramObject}
	 * @memberof MenuButtonDefault
	 * @instance
	 * @public
	 */
	public raw?: TelegramObject;

	/**
	 * Bot instance associated with this object
	 * @type {Bot}
	 * @memberof MenuButtonDefault
	 * @instance
	 * @public
	 */
	public bot?: Bot;

	/**
	 * Creates a new MenuButtonDefault instance from raw Telegram API data
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
