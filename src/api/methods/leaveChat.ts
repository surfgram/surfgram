/**
 * leaveChat method implementation for Surfgram Telegram Bot SDK
 * @module methods/leaveChat
 * @description Use this method for your bot to leave a group, supergroup or channel. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#leaveChat Telegram API Documentation}
 */

import { Bot } from "../../core/bot";
import { camelToSnake } from "../../core/utils";

/**
 * Use this method for your bot to leave a group, supergroup or channel. Returns True on success.
 * @memberof methods
 * @async
 * @function leaveChat
 * @this {Bot} Bot instance
 *  * @param { number | string } chatId - Unique identifier for the target chat or username of the target supergroup or channel \(in the format @channelusername\). Channel direct messages chats aren't supported; leave the corresponding channel instead.
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.leaveChat(...);
 */
export async function leaveChat(
	this: Bot,
	chatId: number | string,
): Promise<any> {
	const apiParams = {
		chatId: chatId,
	};
	const snakeParams = camelToSnake(apiParams);
	const response = await this.callApi<any>("leaveChat", snakeParams);
	return response;
}
