/**
 * LoginUrl class for Surfgram Telegram Bot SDK
 * @module types/loginUrl
 * @description This object represents a parameter of the inline keyboard button used to automatically authorize a user. Serves as a great replacement for the Telegram Login Widget when the user is coming from Telegram. All the user needs to do is tap/click a button and confirm that they want to log in:
 * @see {@link https://core.telegram.org/bots/api#loginurl Telegram API Documentation}
 * @class LoginUrl
 * @extends TelegramObject
 */

import { Bot } from "../../core/bot";
import { snakeToCamel } from "../../core/utils";
import { TelegramObject } from "./telegramObject";

/**
 * Represents a LoginUrl object from the Telegram Bot API
 * @class LoginUrl
 */
export class LoginUrl {
	/**
	 * An HTTPS URL to be opened with user authorization data added to the query string when the button is pressed. If the user refuses to provide authorization data, the original URL without information about the user will be opened. The data added is the same as described in Receiving authorization data.NOTE: You must always check the hash of the received data to verify the authentication and the integrity of the data as described in Checking authorization.
	 * @type { string }
	 * @memberof LoginUrl
	 * @instance
	 * @public
	 */
	url!: string;

	/**
	 * Optional. New text of the button in forwarded messages.
	 * @type { string }
	 * @memberof LoginUrl
	 * @instance
	 * @public
	 */
	forwardText?: string;

	/**
	 * Optional. Username of a bot, which will be used for user authorization. See Setting up a bot for more details. If not specified, the current bot's username will be assumed. The url's domain must be the same as the domain linked with the bot. See Linking your domain to the bot for more details.
	 * @type { string }
	 * @memberof LoginUrl
	 * @instance
	 * @public
	 */
	botUsername?: string;

	/**
	 * Optional. Pass True to request the permission for your bot to send messages to the user.
	 * @type { boolean }
	 * @memberof LoginUrl
	 * @instance
	 * @public
	 */
	requestWriteAccess?: boolean;

	/**
	 * Raw data from Telegram API in snake_case format
	 * @type {TelegramObject}
	 * @memberof LoginUrl
	 * @instance
	 * @public
	 */
	public raw?: TelegramObject;

	/**
	 * Bot instance associated with this object
	 * @type {Bot}
	 * @memberof LoginUrl
	 * @instance
	 * @public
	 */
	public bot?: Bot;

	/**
	 * Creates a new LoginUrl instance from raw Telegram API data
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
