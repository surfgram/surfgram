/**
 * InlineQueryResultPhoto class for Surfgram Telegram Bot SDK
 * @module types/inlineQueryResultPhoto
 * @description Represents a link to a photo. By default, this photo will be sent by the user with optional caption. Alternatively, you can use input\_message\_content to send a message with the specified content instead of the photo.
 * @see {@link https://core.telegram.org/bots/api#inlinequeryresultphoto Telegram API Documentation}
 * @class InlineQueryResultPhoto
 * @extends TelegramObject
 */

import { Bot } from "../../core/bot";
import { snakeToCamel } from "../../core/utils";
import { TelegramObject } from "./telegramObject";
import { MessageEntity } from "./messageEntity";
import { InlineKeyboardMarkup } from "./inlineKeyboardMarkup";
import { InputMessageContent } from "./inputMessageContent";

/**
 * Represents a InlineQueryResultPhoto object from the Telegram Bot API
 * @class InlineQueryResultPhoto
 */
export class InlineQueryResultPhoto {
	/**
	 * Type of the result, must be photo
	 * @type { string }
	 * @memberof InlineQueryResultPhoto
	 * @instance
	 * @public
	 */
	type!: string;

	/**
	 * Unique identifier for this result, 1-64 bytes
	 * @type { string }
	 * @memberof InlineQueryResultPhoto
	 * @instance
	 * @public
	 */
	id!: string;

	/**
	 * A valid URL of the photo. Photo must be in JPEG format. Photo size must not exceed 5MB
	 * @type { string }
	 * @memberof InlineQueryResultPhoto
	 * @instance
	 * @public
	 */
	photoUrl!: string;

	/**
	 * URL of the thumbnail for the photo
	 * @type { string }
	 * @memberof InlineQueryResultPhoto
	 * @instance
	 * @public
	 */
	thumbnailUrl!: string;

	/**
	 * Optional. Width of the photo
	 * @type { number }
	 * @memberof InlineQueryResultPhoto
	 * @instance
	 * @public
	 */
	photoWidth?: number;

	/**
	 * Optional. Height of the photo
	 * @type { number }
	 * @memberof InlineQueryResultPhoto
	 * @instance
	 * @public
	 */
	photoHeight?: number;

	/**
	 * Optional. Title for the result
	 * @type { string }
	 * @memberof InlineQueryResultPhoto
	 * @instance
	 * @public
	 */
	title?: string;

	/**
	 * Optional. Short description of the result
	 * @type { string }
	 * @memberof InlineQueryResultPhoto
	 * @instance
	 * @public
	 */
	description?: string;

	/**
	 * Optional. Caption of the photo to be sent, 0-1024 characters after entities parsing
	 * @type { string }
	 * @memberof InlineQueryResultPhoto
	 * @instance
	 * @public
	 */
	caption?: string;

	/**
	 * Optional. Mode for parsing entities in the photo caption. See formatting options for more details.
	 * @type { string }
	 * @memberof InlineQueryResultPhoto
	 * @instance
	 * @public
	 */
	parseMode?: string;

	/**
	 * Optional. List of special entities that appear in the caption, which can be specified instead of parse\_mode
	 * @type { MessageEntity[] }
	 * @memberof InlineQueryResultPhoto
	 * @instance
	 * @public
	 */
	captionEntities?: MessageEntity[];

	/**
	 * Optional. Pass True, if the caption must be shown above the message media
	 * @type { boolean }
	 * @memberof InlineQueryResultPhoto
	 * @instance
	 * @public
	 */
	showCaptionAboveMedia?: boolean;

	/**
	 * Optional. Inline keyboard attached to the message
	 * @type { InlineKeyboardMarkup }
	 * @memberof InlineQueryResultPhoto
	 * @instance
	 * @public
	 */
	replyMarkup?: InlineKeyboardMarkup;

	/**
	 * Optional. Content of the message to be sent instead of the photo
	 * @type { InputMessageContent }
	 * @memberof InlineQueryResultPhoto
	 * @instance
	 * @public
	 */
	inputMessageContent?: InputMessageContent;

	/**
	 * Raw data from Telegram API in snake_case format
	 * @type {TelegramObject}
	 * @memberof InlineQueryResultPhoto
	 * @instance
	 * @public
	 */
	public raw?: TelegramObject;

	/**
	 * Bot instance associated with this object
	 * @type {Bot}
	 * @memberof InlineQueryResultPhoto
	 * @instance
	 * @public
	 */
	public bot?: Bot;

	/**
	 * Creates a new InlineQueryResultPhoto instance from raw Telegram API data
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
