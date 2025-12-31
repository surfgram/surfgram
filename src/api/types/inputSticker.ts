/**
 * InputSticker class for Surfgram Telegram Bot SDK
 * @module types/inputSticker
 * @description This object describes a sticker to be added to a sticker set.
 * @see {@link https://core.telegram.org/bots/api#inputsticker Telegram API Documentation}
 * @class InputSticker
 * @extends TelegramObject
 */

import { Bot } from "../../core/bot";
import { snakeToCamel } from "../../core/utils";
import { TelegramObject } from "./telegramObject";
import { MaskPosition } from "./maskPosition";

/**
 * Represents a InputSticker object from the Telegram Bot API
 * @class InputSticker
 */
export class InputSticker {
	/**
	 * The added sticker. Pass a file\_id as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or pass “attach://&lt;file\_attach\_name&gt;” to upload a new file using multipart/form-data under &lt;file\_attach\_name&gt; name. Animated and video stickers can't be uploaded via HTTP URL. More information on Sending Files »
	 * @type { string }
	 * @memberof InputSticker
	 * @instance
	 * @public
	 */
	sticker!: string;

	/**
	 * Format of the added sticker, must be one of “static” for a .WEBP or .PNG image, “animated” for a .TGS animation, “video” for a .WEBM video
	 * @type { string }
	 * @memberof InputSticker
	 * @instance
	 * @public
	 */
	format!: string;

	/**
	 * List of 1-20 emoji associated with the sticker
	 * @type { string[] }
	 * @memberof InputSticker
	 * @instance
	 * @public
	 */
	emojiList!: string[];

	/**
	 * Optional. Position where the mask should be placed on faces. For “mask” stickers only.
	 * @type { MaskPosition }
	 * @memberof InputSticker
	 * @instance
	 * @public
	 */
	maskPosition?: MaskPosition;

	/**
	 * Optional. List of 0-20 search keywords for the sticker with total length of up to 64 characters. For “regular” and “custom\_emoji” stickers only.
	 * @type { string[] }
	 * @memberof InputSticker
	 * @instance
	 * @public
	 */
	keywords?: string[];

	/**
	 * Raw data from Telegram API in snake_case format
	 * @type {TelegramObject}
	 * @memberof InputSticker
	 * @instance
	 * @public
	 */
	public raw?: TelegramObject;

	/**
	 * Bot instance associated with this object
	 * @type {Bot}
	 * @memberof InputSticker
	 * @instance
	 * @public
	 */
	public bot?: Bot;

	/**
	 * Creates a new InputSticker instance from raw Telegram API data
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
