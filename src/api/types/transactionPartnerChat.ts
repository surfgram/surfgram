/**
 * TransactionPartnerChat class for Surfgram Telegram Bot SDK
 * @module types/transactionPartnerChat
 * @description Describes a transaction with a chat.
 * @see {@link https://core.telegram.org/bots/api#transactionpartnerchat Telegram API Documentation}
 * @class TransactionPartnerChat
 * @extends TelegramObject
 */

import { Bot } from "../../core/bot";
import { snakeToCamel } from "../../core/utils";
import { TelegramObject } from "./telegramObject";
import { Chat } from "./chat";
import { Gift } from "./gift";

/**
 * Represents a TransactionPartnerChat object from the Telegram Bot API
 * @class TransactionPartnerChat
 */
export class TransactionPartnerChat {
	/**
	 * Type of the transaction partner, always “chat”
	 * @type { string }
	 * @memberof TransactionPartnerChat
	 * @instance
	 * @public
	 */
	type!: string;

	/**
	 * Information about the chat
	 * @type { Chat }
	 * @memberof TransactionPartnerChat
	 * @instance
	 * @public
	 */
	chat!: Chat;

	/**
	 * Optional. The gift sent to the chat by the bot
	 * @type { Gift }
	 * @memberof TransactionPartnerChat
	 * @instance
	 * @public
	 */
	gift?: Gift;

	/**
	 * Raw data from Telegram API in snake_case format
	 * @type {TelegramObject}
	 * @memberof TransactionPartnerChat
	 * @instance
	 * @public
	 */
	public raw?: TelegramObject;

	/**
	 * Bot instance associated with this object
	 * @type {Bot}
	 * @memberof TransactionPartnerChat
	 * @instance
	 * @public
	 */
	public bot?: Bot;

	/**
	 * Creates a new TransactionPartnerChat instance from raw Telegram API data
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
