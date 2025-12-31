/**
 * StoryAreaTypeLink class for Surfgram Telegram Bot SDK
 * @module types/storyAreaTypeLink
 * @description Describes a story area pointing to an HTTP or tg:// link. Currently, a story can have up to 3 link areas.
 * @see {@link https://core.telegram.org/bots/api#storyareatypelink Telegram API Documentation}
 * @class StoryAreaTypeLink
 * @extends TelegramObject
 */

import { Bot } from "../../core/bot";
import { snakeToCamel } from "../../core/utils";
import { TelegramObject } from "./telegramObject";

/**
 * Represents a StoryAreaTypeLink object from the Telegram Bot API
 * @class StoryAreaTypeLink
 */
export class StoryAreaTypeLink {
	/**
	 * Type of the area, always “link”
	 * @type { string }
	 * @memberof StoryAreaTypeLink
	 * @instance
	 * @public
	 */
	type!: string;

	/**
	 * HTTP or tg:// URL to be opened when the area is clicked
	 * @type { string }
	 * @memberof StoryAreaTypeLink
	 * @instance
	 * @public
	 */
	url!: string;

	/**
	 * Raw data from Telegram API in snake_case format
	 * @type {TelegramObject}
	 * @memberof StoryAreaTypeLink
	 * @instance
	 * @public
	 */
	public raw?: TelegramObject;

	/**
	 * Bot instance associated with this object
	 * @type {Bot}
	 * @memberof StoryAreaTypeLink
	 * @instance
	 * @public
	 */
	public bot?: Bot;

	/**
	 * Creates a new StoryAreaTypeLink instance from raw Telegram API data
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
