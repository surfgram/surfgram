/**
 * getMyCommands method implementation for Surfgram Telegram Bot SDK
 * @module methods/getMyCommands
 * @description Use this method to get the current list of the bot&#39;s commands for the given scope and user language. Returns an Array of BotCommand objects. If commands aren&#39;t set, an empty list is returned.
 * @see {@link https://core.telegram.org/bots/api#getMyCommands Telegram API Documentation}
 */

import { Bot } from "../../core/bot";
import { camelToSnake } from "../../core/utils";
import { BotCommandScope } from "../types/botCommandScope";

/**
 * Use this method to get the current list of the bot&#39;s commands for the given scope and user language. Returns an Array of BotCommand objects. If commands aren&#39;t set, an empty list is returned.
 * @memberof methods
 * @async
 * @function getMyCommands
 * @this {Bot} Bot instance
 *  * @param { BotCommandScope } scope? - A JSON-serialized object, describing scope of users. Defaults to BotCommandScopeDefault.
 *  * @param { string } languageCode? - A two-letter ISO 639-1 language code or an empty string
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.getMyCommands(...);
 */
export async function getMyCommands(
	this: Bot,
	scope?: BotCommandScope,
	languageCode?: string,
): Promise<any> {
	const apiParams = {
		scope: scope,
		languageCode: languageCode,
	};
	const snakeParams = camelToSnake(apiParams);
	const response = await this.callApi<any>("getMyCommands", snakeParams);
	return response;
}
