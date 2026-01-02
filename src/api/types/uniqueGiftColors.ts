/**
 * UniqueGiftColors class for Surfgram Telegram Bot SDK
 * @module types/uniqueGiftColors
 * @description This object contains information about the color scheme for a user&#39;s name, message replies and link previews based on a unique gift.
 * @see {@link https://core.telegram.org/bots/api#uniquegiftcolors Telegram API Documentation}
 * @class UniqueGiftColors
 * @extends TelegramObject
 */

import { Bot } from "../../core/bot";
import { snakeToCamel } from "../../core/utils";
import { TelegramObject } from "./telegramObject";

/**
 * Represents a UniqueGiftColors object from the Telegram Bot API
 * @class UniqueGiftColors
 */
export class UniqueGiftColors {
	/**
	 * Custom emoji identifier of the unique gift's model
	 * @type { string }
	 * @memberof UniqueGiftColors
	 * @instance
	 * @public
	 */
	modelCustomEmojiId!: string;

	/**
	 * Custom emoji identifier of the unique gift's symbol
	 * @type { string }
	 * @memberof UniqueGiftColors
	 * @instance
	 * @public
	 */
	symbolCustomEmojiId!: string;

	/**
	 * Main color used in light themes; RGB format
	 * @type { number }
	 * @memberof UniqueGiftColors
	 * @instance
	 * @public
	 */
	lightThemeMainColor!: number;

	/**
	 * List of 1-3 additional colors used in light themes; RGB format
	 * @type { number[] }
	 * @memberof UniqueGiftColors
	 * @instance
	 * @public
	 */
	lightThemeOtherColors!: number[];

	/**
	 * Main color used in dark themes; RGB format
	 * @type { number }
	 * @memberof UniqueGiftColors
	 * @instance
	 * @public
	 */
	darkThemeMainColor!: number;

	/**
	 * List of 1-3 additional colors used in dark themes; RGB format
	 * @type { number[] }
	 * @memberof UniqueGiftColors
	 * @instance
	 * @public
	 */
	darkThemeOtherColors!: number[];

	/**
	 * Raw data from Telegram API in snake_case format
	 * @type {TelegramObject}
	 * @memberof UniqueGiftColors
	 * @instance
	 * @public
	 */
	public raw?: TelegramObject;

	/**
	 * Bot instance associated with this object
	 * @type {Bot}
	 * @memberof UniqueGiftColors
	 * @instance
	 * @public
	 */
	public bot?: Bot;

	/**
	 * Creates a new UniqueGiftColors instance from raw Telegram API data
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
