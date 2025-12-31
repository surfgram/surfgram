/**
 * getChatMember method implementation for Surfgram Telegram Bot SDK
 * @module methods/getChatMember
 * @description Use this method to get information about a member of a chat. The method is only guaranteed to work for other users if the bot is an administrator in the chat. Returns a ChatMember object on success.
 * @see {@link https://core.telegram.org/bots/api#getChatMember Telegram API Documentation}
 */

import { Bot } from "../../core/bot";
import { camelToSnake } from "../../core/utils";

/**
 * Use this method to get information about a member of a chat. The method is only guaranteed to work for other users if the bot is an administrator in the chat. Returns a ChatMember object on success.
 * @memberof methods
 * @async
 * @function getChatMember
 * @this {Bot} Bot instance
 *  * @param { number | string } chatId - Unique identifier for the target chat or username of the target supergroup or channel \(in the format @channelusername\)
 *  * @param { number } userId - Unique identifier of the target user
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.getChatMember(...);
 */
export async function getChatMember(
	this: Bot,
	chatId: number | string,
	userId: number,
): Promise<any> {
	const apiParams = {
		chatId: chatId,
		userId: userId,
	};
	const snakeParams = camelToSnake(apiParams);
	const response = await this.callApi<any>("getChatMember", snakeParams);
	return response;
}
