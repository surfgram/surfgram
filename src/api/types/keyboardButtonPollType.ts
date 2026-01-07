/**
 * KeyboardButtonPollType class for Surfgram Telegram Bot SDK
 * @module types/keyboardButtonPollType
 * @description This object represents type of a poll, which is allowed to be created and sent when the corresponding button is pressed.
 * @see {@link https://core.telegram.org/bots/api#keyboardbuttonpolltype Telegram API Documentation}
 * @class KeyboardButtonPollType
 * @extends TelegramObject
 */

import { Bot } from "../../core/bot";
import { snakeToCamel } from "../../core/utils";
import { TelegramObject } from "./telegramObject";

/**
 * Represents a KeyboardButtonPollType object from the Telegram Bot API
 * @class KeyboardButtonPollType
 */
export class KeyboardButtonPollType {
	/**
	 * Optional. If quiz is passed, the user will be allowed to create only polls in the quiz mode. If regular is passed, only regular polls will be allowed. Otherwise, the user will be allowed to create a poll of any type.
	 * @type { string }
	 * @memberof KeyboardButtonPollType
	 * @instance
	 * @public
	 */
	type?: string;

	/**
	 * Raw data from Telegram API in snake_case format
	 * @type {TelegramObject}
	 * @memberof KeyboardButtonPollType
	 * @instance
	 * @public
	 */
	public raw?: TelegramObject;

	/**
	 * Bot instance associated with this object
	 * @type {Bot}
	 * @memberof KeyboardButtonPollType
	 * @instance
	 * @public
	 */
	public bot?: Bot;

	/**
	 * Creates a new KeyboardButtonPollType instance from raw Telegram API data
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
