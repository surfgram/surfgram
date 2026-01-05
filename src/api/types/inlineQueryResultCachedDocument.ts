/**
 * InlineQueryResultCachedDocument class for Surfgram Telegram Bot SDK
 * @module types/inlineQueryResultCachedDocument
 * @description Represents a link to a file stored on the Telegram servers. By default, this file will be sent by the user with an optional caption. Alternatively, you can use input\_message\_content to send a message with the specified content instead of the file.
 * @see {@link https://core.telegram.org/bots/api#inlinequeryresultcacheddocument Telegram API Documentation}
 * @class InlineQueryResultCachedDocument
 * @extends TelegramObject
 */

import { Bot } from "../../core/bot";
import { snakeToCamel } from "../../core/utils";
import { TelegramObject } from "./telegramObject";
import { MessageEntity } from "./messageEntity";
import { InlineKeyboardMarkup } from "./inlineKeyboardMarkup";
import { InputMessageContent } from "./inputMessageContent";

/**
 * Represents a InlineQueryResultCachedDocument object from the Telegram Bot API
 * @class InlineQueryResultCachedDocument
 */
export class InlineQueryResultCachedDocument {
	/**
	 * Type of the result, must be document
	 * @type { string }
	 * @memberof InlineQueryResultCachedDocument
	 * @instance
	 * @public
	 */
	type!: string;

	/**
	 * Unique identifier for this result, 1-64 bytes
	 * @type { string }
	 * @memberof InlineQueryResultCachedDocument
	 * @instance
	 * @public
	 */
	id!: string;

	/**
	 * Title for the result
	 * @type { string }
	 * @memberof InlineQueryResultCachedDocument
	 * @instance
	 * @public
	 */
	title!: string;

	/**
	 * A valid file identifier for the file
	 * @type { string }
	 * @memberof InlineQueryResultCachedDocument
	 * @instance
	 * @public
	 */
	documentFileId!: string;

	/**
	 * Optional. Short description of the result
	 * @type { string }
	 * @memberof InlineQueryResultCachedDocument
	 * @instance
	 * @public
	 */
	description?: string;

	/**
	 * Optional. Caption of the document to be sent, 0-1024 characters after entities parsing
	 * @type { string }
	 * @memberof InlineQueryResultCachedDocument
	 * @instance
	 * @public
	 */
	caption?: string;

	/**
	 * Optional. Mode for parsing entities in the document caption. See formatting options for more details.
	 * @type { string }
	 * @memberof InlineQueryResultCachedDocument
	 * @instance
	 * @public
	 */
	parseMode?: string;

	/**
	 * Optional. List of special entities that appear in the caption, which can be specified instead of parse\_mode
	 * @type { MessageEntity[] }
	 * @memberof InlineQueryResultCachedDocument
	 * @instance
	 * @public
	 */
	captionEntities?: MessageEntity[];

	/**
	 * Optional. Inline keyboard attached to the message
	 * @type { InlineKeyboardMarkup }
	 * @memberof InlineQueryResultCachedDocument
	 * @instance
	 * @public
	 */
	replyMarkup?: InlineKeyboardMarkup;

	/**
	 * Optional. Content of the message to be sent instead of the file
	 * @type { InputMessageContent }
	 * @memberof InlineQueryResultCachedDocument
	 * @instance
	 * @public
	 */
	inputMessageContent?: InputMessageContent;

	/**
	 * Raw data from Telegram API in snake_case format
	 * @type {TelegramObject}
	 * @memberof InlineQueryResultCachedDocument
	 * @instance
	 * @public
	 */
	public raw?: TelegramObject;

	/**
	 * Bot instance associated with this object
	 * @type {Bot}
	 * @memberof InlineQueryResultCachedDocument
	 * @instance
	 * @public
	 */
	public bot?: Bot;

	/**
	 * Creates a new InlineQueryResultCachedDocument instance from raw Telegram API data
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
