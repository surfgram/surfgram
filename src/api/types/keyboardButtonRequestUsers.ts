/**
 * KeyboardButtonRequestUsers class for Surfgram Telegram Bot SDK
 * @module types/keyboardButtonRequestUsers
 * @description This object defines the criteria used to request suitable users. Information about the selected users will be shared with the bot when the corresponding button is pressed. More about requesting users »
 * @see {@link https://core.telegram.org/bots/api#keyboardbuttonrequestusers Telegram API Documentation}
 * @class KeyboardButtonRequestUsers
 * @extends TelegramObject
 */

import { Bot } from "../../core/bot";
import { snakeToCamel } from "../../core/utils";
import { TelegramObject } from "./telegramObject";

/**
 * Represents a KeyboardButtonRequestUsers object from the Telegram Bot API
 * @class KeyboardButtonRequestUsers
 */
export class KeyboardButtonRequestUsers {
	/**
	 * Signed 32-bit identifier of the request that will be received back in the UsersShared object. Must be unique within the message
	 * @type { number }
	 * @memberof KeyboardButtonRequestUsers
	 * @instance
	 * @public
	 */
	requestId!: number;

	/**
	 * Optional. Pass True to request bots, pass False to request regular users. If not specified, no additional restrictions are applied.
	 * @type { boolean }
	 * @memberof KeyboardButtonRequestUsers
	 * @instance
	 * @public
	 */
	userIsBot?: boolean;

	/**
	 * Optional. Pass True to request premium users, pass False to request non-premium users. If not specified, no additional restrictions are applied.
	 * @type { boolean }
	 * @memberof KeyboardButtonRequestUsers
	 * @instance
	 * @public
	 */
	userIsPremium?: boolean;

	/**
	 * Optional. The maximum number of users to be selected; 1-10. Defaults to 1.
	 * @type { number }
	 * @memberof KeyboardButtonRequestUsers
	 * @instance
	 * @public
	 */
	maxQuantity?: number;

	/**
	 * Optional. Pass True to request the users' first and last names
	 * @type { boolean }
	 * @memberof KeyboardButtonRequestUsers
	 * @instance
	 * @public
	 */
	requestName?: boolean;

	/**
	 * Optional. Pass True to request the users' usernames
	 * @type { boolean }
	 * @memberof KeyboardButtonRequestUsers
	 * @instance
	 * @public
	 */
	requestUsername?: boolean;

	/**
	 * Optional. Pass True to request the users' photos
	 * @type { boolean }
	 * @memberof KeyboardButtonRequestUsers
	 * @instance
	 * @public
	 */
	requestPhoto?: boolean;

	/**
	 * Raw data from Telegram API in snake_case format
	 * @type {TelegramObject}
	 * @memberof KeyboardButtonRequestUsers
	 * @instance
	 * @public
	 */
	public raw?: TelegramObject;

	/**
	 * Bot instance associated with this object
	 * @type {Bot}
	 * @memberof KeyboardButtonRequestUsers
	 * @instance
	 * @public
	 */
	public bot?: Bot;

	/**
	 * Creates a new KeyboardButtonRequestUsers instance from raw Telegram API data
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
