/**
 * StoryAreaType class for Surfgram Telegram Bot SDK
 * @module types/storyAreaType
 * @description Describes the type of a clickable area on a story. Currently, it can be one of
 * @see {@link https://core.telegram.org/bots/api#storyareatype Telegram API Documentation}
 * @class StoryAreaType
 * @extends TelegramObject
 */

import { Bot } from "../../core/bot";
import { snakeToCamel } from "../../core/utils";
import { TelegramObject } from "./telegramObject";
import { LocationAddress } from "./locationAddress";

/**
 * Represents a StoryAreaType object from the Telegram Bot API
 * @class StoryAreaType
 */
export class StoryAreaType {
	/**
	 * Type of the area, always “location”
	 * @type { string }
	 * @memberof StoryAreaType
	 * @instance
	 * @public
	 */
	type!: string;

	/**
	 * Location latitude in degrees
	 * @type { number }
	 * @memberof StoryAreaType
	 * @instance
	 * @public
	 */
	latitude!: number;

	/**
	 * Location longitude in degrees
	 * @type { number }
	 * @memberof StoryAreaType
	 * @instance
	 * @public
	 */
	longitude!: number;

	/**
	 * Optional. Address of the location
	 * @type { LocationAddress }
	 * @memberof StoryAreaType
	 * @instance
	 * @public
	 */
	address?: LocationAddress;

	/**
	 * Raw data from Telegram API in snake_case format
	 * @type {TelegramObject}
	 * @memberof StoryAreaType
	 * @instance
	 * @public
	 */
	public raw?: TelegramObject;

	/**
	 * Bot instance associated with this object
	 * @type {Bot}
	 * @memberof StoryAreaType
	 * @instance
	 * @public
	 */
	public bot?: Bot;

	/**
	 * Creates a new StoryAreaType instance from raw Telegram API data
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
