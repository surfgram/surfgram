/**
 * BusinessOpeningHours class for Surfgram Telegram Bot SDK
 * @module types/businessOpeningHours
 * @description Describes the opening hours of a business.
 * @see {@link https://core.telegram.org/bots/api#businessopeninghours Telegram API Documentation}
 * @class BusinessOpeningHours
 * @extends TelegramObject
 */

import { Bot } from "../../core/bot";
import { snakeToCamel } from "../../core/utils";
import { TelegramObject } from "./telegramObject";
import { BusinessOpeningHoursInterval } from "./businessOpeningHoursInterval";

/**
 * Represents a BusinessOpeningHours object from the Telegram Bot API
 * @class BusinessOpeningHours
 */
export class BusinessOpeningHours {
	/**
	 * Unique name of the time zone for which the opening hours are defined
	 * @type { string }
	 * @memberof BusinessOpeningHours
	 * @instance
	 * @public
	 */
	timeZoneName!: string;

	/**
	 * List of time intervals describing business opening hours
	 * @type { BusinessOpeningHoursInterval[] }
	 * @memberof BusinessOpeningHours
	 * @instance
	 * @public
	 */
	openingHours!: BusinessOpeningHoursInterval[];

	/**
	 * Raw data from Telegram API in snake_case format
	 * @type {TelegramObject}
	 * @memberof BusinessOpeningHours
	 * @instance
	 * @public
	 */
	public raw?: TelegramObject;

	/**
	 * Bot instance associated with this object
	 * @type {Bot}
	 * @memberof BusinessOpeningHours
	 * @instance
	 * @public
	 */
	public bot?: Bot;

	/**
	 * Creates a new BusinessOpeningHours instance from raw Telegram API data
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
