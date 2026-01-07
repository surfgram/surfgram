/**
 * BusinessMessagesDeleted class for Surfgram Telegram Bot SDK
 * @module types/businessMessagesDeleted
 * @description This object is received when messages are deleted from a connected business account.
 * @see {@link https://core.telegram.org/bots/api#businessmessagesdeleted Telegram API Documentation}
 * @class BusinessMessagesDeleted
 * @extends TelegramObject
 */

import { Bot } from "../../core/bot";
import { snakeToCamel } from "../../core/utils";
import { TelegramObject } from "./telegramObject";
import { Chat } from "./chat";

/**
 * Represents a BusinessMessagesDeleted object from the Telegram Bot API
 * @class BusinessMessagesDeleted
 */
export class BusinessMessagesDeleted {
	/**
	 * Unique identifier of the business connection
	 * @type { string }
	 * @memberof BusinessMessagesDeleted
	 * @instance
	 * @public
	 */
	businessConnectionId!: string;

	/**
	 * Information about a chat in the business account. The bot may not have access to the chat or the corresponding user.
	 * @type { Chat }
	 * @memberof BusinessMessagesDeleted
	 * @instance
	 * @public
	 */
	chat!: Chat;

	/**
	 * The list of identifiers of deleted messages in the chat of the business account
	 * @type { number[] }
	 * @memberof BusinessMessagesDeleted
	 * @instance
	 * @public
	 */
	messageIds!: number[];

	/**
	 * Raw data from Telegram API in snake_case format
	 * @type {TelegramObject}
	 * @memberof BusinessMessagesDeleted
	 * @instance
	 * @public
	 */
	public raw?: TelegramObject;

	/**
	 * Bot instance associated with this object
	 * @type {Bot}
	 * @memberof BusinessMessagesDeleted
	 * @instance
	 * @public
	 */
	public bot?: Bot;

	/**
	 * Creates a new BusinessMessagesDeleted instance from raw Telegram API data
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
