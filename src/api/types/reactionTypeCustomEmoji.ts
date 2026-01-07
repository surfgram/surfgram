/**
 * ReactionTypeCustomEmoji class for Surfgram Telegram Bot SDK
 * @module types/reactionTypeCustomEmoji
 * @description The reaction is based on a custom emoji.
 * @see {@link https://core.telegram.org/bots/api#reactiontypecustomemoji Telegram API Documentation}
 * @class ReactionTypeCustomEmoji
 * @extends TelegramObject
 */

import { Bot } from "../../core/bot";
import { snakeToCamel } from "../../core/utils";
import { TelegramObject } from "./telegramObject";

/**
 * Represents a ReactionTypeCustomEmoji object from the Telegram Bot API
 * @class ReactionTypeCustomEmoji
 */
export class ReactionTypeCustomEmoji {
	/**
	 * Type of the reaction, always “custom\_emoji”
	 * @type { string }
	 * @memberof ReactionTypeCustomEmoji
	 * @instance
	 * @public
	 */
	type!: string;

	/**
	 * Custom emoji identifier
	 * @type { string }
	 * @memberof ReactionTypeCustomEmoji
	 * @instance
	 * @public
	 */
	customEmojiId!: string;

	/**
	 * Raw data from Telegram API in snake_case format
	 * @type {TelegramObject}
	 * @memberof ReactionTypeCustomEmoji
	 * @instance
	 * @public
	 */
	public raw?: TelegramObject;

	/**
	 * Bot instance associated with this object
	 * @type {Bot}
	 * @memberof ReactionTypeCustomEmoji
	 * @instance
	 * @public
	 */
	public bot?: Bot;

	/**
	 * Creates a new ReactionTypeCustomEmoji instance from raw Telegram API data
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
