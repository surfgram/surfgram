/**
 * setChatDescription method implementation for Surfgram Telegram Bot SDK
 * @module methods/setChatDescription
 * @description Use this method to change the description of a group, a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#setChatDescription Telegram API Documentation}
 */

import { Bot } from "../../core/bot";
import { camelToSnake } from "../../core/utils";

/**
 * Use this method to change the description of a group, a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
 * @memberof methods
 * @async
 * @function setChatDescription
 * @this {Bot} Bot instance
 *  * @param { number | string } chatId - Unique identifier for the target chat or username of the target channel \(in the format @channelusername\)
 *  * @param { string } description? - New chat description, 0-255 characters
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.setChatDescription(...);
 */
export async function setChatDescription(
	this: Bot,
	chatId: number | string,
	description?: string,
): Promise<any> {
	const apiParams = {
		chatId: chatId,
		description: description,
	};
	const snakeParams = camelToSnake(apiParams);
	const response = await this.callApi<any>("setChatDescription", snakeParams);
	return response;
}
