/**
 * getChatMenuButton method implementation for Surfgram Telegram Bot SDK
 * @module methods/getChatMenuButton
 * @description Use this method to get the current value of the bot&#39;s menu button in a private chat, or the default menu button. Returns MenuButton on success.
 * @see {@link https://core.telegram.org/bots/api#getChatMenuButton Telegram API Documentation}
 */

import { Bot } from "../../core/bot";
import { camelToSnake } from "../../core/utils";

/**
 * Use this method to get the current value of the bot&#39;s menu button in a private chat, or the default menu button. Returns MenuButton on success.
 * @memberof methods
 * @async
 * @function getChatMenuButton
 * @this {Bot} Bot instance
 *  * @param { number } chatId? - Unique identifier for the target private chat. If not specified, default bot's menu button will be returned
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.getChatMenuButton(...);
 */
export async function getChatMenuButton(
	this: Bot,
	chatId?: number,
): Promise<any> {
	const apiParams = {
		chatId: chatId,
	};
	const snakeParams = camelToSnake(apiParams);
	const response = await this.callApi<any>("getChatMenuButton", snakeParams);
	return response;
}
