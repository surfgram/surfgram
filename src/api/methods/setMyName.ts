/**
 * setMyName method implementation for Surfgram Telegram Bot SDK
 * @module methods/setMyName
 * @description Use this method to change the bot&#39;s name. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#setMyName Telegram API Documentation}
 */

import { Bot } from "../../core/bot";
import { camelToSnake } from "../../core/utils";

/**
 * Use this method to change the bot&#39;s name. Returns True on success.
 * @memberof methods
 * @async
 * @function setMyName
 * @this {Bot} Bot instance
 *  * @param { string } name? - New bot name; 0-64 characters. Pass an empty string to remove the dedicated name for the given language.
 *  * @param { string } languageCode? - A two-letter ISO 639-1 language code. If empty, the name will be shown to all users for whose language there is no dedicated name.
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.setMyName(...);
 */
export async function setMyName(
	this: Bot,
	name?: string,
	languageCode?: string,
): Promise<any> {
	const apiParams = {
		name: name,
		languageCode: languageCode,
	};
	const snakeParams = camelToSnake(apiParams);
	const response = await this.callApi<any>("setMyName", snakeParams);
	return response;
}
