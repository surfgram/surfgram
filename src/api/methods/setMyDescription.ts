/**
 * setMyDescription method implementation for Surfgram Telegram Bot SDK
 * @module methods/setMyDescription
 * @description Use this method to change the bot&#39;s description, which is shown in the chat with the bot if the chat is empty. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#setMyDescription Telegram API Documentation}
 */

import { Bot } from "../../core/bot";
import { camelToSnake } from "../../core/utils";

/**
 * Use this method to change the bot&#39;s description, which is shown in the chat with the bot if the chat is empty. Returns True on success.
 * @memberof methods
 * @async
 * @function setMyDescription
 * @this {Bot} Bot instance
 *  * @param { string } description? - New bot description; 0-512 characters. Pass an empty string to remove the dedicated description for the given language.
 *  * @param { string } languageCode? - A two-letter ISO 639-1 language code. If empty, the description will be applied to all users for whose language there is no dedicated description.
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.setMyDescription(...);
 */
export async function setMyDescription(
	this: Bot,
	description?: string,
	languageCode?: string,
): Promise<any> {
	const apiParams = {
		description: description,
		languageCode: languageCode,
	};
	const snakeParams = camelToSnake(apiParams);
	const response = await this.callApi<any>("setMyDescription", snakeParams);
	return response;
}
