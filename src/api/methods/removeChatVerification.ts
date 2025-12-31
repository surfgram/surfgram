/**
 * removeChatVerification method implementation for Surfgram Telegram Bot SDK
 * @module methods/removeChatVerification
 * @description Removes verification from a chat that is currently verified on behalf of the organization represented by the bot. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#removeChatVerification Telegram API Documentation}
 */

import { Bot } from "../../core/bot";
import { camelToSnake } from "../../core/utils";

/**
 * Removes verification from a chat that is currently verified on behalf of the organization represented by the bot. Returns True on success.
 * @memberof methods
 * @async
 * @function removeChatVerification
 * @this {Bot} Bot instance
 *  * @param { number | string } chatId - Unique identifier for the target chat or username of the target channel \(in the format @channelusername\)
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.removeChatVerification(...);
 */
export async function removeChatVerification(
	this: Bot,
	chatId: number | string,
): Promise<any> {
	const apiParams = {
		chatId: chatId,
	};
	const snakeParams = camelToSnake(apiParams);
	const response = await this.callApi<any>(
		"removeChatVerification",
		snakeParams,
	);
	return response;
}
