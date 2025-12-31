/**
 * SharedUser class for Surfgram Telegram Bot SDK
 * @module types/sharedUser
 * @description This object contains information about a user that was shared with the bot using a KeyboardButtonRequestUsers button.
 * @see {@link https://core.telegram.org/bots/api#shareduser Telegram API Documentation}
 * @class SharedUser
 * @extends TelegramObject
 */

import { Bot } from "../../core/bot";
import { snakeToCamel } from "../../core/utils";
import { TelegramObject } from "./telegramObject";
import { PhotoSize } from "./photoSize";

/**
 * Represents a SharedUser object from the Telegram Bot API
 * @class SharedUser
 */
export class SharedUser {
	/**
	 * Identifier of the shared user. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so 64-bit integers or double-precision float types are safe for storing these identifiers. The bot may not have access to the user and could be unable to use this identifier, unless the user is already known to the bot by some other means.
	 * @type { number }
	 * @memberof SharedUser
	 * @instance
	 * @public
	 */
	userId!: number;

	/**
	 * Optional. First name of the user, if the name was requested by the bot
	 * @type { string }
	 * @memberof SharedUser
	 * @instance
	 * @public
	 */
	firstName?: string;

	/**
	 * Optional. Last name of the user, if the name was requested by the bot
	 * @type { string }
	 * @memberof SharedUser
	 * @instance
	 * @public
	 */
	lastName?: string;

	/**
	 * Optional. Username of the user, if the username was requested by the bot
	 * @type { string }
	 * @memberof SharedUser
	 * @instance
	 * @public
	 */
	username?: string;

	/**
	 * Optional. Available sizes of the chat photo, if the photo was requested by the bot
	 * @type { PhotoSize[] }
	 * @memberof SharedUser
	 * @instance
	 * @public
	 */
	photo?: PhotoSize[];

	/**
	 * Raw data from Telegram API in snake_case format
	 * @type {TelegramObject}
	 * @memberof SharedUser
	 * @instance
	 * @public
	 */
	public raw?: TelegramObject;

	/**
	 * Bot instance associated with this object
	 * @type {Bot}
	 * @memberof SharedUser
	 * @instance
	 * @public
	 */
	public bot?: Bot;

	/**
	 * Creates a new SharedUser instance from raw Telegram API data
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
