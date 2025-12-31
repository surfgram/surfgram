/**
 * verifyChat method implementation for Surfgram Telegram Bot SDK
 * @module methods/verifyChat
 * @description Verifies a chat on behalf of the organization which is represented by the bot. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#verifyChat Telegram API Documentation}
 */

import { Bot } from "../../core/bot";
import { camelToSnake } from "../../core/utils";

/**
 * Verifies a chat on behalf of the organization which is represented by the bot. Returns True on success.
 * @memberof methods
 * @async
 * @function verifyChat
 * @this {Bot} Bot instance
 *  * @param { number | string } chatId - Unique identifier for the target chat or username of the target channel \(in the format @channelusername\). Channel direct messages chats can't be verified.
 *  * @param { string } customDescription? - Custom description for the verification; 0-70 characters. Must be empty if the organization isn't allowed to provide a custom verification description.
 *  * @returns {Promise<any>} Promise resolving to method result
 * @throws {Error} If API call fails or returns error
 * @example
 * // Direct parameters
 * await bot.verifyChat(...);
 */
export async function verifyChat(
	this: Bot,
	chatId: number | string,
	customDescription?: string,
): Promise<any> {
	const apiParams = {
		chatId: chatId,
		customDescription: customDescription,
	};
	const snakeParams = camelToSnake(apiParams);
	const response = await this.callApi<any>("verifyChat", snakeParams);
	return response;
}
