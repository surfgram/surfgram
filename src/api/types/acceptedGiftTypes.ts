/**
 * AcceptedGiftTypes class for Surfgram Telegram Bot SDK
 * @module types/acceptedGiftTypes
 * @description This object describes the types of gifts that can be gifted to a user or a chat.
 * @see {@link https://core.telegram.org/bots/api#acceptedgifttypes Telegram API Documentation}
 * @class AcceptedGiftTypes
 * @extends TelegramObject
 */

import { Bot } from "../../core/bot";
import { snakeToCamel } from "../../core/utils";
import { TelegramObject } from "./telegramObject";

/**
 * Represents a AcceptedGiftTypes object from the Telegram Bot API
 * @class AcceptedGiftTypes
 */
export class AcceptedGiftTypes {
	/**
	 * True, if unlimited regular gifts are accepted
	 * @type { boolean }
	 * @memberof AcceptedGiftTypes
	 * @instance
	 * @public
	 */
	unlimitedGifts!: boolean;

	/**
	 * True, if limited regular gifts are accepted
	 * @type { boolean }
	 * @memberof AcceptedGiftTypes
	 * @instance
	 * @public
	 */
	limitedGifts!: boolean;

	/**
	 * True, if unique gifts or gifts that can be upgraded to unique for free are accepted
	 * @type { boolean }
	 * @memberof AcceptedGiftTypes
	 * @instance
	 * @public
	 */
	uniqueGifts!: boolean;

	/**
	 * True, if a Telegram Premium subscription is accepted
	 * @type { boolean }
	 * @memberof AcceptedGiftTypes
	 * @instance
	 * @public
	 */
	premiumSubscription!: boolean;

	/**
	 * Raw data from Telegram API in snake_case format
	 * @type {TelegramObject}
	 * @memberof AcceptedGiftTypes
	 * @instance
	 * @public
	 */
	public raw?: TelegramObject;

	/**
	 * Bot instance associated with this object
	 * @type {Bot}
	 * @memberof AcceptedGiftTypes
	 * @instance
	 * @public
	 */
	public bot?: Bot;

	/**
	 * Creates a new AcceptedGiftTypes instance from raw Telegram API data
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
