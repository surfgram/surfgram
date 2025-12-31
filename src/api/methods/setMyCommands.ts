/**
 * setMyCommands method implementation for Surfgram Telegram Bot SDK
 * @module methods/setMyCommands
 * @description Use this method to change the list of the bot&#39;s commands. See this manual for more details about bot commands. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#setMyCommands Telegram API Documentation}
 */

import { Bot } from "../../core/bot";
import { camelToSnake } from "../../core/utils";
import { BotCommand } from "../types/botCommand";
import { BotCommandScope } from "../types/botCommandScope";

/**
 * Use this method to change the list of the bot&#39;s commands. See this manual for more details about bot commands. Returns True on success.
 * @memberof methods
 * @async
 * @function setMyCommands
 * @this {Bot} Bot instance
 *  * @param { BotCommand[] } commands - A JSON-serialized list of bot commands to be set as the list of the bot's commands. At most 100 commands can be specified.
 *  * @param { BotCommandScope } scope? - A JSON-serialized object, describing scope of users for which the commands are relevant. Defaults to BotCommandScopeDefault.
 *  * @param { string } languageCode? - A two-letter ISO 639-1 language code. If empty, commands will be applied to all users from the given scope, for whose language there are no dedicated commands
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.setMyCommands(...);
 */
export async function setMyCommands(
	this: Bot,
	commands: BotCommand[],
	scope?: BotCommandScope,
	languageCode?: string,
): Promise<any> {
	const apiParams = {
		commands: commands,
		scope: scope,
		languageCode: languageCode,
	};
	const snakeParams = camelToSnake(apiParams);
	const response = await this.callApi<any>("setMyCommands", snakeParams);
	return response;
}
