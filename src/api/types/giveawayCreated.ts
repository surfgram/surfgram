/**
 * GiveawayCreated class for Surfgram Telegram Bot SDK
 * @module types/giveawayCreated
 * @description This object represents a service message about the creation of a scheduled giveaway.
 * @see {@link https://core.telegram.org/bots/api#giveawaycreated Telegram API Documentation}
 * @class GiveawayCreated
 * @extends TelegramObject
 */

import { Bot } from "../../core/bot";
import { snakeToCamel } from "../../core/utils";
import { TelegramObject } from "./telegramObject";

/**
 * Represents a GiveawayCreated object from the Telegram Bot API
 * @class GiveawayCreated
 */
export class GiveawayCreated {
	/**
	 * Optional. The number of Telegram Stars to be split between giveaway winners; for Telegram Star giveaways only
	 * @type { number }
	 * @memberof GiveawayCreated
	 * @instance
	 * @public
	 */
	prizeStarCount?: number;

	/**
	 * Raw data from Telegram API in snake_case format
	 * @type {TelegramObject}
	 * @memberof GiveawayCreated
	 * @instance
	 * @public
	 */
	public raw?: TelegramObject;

	/**
	 * Bot instance associated with this object
	 * @type {Bot}
	 * @memberof GiveawayCreated
	 * @instance
	 * @public
	 */
	public bot?: Bot;

	/**
	 * Creates a new GiveawayCreated instance from raw Telegram API data
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
