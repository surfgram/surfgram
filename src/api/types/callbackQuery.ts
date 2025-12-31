/**
 * CallbackQuery class for Surfgram Telegram Bot SDK
 * @module types/callbackQuery
 * @description This object represents an incoming callback query from a callback button in an inline keyboard. If the button that originated the query was attached to a message sent by the bot, the field message will be present. If the button was attached to a message sent via the bot \(in inline mode\), the field inline\_message\_id will be present. Exactly one of the fields data or game\_short\_name will be present.
 * @see {@link https://core.telegram.org/bots/api#callbackquery Telegram API Documentation}
 * @class CallbackQuery
 * @extends TelegramObject
 */

import { Bot } from "../../core/bot";
import { snakeToCamel } from "../../core/utils";
import { TelegramObject } from "./telegramObject";
import { User } from "./user";
import { MaybeInaccessibleMessage } from "./maybeInaccessibleMessage";

/**
 * Represents a CallbackQuery object from the Telegram Bot API
 * @class CallbackQuery
 */
export class CallbackQuery {
	/**
	 * Unique identifier for this query
	 * @type { string }
	 * @memberof CallbackQuery
	 * @instance
	 * @public
	 */
	id!: string;

	/**
	 * Sender
	 * @type { User }
	 * @memberof CallbackQuery
	 * @instance
	 * @public
	 */
	from!: User;

	/**
	 * Optional. Message sent by the bot with the callback button that originated the query
	 * @type { MaybeInaccessibleMessage }
	 * @memberof CallbackQuery
	 * @instance
	 * @public
	 */
	message?: MaybeInaccessibleMessage;

	/**
	 * Optional. Identifier of the message sent via the bot in inline mode, that originated the query.
	 * @type { string }
	 * @memberof CallbackQuery
	 * @instance
	 * @public
	 */
	inlineMessageId?: string;

	/**
	 * Global identifier, uniquely corresponding to the chat to which the message with the callback button was sent. Useful for high scores in games.
	 * @type { string }
	 * @memberof CallbackQuery
	 * @instance
	 * @public
	 */
	chatInstance!: string;

	/**
	 * Optional. Data associated with the callback button. Be aware that the message originated the query can contain no callback buttons with this data.
	 * @type { string }
	 * @memberof CallbackQuery
	 * @instance
	 * @public
	 */
	data?: string;

	/**
	 * Optional. Short name of a Game to be returned, serves as the unique identifier for the game
	 * @type { string }
	 * @memberof CallbackQuery
	 * @instance
	 * @public
	 */
	gameShortName?: string;

	/**
	 * Raw data from Telegram API in snake_case format
	 * @type {TelegramObject}
	 * @memberof CallbackQuery
	 * @instance
	 * @public
	 */
	public raw?: TelegramObject;

	/**
	 * Bot instance associated with this object
	 * @type {Bot}
	 * @memberof CallbackQuery
	 * @instance
	 * @public
	 */
	public bot?: Bot;

	/**
	 * Creates a new CallbackQuery instance from raw Telegram API data
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
