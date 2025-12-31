/**
 * Game class for Surfgram Telegram Bot SDK
 * @module types/game
 * @description This object represents a game. Use BotFather to create and edit games, their short names will act as unique identifiers.
 * @see {@link https://core.telegram.org/bots/api#game Telegram API Documentation}
 * @class Game
 * @extends TelegramObject
 */

import { Bot } from "../../core/bot";
import { snakeToCamel } from "../../core/utils";
import { TelegramObject } from "./telegramObject";
import { PhotoSize } from "./photoSize";
import { MessageEntity } from "./messageEntity";
import { Animation } from "./animation";

/**
 * Represents a Game object from the Telegram Bot API
 * @class Game
 */
export class Game {
	/**
	 * Title of the game
	 * @type { string }
	 * @memberof Game
	 * @instance
	 * @public
	 */
	title!: string;

	/**
	 * Description of the game
	 * @type { string }
	 * @memberof Game
	 * @instance
	 * @public
	 */
	description!: string;

	/**
	 * Photo that will be displayed in the game message in chats.
	 * @type { PhotoSize[] }
	 * @memberof Game
	 * @instance
	 * @public
	 */
	photo!: PhotoSize[];

	/**
	 * Optional. Brief description of the game or high scores included in the game message. Can be automatically edited to include current high scores for the game when the bot calls setGameScore, or manually edited using editMessageText. 0-4096 characters.
	 * @type { string }
	 * @memberof Game
	 * @instance
	 * @public
	 */
	text?: string;

	/**
	 * Optional. Special entities that appear in text, such as usernames, URLs, bot commands, etc.
	 * @type { MessageEntity[] }
	 * @memberof Game
	 * @instance
	 * @public
	 */
	textEntities?: MessageEntity[];

	/**
	 * Optional. Animation that will be displayed in the game message in chats. Upload via BotFather
	 * @type { Animation }
	 * @memberof Game
	 * @instance
	 * @public
	 */
	animation?: Animation;

	/**
	 * Raw data from Telegram API in snake_case format
	 * @type {TelegramObject}
	 * @memberof Game
	 * @instance
	 * @public
	 */
	public raw?: TelegramObject;

	/**
	 * Bot instance associated with this object
	 * @type {Bot}
	 * @memberof Game
	 * @instance
	 * @public
	 */
	public bot?: Bot;

	/**
	 * Creates a new Game instance from raw Telegram API data
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
