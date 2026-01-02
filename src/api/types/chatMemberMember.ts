/**
 * ChatMemberMember class for Surfgram Telegram Bot SDK
 * @module types/chatMemberMember
 * @description Represents a chat member that has no additional privileges or restrictions.
 * @see {@link https://core.telegram.org/bots/api#chatmembermember Telegram API Documentation}
 * @class ChatMemberMember
 * @extends TelegramObject
 */

import { Bot } from "../../core/bot";
import { snakeToCamel } from "../../core/utils";
import { TelegramObject } from "./telegramObject";
import { User } from "./user";

/**
 * Represents a ChatMemberMember object from the Telegram Bot API
 * @class ChatMemberMember
 */
export class ChatMemberMember {
	/**
	 * The member's status in the chat, always “member”
	 * @type { string }
	 * @memberof ChatMemberMember
	 * @instance
	 * @public
	 */
	status!: string;

	/**
	 * Information about the user
	 * @type { User }
	 * @memberof ChatMemberMember
	 * @instance
	 * @public
	 */
	user!: User;

	/**
	 * Optional. Date when the user's subscription will expire; Unix time
	 * @type { number }
	 * @memberof ChatMemberMember
	 * @instance
	 * @public
	 */
	untilDate?: number;

	/**
	 * Raw data from Telegram API in snake_case format
	 * @type {TelegramObject}
	 * @memberof ChatMemberMember
	 * @instance
	 * @public
	 */
	public raw?: TelegramObject;

	/**
	 * Bot instance associated with this object
	 * @type {Bot}
	 * @memberof ChatMemberMember
	 * @instance
	 * @public
	 */
	public bot?: Bot;

	/**
	 * Creates a new ChatMemberMember instance from raw Telegram API data
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
