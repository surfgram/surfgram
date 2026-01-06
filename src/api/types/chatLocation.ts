/**
 * ChatLocation class for Surfgram Telegram Bot SDK
 * @module types/chatLocation
 * @description Represents a location to which a chat is connected.
 * @see {@link https://core.telegram.org/bots/api#chatlocation Telegram API Documentation}
 * @class ChatLocation
 * @extends TelegramObject
 */

import { Bot } from "../../core/bot";
import { snakeToCamel } from "../../core/utils";
import { TelegramObject } from "./telegramObject";
import { Location } from "./location";

/**
 * Represents a ChatLocation object from the Telegram Bot API
 * @class ChatLocation
 */
export class ChatLocation {
	/**
	 * The location to which the supergroup is connected. Can't be a live location.
	 * @type { Location }
	 * @memberof ChatLocation
	 * @instance
	 * @public
	 */
	location!: Location;

	/**
	 * Location address; 1-64 characters, as defined by the chat owner
	 * @type { string }
	 * @memberof ChatLocation
	 * @instance
	 * @public
	 */
	address!: string;

	/**
	 * Raw data from Telegram API in snake_case format
	 * @type {TelegramObject}
	 * @memberof ChatLocation
	 * @instance
	 * @public
	 */
	public raw?: TelegramObject;

	/**
	 * Bot instance associated with this object
	 * @type {Bot}
	 * @memberof ChatLocation
	 * @instance
	 * @public
	 */
	public bot?: Bot;

	/**
	 * Creates a new ChatLocation instance from raw Telegram API data
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
