/**
 * User class for Surfgram Telegram Bot SDK
 * @module types/user
 * @description This object represents a Telegram user or bot.
 * @see {@link https://core.telegram.org/bots/api#user Telegram API Documentation}
 * @class User
 * @extends TelegramObject
 */

import { Bot } from "../../core/bot";
import { snakeToCamel } from "../../core/utils";
import { TelegramObject } from "./telegramObject";

/**
 * Represents a User object from the Telegram Bot API
 * @class User
 */
export class User {
	/**
	 * Unique identifier for this user or bot. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier.
	 * @type { number }
	 * @memberof User
	 * @instance
	 * @public
	 */
	id!: number;

	/**
	 * True, if this user is a bot
	 * @type { boolean }
	 * @memberof User
	 * @instance
	 * @public
	 */
	isBot!: boolean;

	/**
	 * User's or bot's first name
	 * @type { string }
	 * @memberof User
	 * @instance
	 * @public
	 */
	firstName!: string;

	/**
	 * Optional. User's or bot's last name
	 * @type { string }
	 * @memberof User
	 * @instance
	 * @public
	 */
	lastName?: string;

	/**
	 * Optional. User's or bot's username
	 * @type { string }
	 * @memberof User
	 * @instance
	 * @public
	 */
	username?: string;

	/**
	 * Optional. IETF language tag of the user's language
	 * @type { string }
	 * @memberof User
	 * @instance
	 * @public
	 */
	languageCode?: string;

	/**
	 * Optional. True, if this user is a Telegram Premium user
	 * @type { boolean }
	 * @memberof User
	 * @instance
	 * @public
	 */
	isPremium?: boolean;

	/**
	 * Optional. True, if this user added the bot to the attachment menu
	 * @type { boolean }
	 * @memberof User
	 * @instance
	 * @public
	 */
	addedToAttachmentMenu?: boolean;

	/**
	 * Optional. True, if the bot can be invited to groups. Returned only in getMe.
	 * @type { boolean }
	 * @memberof User
	 * @instance
	 * @public
	 */
	canJoinGroups?: boolean;

	/**
	 * Optional. True, if privacy mode is disabled for the bot. Returned only in getMe.
	 * @type { boolean }
	 * @memberof User
	 * @instance
	 * @public
	 */
	canReadAllGroupMessages?: boolean;

	/**
	 * Optional. True, if the bot supports inline queries. Returned only in getMe.
	 * @type { boolean }
	 * @memberof User
	 * @instance
	 * @public
	 */
	supportsInlineQueries?: boolean;

	/**
	 * Optional. True, if the bot can be connected to a Telegram Business account to receive its messages. Returned only in getMe.
	 * @type { boolean }
	 * @memberof User
	 * @instance
	 * @public
	 */
	canConnectToBusiness?: boolean;

	/**
	 * Optional. True, if the bot has a main Web App. Returned only in getMe.
	 * @type { boolean }
	 * @memberof User
	 * @instance
	 * @public
	 */
	hasMainWebApp?: boolean;

	/**
	 * Raw data from Telegram API in snake_case format
	 * @type {TelegramObject}
	 * @memberof User
	 * @instance
	 * @public
	 */
	public raw?: TelegramObject;

	/**
	 * Bot instance associated with this object
	 * @type {Bot}
	 * @memberof User
	 * @instance
	 * @public
	 */
	public bot?: Bot;

	/**
	 * Creates a new User instance from raw Telegram API data
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
