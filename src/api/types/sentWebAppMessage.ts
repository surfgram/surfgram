/**
 * SentWebAppMessage class for Surfgram Telegram Bot SDK
 * @module types/sentWebAppMessage
 * @description Describes an inline message sent by a Web App on behalf of a user.
 * @see {@link https://core.telegram.org/bots/api#sentwebappmessage Telegram API Documentation}
 * @class SentWebAppMessage
 * @extends TelegramObject
 */

import { Bot } from "../../core/bot";
import { snakeToCamel } from "../../core/utils";
import { TelegramObject } from "./telegramObject";

/**
 * Represents a SentWebAppMessage object from the Telegram Bot API
 * @class SentWebAppMessage
 */
export class SentWebAppMessage {
	/**
	 * Optional. Identifier of the sent inline message. Available only if there is an inline keyboard attached to the message.
	 * @type { string }
	 * @memberof SentWebAppMessage
	 * @instance
	 * @public
	 */
	inlineMessageId?: string;

	/**
	 * Raw data from Telegram API in snake_case format
	 * @type {TelegramObject}
	 * @memberof SentWebAppMessage
	 * @instance
	 * @public
	 */
	public raw?: TelegramObject;

	/**
	 * Bot instance associated with this object
	 * @type {Bot}
	 * @memberof SentWebAppMessage
	 * @instance
	 * @public
	 */
	public bot?: Bot;

	/**
	 * Creates a new SentWebAppMessage instance from raw Telegram API data
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
