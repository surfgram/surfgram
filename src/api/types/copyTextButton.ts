/**
 * CopyTextButton class for Surfgram Telegram Bot SDK
 * @module types/copyTextButton
 * @description This object represents an inline keyboard button that copies specified text to the clipboard.
 * @see {@link https://core.telegram.org/bots/api#copytextbutton Telegram API Documentation}
 * @class CopyTextButton
 * @extends TelegramObject
 */

import { Bot } from "../../core/bot";
import { snakeToCamel } from "../../core/utils";
import { TelegramObject } from "./telegramObject";

/**
 * Represents a CopyTextButton object from the Telegram Bot API
 * @class CopyTextButton
 */
export class CopyTextButton {
	/**
	 * The text to be copied to the clipboard; 1-256 characters
	 * @type { string }
	 * @memberof CopyTextButton
	 * @instance
	 * @public
	 */
	text!: string;

	/**
	 * Raw data from Telegram API in snake_case format
	 * @type {TelegramObject}
	 * @memberof CopyTextButton
	 * @instance
	 * @public
	 */
	public raw?: TelegramObject;

	/**
	 * Bot instance associated with this object
	 * @type {Bot}
	 * @memberof CopyTextButton
	 * @instance
	 * @public
	 */
	public bot?: Bot;

	/**
	 * Creates a new CopyTextButton instance from raw Telegram API data
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
