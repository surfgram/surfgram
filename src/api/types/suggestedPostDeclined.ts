/**
 * SuggestedPostDeclined class for Surfgram Telegram Bot SDK
 * @module types/suggestedPostDeclined
 * @description Describes a service message about the rejection of a suggested post.
 * @see {@link https://core.telegram.org/bots/api#suggestedpostdeclined Telegram API Documentation}
 * @class SuggestedPostDeclined
 * @extends TelegramObject
 */

import { Bot } from "../../core/bot";
import { snakeToCamel } from "../../core/utils";
import { TelegramObject } from "./telegramObject";
import { Message } from "./message";

/**
 * Represents a SuggestedPostDeclined object from the Telegram Bot API
 * @class SuggestedPostDeclined
 */
export class SuggestedPostDeclined {
	/**
	 * Optional. Message containing the suggested post. Note that the Message object in this field will not contain the reply\_to\_message field even if it itself is a reply.
	 * @type { Message }
	 * @memberof SuggestedPostDeclined
	 * @instance
	 * @public
	 */
	suggestedPostMessage?: Message;

	/**
	 * Optional. Comment with which the post was declined
	 * @type { string }
	 * @memberof SuggestedPostDeclined
	 * @instance
	 * @public
	 */
	comment?: string;

	/**
	 * Raw data from Telegram API in snake_case format
	 * @type {TelegramObject}
	 * @memberof SuggestedPostDeclined
	 * @instance
	 * @public
	 */
	public raw?: TelegramObject;

	/**
	 * Bot instance associated with this object
	 * @type {Bot}
	 * @memberof SuggestedPostDeclined
	 * @instance
	 * @public
	 */
	public bot?: Bot;

	/**
	 * Creates a new SuggestedPostDeclined instance from raw Telegram API data
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
