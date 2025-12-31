/**
 * BusinessLocation class for Surfgram Telegram Bot SDK
 * @module types/businessLocation
 * @description Contains information about the location of a Telegram Business account.
 * @see {@link https://core.telegram.org/bots/api#businesslocation Telegram API Documentation}
 * @class BusinessLocation
 * @extends TelegramObject
 */

import { Bot } from "../../core/bot";
import { snakeToCamel } from "../../core/utils";
import { TelegramObject } from "./telegramObject";
import { Location } from "./location";

/**
 * Represents a BusinessLocation object from the Telegram Bot API
 * @class BusinessLocation
 */
export class BusinessLocation {
	/**
	 * Address of the business
	 * @type { string }
	 * @memberof BusinessLocation
	 * @instance
	 * @public
	 */
	address!: string;

	/**
	 * Optional. Location of the business
	 * @type { Location }
	 * @memberof BusinessLocation
	 * @instance
	 * @public
	 */
	location?: Location;

	/**
	 * Raw data from Telegram API in snake_case format
	 * @type {TelegramObject}
	 * @memberof BusinessLocation
	 * @instance
	 * @public
	 */
	public raw?: TelegramObject;

	/**
	 * Bot instance associated with this object
	 * @type {Bot}
	 * @memberof BusinessLocation
	 * @instance
	 * @public
	 */
	public bot?: Bot;

	/**
	 * Creates a new BusinessLocation instance from raw Telegram API data
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
